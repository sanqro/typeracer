<script lang="ts">
	import words from '../lib/words.json';

	let currentWordIndex = 0;
	let userInput = '';
	let correctChars = 0;
	let errors = 0;
	let startTime: number | null = null;
	let elapsedTime = 0;
	let wpm = 0;

	const startTimer = () => {
		if (startTime === null) {
			startTime = new Date().getTime();
			const interval = setInterval(() => {
				elapsedTime = Math.floor((new Date().getTime() - startTime!) / 1000);
				if (currentWordIndex >= words.length) clearInterval(interval);
				wpm = calculateWPM(correctChars, elapsedTime);
			}, 1000);
		}
	};

	const checkInput = () => {
		startTimer();
		if (
			userInput === words[currentWordIndex] + ' ' ||
			(userInput === words[currentWordIndex] && currentWordIndex === words.length - 1)
		) {
			correctChars += userInput.length;
			currentWordIndex++;
			userInput = '';
		} else if (!words[currentWordIndex].startsWith(userInput)) {
			errors++;
		}
	};

	const calculateWPM = (charsTyped: number, timeElapsed: number): number => {
		const averageWordLength = 5;
		const wordsTyped = charsTyped / averageWordLength;
		return Math.floor((wordsTyped / timeElapsed) * 60);
	};
</script>

<div class="container mx-auto p-4">
	<header class="text-center">
		<h1 class="text-4xl mb-4">TypeRacer</h1>
	</header>

	<section class="mt-8">
		<p class="text-xl">
			Type the word: <span class="font-bold">{words[currentWordIndex]}</span>
		</p>
		<input
			class="mt-4 p-2 border rounded w-full"
			type="text"
			bind:value={userInput}
			on:input={checkInput}
			placeholder="Start typing here..."
		/>
		{#if currentWordIndex < words.length}
		<p>Elapsed Time: {elapsedTime} seconds</p>
		<p>Words Per Minute: {wpm}</p>
		<p>Errors: {errors}</p>
		{/if}
	</section>
</div>
