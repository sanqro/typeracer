<script lang="ts">
	import { onMount } from 'svelte';
	let scoreboardData: any[] = [];

	onMount(async () => {
		try {
			const response = await fetch('/scoreboard');
			if (response.ok) {
				const responseData = await response.json();
				if (responseData.sortedUserScores) {
					scoreboardData = responseData.sortedUserScores;
				}
			}
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	});
</script>

<main>
	{#if scoreboardData && scoreboardData.length > 0}
		<table>
			<thead>
				<tr>
					<th>Rank</th>
					<th>Username</th>
					<th>Accuracy</th>
					<th>WPM</th>
				</tr>
			</thead>
			<tbody>
				{#each scoreboardData as player}
					<tr>
						<td>{player.rank}</td>
						<td>{player.username}</td>
						<td>{player.accuracy}</td>
						<td>{player.wpm}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	{:else}
		<div class="p-4">
			<p>No data available yet.</p>
		</div>
	{/if}
</main>
