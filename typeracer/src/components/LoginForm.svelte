<script lang="ts">
	import { goto } from '$app/navigation';

	let username = '';
	let password = '';

	const login = async () => {
		try {
			const response = await fetch('/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ username, password })
			});

			const res = await response.json();
			if (res.success) {
				localStorage.setItem('token', res.token);
				localStorage.setItem('username', username);
				goto('/');
			} else {
				alert(res.error);
			}
		} catch (error: any) {}
	};
</script>

<div class="w-full h-[80vh] flex items-center justify-center">
	<div class="w-70 max-w-md">
		<h1 class="text-2xl font-bold mb-4 text-center">Login</h1>
		<form on:submit={login} class="space-y-4">
			<div class="flex flex-col">
				<label for="username" class="mb-2 font-medium">Username</label>
				<input
					type="text"
					placeholder="Username"
					id="username"
					bind:value={username}
					required
					class="border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
				/>
			</div>
			<div class="flex flex-col">
				<label for="password" class="mb-2 font-medium">Password</label>
				<input
					type="password"
					placeholder="Password"
					id="password"
					bind:value={password}
					required
					class="border-gray-300 px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
				/>
			</div>
			<div class="flex flex-col items-center space-y-4">
				<p class="text-sm">
					Don't have an account? <a href="/register" class="text-blue-500 hover:underline"
						>Register here</a
					>
				</p>
				<button
					type="submit"
					class="bg-none text-white text-lg font-semibold hover:text-blue-300
				text-white text-lg font-semibold hover:text-blue-300">Login</button
				>
			</div>
		</form>
	</div>
</div>
