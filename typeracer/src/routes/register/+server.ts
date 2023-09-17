import { DETA_PROJECT_KEY, JWT_SECRET } from '$env/static/private';
import { Deta } from 'deta';
import crypto from 'crypto-js';
import type { IRegisterForm } from './interfaces';
import { json } from '@sveltejs/kit';

const deta = Deta(DETA_PROJECT_KEY);
const auth = deta.Base('users');

export const POST = async ({ request }) => {
	try {
		const authFormData: IRegisterForm = (await request.json()) as IRegisterForm;
		const user = await auth.get(authFormData.username);
		if (user !== null) {
			throw new Error('User already exists');
		}

		const passwordHash = crypto.SHA256(authFormData.password).toString(crypto.enc.Hex);

		if (authFormData.password !== '' && authFormData.username !== '') {
			const registerJsonData = {
				key: authFormData.username,
				passwordHash: passwordHash
			};
			auth.insert({ registerJsonData });
			return json({ username: authFormData.username, success: true }, { status: 201 });
		} else {
			return json({ message: 'Invalid Credentials', success: false }, { status: 401 });
		}
	} catch (err: any) {
		return json({ error: err.message, success: false }, { status: 503 });
	}
};
