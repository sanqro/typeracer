<script lang="ts">
	import {
		updateWordsCount,
		updateDuration,
		updateTestType,
		wordsCount,
		duration,
		testType
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

	const handeTestTypeChange = () => {
		if ($testType !== undefined) {
			updateTestType($testType);
		}
	};
</script>

<div class="container mx-auto p-4">
	<h1 class="text-4xl mb-4">Settings</h1>
	<form>
		{#if $testType === 'words'}
			<div class="mb-4">
				<label for="wordsCount" class="block text-gray-700">Number of Words:</label>
				<select
					id="wordsCount"
					bind:value={$wordsCount}
					on:change={handleWordsCountChange}
					class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
				<label for="duration" class="block text-gray-700"
					>Duration of the typing test in seconds:</label
				>
				<select
					id="duration"
					bind:value={$duration}
					on:change={handleDurationChange}
					class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
				>
					<option value="15">15</option>
					<option value="30">30</option>
					<option value="60">60</option>
					<option value="120">120</option>
				</select>
			</div>
		{/if}
		<div class="mb-4">
			<label for="testType" class="block text-gray-700">Type of the Test</label>
			<select
				id="testType"
				bind:value={$testType}
				on:change={handeTestTypeChange}
				class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
			>
				<option value="words">Number of Words</option>
				<option value="time">Time</option>
			</select>
		</div>
	</form>
</div>
