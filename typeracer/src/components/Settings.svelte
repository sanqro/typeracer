<script>
	if (localStorage.getItem('wordsCount') === null || localStorage.getItem('duration') === null) {
		localStorage.setItem('wordsCount', '10');
		localStorage.setItem('duration', '15');
	}

	let wordsCount = localStorage.getItem('wordsCount') || '10';
	let duration = localStorage.getItem('duration') || '15';

	const handleWordsCountChange = () => {
		localStorage.setItem('wordsCount', wordsCount);
	};

	const handleDurationChange = () => {
		localStorage.setItem('duration', duration);
	};
</script>

<div class="container mx-auto p-4">
	<h1 class="text-4xl mb-4">Settings</h1>
	<form>
		<div class="mb-4">
			<label for="wordsCount" class="block text-gray-700">Number of Words:</label>
			<select
				id="wordsCount"
				bind:value={wordsCount}
				on:change={handleWordsCountChange}
				class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
			>
				<option value="10">10</option>
				<option value="25">25</option>
				<option value="50">50</option>
				<option value="100">100</option>
			</select>
		</div>

		<div class="mb-4">
			<label for="duration" class="block text-gray-700"
				>Duration of the typing test in seconds:</label
			>
			<select
				id="duration"
				bind:value={duration}
				on:change={handleDurationChange}
				class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
			>
				<option value="15">15</option>
				<option value="30">30</option>
				<option value="60">60</option>
				<option value="120">120</option>
			</select>
		</div>
	</form>
</div>
