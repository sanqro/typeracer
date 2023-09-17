<script lang="ts">
	let isLoggedIn = false;
	let username: string | null;

	const token = localStorage.getItem('token');
	username = localStorage.getItem('username');
	if (token && username) {
		isLoggedIn = true;
	}

	const logout = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('username');
		isLoggedIn = false;
	};
</script>

<nav class="p-4">
	<div class="container mx-auto flex justify-between items-center">
		<div class="flex space-x-4">
			{#if window.location.pathname !== '/'}
				<a href="/" class="text-white text-lg font-semibold hover:text-blue-300">Go Home</a>
			{/if}
			{#if window.location.pathname !== '/scoreboard'}
				<a href="/scoreboard" class="text-white text-lg font-semibold hover:text-blue-300"
					>Scoreboard</a
				>
			{/if}
			{#if window.location.pathname !== '/settings'}
				<a href="/settings" class="text-white text-lg font-semibold hover:text-blue-300">Settings</a
				>
			{/if}
		</div>

		{#if isLoggedIn}
			<div class="flex space-x-4 items-center">
				<a href="/profile" class="text-white text-lg font-semibold hover:text-blue-300"
					>{username || null}</a
				>
				<button on:click={logout} class="text-white text-lg font-semibold hover:text-blue-300"
					>Logout</button
				>
			</div>
		{:else}
			<div class="text-white">
				<a href="/login" class="text-white text-lg font-semibold hover:text-blue-300">Login</a>
			</div>
		{/if}
	</div>
</nav>
