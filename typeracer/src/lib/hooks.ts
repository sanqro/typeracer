import { goto } from '$app/navigation';

export function checkAuth() {
	const username = localStorage.getItem('username');
	const token = localStorage.getItem('token');

	if (
		!username ||
		!token ||
		username === 'undefined' ||
		token === 'undefined' ||
		token.length < 25
	) {
		goto('/login');
	}
}
