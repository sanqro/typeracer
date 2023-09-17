<script lang="ts">
	let username = '';
	let password = '';

	const register = async () => {
		try {
			const response = await fetch('/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ username, password })
			});

			const res = await response.json();
			if (res.success) {
				alert('Registered successfully!');
			} else {
				alert(res.error);
			}
		} catch (error: any) {}
	};
</script>

<div>
	<h1>Register</h1>
	<form on:submit={register}>
		<div>
			<label for="username">Username</label>
			<input type="text" placeholder="Username" id="username" bind:value={username} required />
		</div>
		<div>
			<label for="password">Password</label>
			<input type="password" placeholder="Password" id="password" bind:value={password} required />
		</div>
		<div>
			<p>Already have an account? <a href="/login">Login here</a></p>
			<button type="submit">Register</button>
		</div>
	</form>
</div>
