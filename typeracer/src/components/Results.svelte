<script>
	/**
	 * @type {number}
	 */
	export let wpm;
	/**
	 * @type {number}
	 */
	export let errors;
	/**
	 * @type {number}
	 */
	export let accuracy;
	/**
	 * @type {number}
	 */
	export let elapsedTime;
</script>

<div class="container mx-auto p-4">
	<h1 class="text-4xl mb-4">Typing Test Results</h1>
	<p>Words Per Minute (WPM): {wpm}</p>
	<p>Errors: {errors}</p>
	<p>Accuracy: {accuracy}</p>
	<p>Elapsed Time: {elapsedTime}</p>
</div>
