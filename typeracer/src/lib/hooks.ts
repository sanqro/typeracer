import { goto } from '$app/navigation';

export function checkAuth() {
	const username = localStorage.getItem('username');
	const token = localStorage.getItem('token');

	if (!username || !token) {
		goto('/login');
	}
}
