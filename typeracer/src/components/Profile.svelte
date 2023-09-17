<script lang="ts">
	import { onMount } from 'svelte';
	import TestDevelopmentChart from './TestDevelopmentChart.svelte';
	import { checkAuth } from '$lib';

	let userScores: any[] = [];
	let averageWPM: number | null = null;
	let averageAccuracy: number | null = null;
	const username = localStorage.getItem('username') as string;

	onMount(async () => {
		checkAuth();
		const token = localStorage.getItem('token') as string;
		try {
			if (token && username) {
				const response = await fetch('/scores?username=' + username, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						Authorization: token
					}
				});
				const data = await response.json();
				if (data && data.length > 0) {
					userScores = data;
					calculateAverages(data);
				}
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
		<div class="text-center text-white">
			<h1 class="text-2xl font-bold">User Profile of {username}</h1>
			<p class="text-lg">Total Tests: {userScores.length}</p>

			<div style="display: flex; justify-content: space-between;">
				{#if averageWPM !== null && averageAccuracy !== null}
					<div>
						<h1 class="text-2xl font-bold">Averages</h1>
						<p class="text-lg">Average WPM: {averageWPM.toFixed(2)}</p>
						<p class="text-lg">Average Accuracy: {averageAccuracy.toFixed(2)}%</p>
					</div>
				{/if}

				<div>
					<h1 class="text-2xl font-bold">Best Results:</h1>
					<ul>
						{#each userScores
							.filter((score) => score.wpm > 0)
							.sort((a, b) => b.wpm - a.wpm)
							.slice(0, 3) as score, index}
							<li>Test {index + 1}: {score.wpm} WPM, {score.accuracy}% Accuracy</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
		<TestDevelopmentChart />
	{/if}
</main>
