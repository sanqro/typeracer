<script lang="ts">
	export let wpm: number;
	export let errors: number;
	export let accuracy: number;
	export let elapsedTime: number;
</script>

<div class="container mx-auto p-4 text-center">
	<h1 class="text-4xl mb-4 text-white">Typing Test Results</h1>
	<p class="font-semibold text-white">Words Per Minute (WPM): {wpm}</p>
	<p class="font-semibold text-white">Errors: {errors}</p>
	<p class="font-semibold text-white">Accuracy: {accuracy}</p>
	<p class="font-semibold text-white">Elapsed Time: {elapsedTime} seconds</p>
</div>
