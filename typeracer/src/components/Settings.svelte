<script lang="ts">
	import {
		updateWordsCount,
		updateDuration,
		updateTestType,
		updateShowRemaining,
		updateShowElapsedTime,
		updateShowErrors,
		updateShowAccuracy,
		updateShowWpm,
		wordsCount,
		duration,
		testType,
		showRemaining,
		showElapsedTime,
		showErrors,
		showAccuracy,
		showWpm
	} from '../store/settingsStore';

	const handleWordsCountChange = () => {
		if ($wordsCount !== undefined) {
			updateWordsCount($wordsCount);
		}
	};

	const handleDurationChange = () => {
		if ($duration !== undefined) {
			updateDuration($duration);
		}
	};
	const handleTestTypeChange = () => {
		if ($testType !== undefined) {
			updateTestType($testType);
		}
	};

	const handleShowRemainingChange = () => {
		if ($showRemaining !== undefined) {
			updateShowRemaining($showRemaining);
		}
	};
	const handleShowElapsedTimeChange = () => {
		if ($showElapsedTime !== undefined) {
			updateShowElapsedTime($showElapsedTime);
		}
	};
	const handleShowErrorsChange = () => {
		if ($showErrors !== undefined) {
			updateShowErrors($showErrors);
		}
	};
	const handleShowAccuracyChange = () => {
		if ($showAccuracy !== undefined) {
			updateShowAccuracy($showAccuracy);
		}
	};
	const handleShowWpmChange = () => {
		if ($showWpm !== undefined) {
			updateShowWpm($showWpm);
		}
	};
</script>

<div class="container mx-auto p-4">
	<h1 class="text-4xl mb-4">Settings</h1>
	<form>
		{#if $testType === 'words'}
			<div class="mb-4">
				<label for="wordsCount" class="block text-black">Number of Words:</label>
				<select
					id="wordsCount"
					bind:value={$wordsCount}
					on:change={handleWordsCountChange}
					class="mt-1 p-2 block w-full rounded-md border-black-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
				>
					<option value="10">10</option>
					<option value="25">25</option>
					<option value="50">50</option>
					<option value="100">100</option>
				</select>
			</div>
		{/if}
		{#if $testType === 'time'}
			<div class="mb-4">
				<label for="duration" class="block text-black"
					>Duration of the typing test in seconds:</label
				>
				<select
					id="duration"
					bind:value={$duration}
					on:change={handleDurationChange}
					class="mt-1 p-2 block w-full rounded-md border-black-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
				>
					<option value="15">15</option>
					<option value="30">30</option>
					<option value="60">60</option>
					<option value="120">120</option>
				</select>
			</div>
		{/if}
		<div class="mb-4">
			<label for="testType" class="block text-black">Type of the Test</label>
			<select
				id="testType"
				bind:value={$testType}
				on:change={handleTestTypeChange}
				class="mt-1 p-2 block w-full rounded-md border-black-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
			>
				<option value="words">Number of Words</option>
				<option value="time">Time</option>
			</select>
		</div>
		<div class="mb-4">
			{#if $testType == 'words'}
				<label for="showRemaining" class="block text-black">Show remaining words</label>
			{:else if $testType == 'time'}
				<label for="showRemaining" class="block text-black">Show remaining time</label>
			{/if}
			<select
				id="showRemaining"
				bind:value={$showRemaining}
				on:change={handleShowRemainingChange}
				class="mt-1 p-2 block w-full rounded-md border-black-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
			>
				<option value="true">True</option>
				<option value="false">False</option>
			</select>
		</div>
		<div class="mb-4">
			<label for="showElapsedTime" class="block text-black">Show elapsed time</label>
			<select
				id="showElapsedTime"
				bind:value={$showElapsedTime}
				on:change={handleShowElapsedTimeChange}
				class="mt-1 p-2 block w-full rounded-md border-black-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
			>
				<option value="true">True</option>
				<option value="false">False</option>
			</select>
		</div>
		<div class="mb-4">
			<label for="showErrors" class="block text-black">Show errors</label>
			<select
				id="showErrors"
				bind:value={$showErrors}
				on:change={handleShowErrorsChange}
				class="mt-1 p-2 block w-full rounded-md border-black-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
			>
				<option value="true">True</option>
				<option value="false">False</option>
			</select>
		</div>
		<div class="mb-4">
			<label for="showAccuracy" class="block text-black">Show accuracy</label>
			<select
				id="showAccuracy"
				bind:value={$showAccuracy}
				on:change={handleShowAccuracyChange}
				class="mt-1 p-2 block w-full rounded-md border-black-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
			>
				<option value="true">True</option>
				<option value="false">False</option>
			</select>
		</div>
		<div class="mb-4">
			<label for="showWpm" class="block text-black">Show words per minute</label>
			<select
				id="showWpm"
				bind:value={$showWpm}
				on:change={handleShowWpmChange}
				class="mt-1 p-2 block w-full rounded-md border-black-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
			>
				<option value="true">True</option>
				<option value="false">False</option>
			</select>
		</div>
	</form>
</div>
