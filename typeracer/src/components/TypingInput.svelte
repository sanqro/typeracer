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
	let awaitTimeout: any;
	let interval: any;

	const wordsUnsorted = words as string[];
	const sortedWords: string[] = wordsUnsorted.sort(() => Math.random() - 0.5);

	const startTimer = () => {
		if (startTime === null && !showResults) {
			startTime = new Date().getTime();
			awaitTestEnd();
			interval = setInterval(() => {
				if (!showResults) {
					elapsedTime = Math.floor((new Date().getTime() - startTime!) / 1000);
					wpm = calculateWPM(correctChars, elapsedTime);
					accuracy = calculateAccuracy(correctChars, errors);
				} else {
					clearInterval(interval);
					return 0;
				}
			}, 1000);
		}
	};

	const finishTest = async () => {
		const username = localStorage.getItem('username');
		if (username) {
			const response = await fetch('/scores', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					username: username,
					elapsedTime: elapsedTime,
					wpm: wpm,
					errors: errors,
					accuracy: accuracy,
					testType: $testType
				})
			});
			const res = await response.json();
			if (res.success) {
				console.log('Saved score successfully!');
			} else {
				alert(res.error);
			}
		}
		showResults = true;
	};

	const restartTest = () => {
		currentWordIndex = 0;
		userInput = '';
		correctChars = 0;
		errors = 0;
		startTime = null;
		elapsedTime = 0;
		wpm = 0;
		accuracy = 0;
		showResults = false;
		changeColor = false;
		const wordsUnsorted = words as string[];
		const sortedWords: string[] = wordsUnsorted.sort(() => Math.random() - 0.5);
		stopTimer();
	};

	const stopTimer = () => {
		clearInterval(interval);
		startTime = null;
	};

	const awaitTestEnd = () => {
		if ($testType == 'words') {
			if (currentWordIndex >= wordsCountAsNumber) {
				finishTest();
				return 0;
			}
		} else if ($testType == 'time') {
			if (elapsedTime >= durationAsNumber) {
				finishTest();
				return 0;
			}
		}
		awaitTimeout = setTimeout(awaitTestEnd, 0);
	};

	const checkInput = () => {
		startTimer();
		if (
			userInput === sortedWords[currentWordIndex] + ' ' ||
			(userInput === sortedWords[currentWordIndex] && currentWordIndex === sortedWords.length - 1)
		) {
			correctChars += userInput.length;
			currentWordIndex++;
			userInput = '';
		} else if (!sortedWords[currentWordIndex].startsWith(userInput)) {
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
					{#each sortedWords[currentWordIndex] as letter, index}
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
	{#if showResults}
		<button on:click={restartTest} class="mt-4 p-2 bg-blue-500 text-white rounded"
			>Restart Test</button
		>
	{/if}
</div>
