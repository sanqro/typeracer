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

<main class="p-6">
	{#if scoreboardData && scoreboardData.length > 0}
		<table class="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
			<thead class="bg-black text-white">
				<tr>
					<th class="px-4 py-2">Rank</th>
					<th class="px-4 py-2">Username</th>
					<th class="px-4 py-2">Accuracy</th>
					<th class="px-4 py-2">WPM</th>
				</tr>
			</thead>
			<tbody class="divide-y divide-gray-300">
				{#each scoreboardData as player}
					<tr class="text-center">
						<td class="px-4 py-2">{player.rank}</td>
						<td class="px-4 py-2">{player.username}</td>
						<td class="px-4 py-2">{player.accuracy}</td>
						<td class="px-4 py-2">{player.wpm}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	{:else}
		<div class="bg-white p-4 rounded-lg shadow-md">
			<p class="text-center text-black">No data available yet.</p>
		</div>
	{/if}
</main>
