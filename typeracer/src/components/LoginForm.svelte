<script lang="ts">
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
			} else {
				alert(res.error);
			}
		} catch (error: any) {}
	};
</script>

<div>
	<h1>Login</h1>
	<form on:submit={login}>
		<div>
			<label for="username">Username</label>
			<input type="text" placeholder="Username" id="username" bind:value={username} required />
		</div>
		<div>
			<label for="password">Password</label>
			<input type="password" placeholder="Password" id="password" bind:value={password} required />
		</div>
		<div>
			<button type="submit">Login</button>
		</div>
	</form>
</div>
