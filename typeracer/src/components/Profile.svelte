<script lang="ts">
	import { onMount } from 'svelte';

	let userScores: any[] = [];
	let averageWPM: number | null = null;
	let averageAccuracy: number | null = null;

	const username = localStorage.getItem('username');
	onMount(async () => {
		try {
			const response = await fetch('/scores?username=' + username, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const data = await response.json();
			if (data && data.length > 0) {
				userScores = data;
				calculateAverages(data);
			}
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	});

	const calculateAverages = (scores: any[]) => {
		const totalWPM = scores.reduce((sum, score) => sum + score.wpm, 0);
		const totalAccuracy = scores.reduce((sum, score) => sum + score.accuracy, 0);

		const avgWPM = totalWPM / scores.length;
		const avgAccuracy = totalAccuracy / scores.length;

		averageWPM = avgWPM;
		averageAccuracy = avgAccuracy;
	};
</script>

<main>
	{#if userScores.length === 0}
		<p>No Data Available</p>
	{:else}
		<div>
			<h1>User Profile of {username}</h1>
			<p>Total Tests: {userScores.length}</p>
			<h1>Best Results:</h1>
			<ul>
				{#each userScores
					.filter((score) => score.wpm > 0)
					.sort((a, b) => b.wpm - a.wpm)
					.slice(0, 3) as score, index}
					Test {index + 1}: {score.wpm} WPM, {score.accuracy}% Accuracy
				{/each}
			</ul>
			{#if averageWPM !== null && averageAccuracy !== null}
				<div>
					<h1>Averages</h1>
					<p>Average WPM: {averageWPM.toFixed(2)}</p>
					<p>Average Accuracy: {averageAccuracy.toFixed(2)}%</p>
				</div>
			{/if}
		</div>
	{/if}
</main>
