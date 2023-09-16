<script lang="ts">
	import words from '../lib/words.json';
	import Results from './Results.svelte';
	import {
		wordsCount,
		duration,
		testType,
		showElapsedTime,
		showAccuracy,
		showErrors,
		showWpm
	} from '../store/settingsStore';

	let currentWordIndex = 0;
	let userInput = '';
	let correctChars = 0;
	let errors = 0;
	let startTime: number | null = null;
	let elapsedTime = 0;
	let wpm = 0;
	let accuracy = 0;
	let showResults = false;
	let wordsCountAsNumber = parseInt($wordsCount);
	let durationAsNumber = parseInt($duration);
	let changeColor = false;

	const startTimer = () => {
		if (startTime === null && !showResults) {
			startTime = new Date().getTime();
			awaitTestEnd();
			const interval = setInterval(() => {
				if (!showResults) {
					elapsedTime = Math.floor((new Date().getTime() - startTime!) / 1000);
					wpm = calculateWPM(correctChars, elapsedTime);
					accuracy = calculateAccuracy(correctChars, errors);
				} else {
					return 0;
				}
			}, 1000);
		}
	};

	const finishTest = () => {
		showResults = true;
	};

	const awaitTestEnd = () => {
		if (currentWordIndex >= wordsCountAsNumber || elapsedTime >= durationAsNumber) {
			finishTest();
		} else {
			console.log('hi');
			setTimeout(awaitTestEnd, 0);
		}
	};

	const checkTest = () => {
		if ($testType == 'words') {
			if (currentWordIndex >= wordsCountAsNumber) {
				finishTest();
			}
		} else if ($testType == 'time') {
			if (elapsedTime >= durationAsNumber) {
				finishTest();
			}
		}
	};

	const checkInput = () => {
		startTimer();
		checkTest();
		if (
			userInput === words[currentWordIndex] + ' ' ||
			(userInput === words[currentWordIndex] && currentWordIndex === words.length - 1)
		) {
			correctChars += userInput.length;
			currentWordIndex++;
			userInput = '';
		} else if (!words[currentWordIndex].startsWith(userInput)) {
			errors++;
			changeColor = true;
		}
	};

	const calculateWPM = (charsTyped: number, timeElapsed: number): number => {
		const averageWordLength = 5;
		const wordsTyped = charsTyped / averageWordLength;
		return Math.floor((wordsTyped / timeElapsed) * 60);
	};

	const calculateAccuracy = (correctChars: number, errors: number): number => {
		if (errors === 0) return 100;

		const accuracy = (correctChars / (correctChars + errors)) * 100;

		if (accuracy < 1) {
			return 1;
		} else if (accuracy > 100) {
			return 100;
		} else {
			return Math.floor(accuracy);
		}
	};
</script>

<div class="container mx-auto p-4">
	<header class="text-center">
		<h1 class="text-4xl mb-4">TypeRacer</h1>
	</header>

	<div class="container mx-auto p-4">
		{#if showResults}
			<Results {wpm} {errors} {accuracy} {elapsedTime} />
		{/if}
	</div>

	{#if !showResults}
		<section class="mt-8">
			<p class="text-xl">
				Type the word: <span class="text-black">
					{#each words[currentWordIndex] as letter, index}
						<span
							class={changeColor && index < userInput.length && userInput[index] !== letter
								? 'text-red-500'
								: 'text-black'}>{letter}</span
						>
					{/each}
				</span>
			</p>
			<input
				class="mt-4 p-2 border rounded w-full"
				type="text"
				bind:value={userInput}
				on:input={checkInput}
				placeholder="Start typing here..."
			/>
			{#if $showElapsedTime == 'true'}
				<p>Elapsed Time: {elapsedTime} seconds</p>
			{/if}
			{#if $showWpm == 'true'}
				<p>Words Per Minute: {wpm}</p>
			{/if}
			{#if $showErrors == 'true'}
				<p>Errors: {errors}</p>
			{/if}
			{#if $showAccuracy == 'true'}
				<p>Accuracy: {accuracy}%</p>
			{/if}

			{#if $testType == 'words'}
				<p>Remaning words: {wordsCountAsNumber - currentWordIndex}</p>
			{:else if $testType == 'time'}
				<p>Remaning time: {durationAsNumber - elapsedTime}</p>
			{/if}
		</section>
	{/if}
</div>
