import { DETA_PROJECT_KEY, JWT_SECRET } from '$env/static/private';
import { Deta } from 'deta';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import type { ILoginForm } from './interfaces';
import { json } from '@sveltejs/kit';

const deta = Deta(DETA_PROJECT_KEY);
const auth = deta.Base('users');

export const POST = async ({ request }) => {
	try {
		const authFormData: ILoginForm = (await request.json()) as ILoginForm;
		const user = await auth.get(authFormData.username);
		if (user === null) {
			throw new Error('User not found');
		}
		const password = user.password as string;

		if (await argon2.verify(password, authFormData.password)) {
			const token = jwt.sign({ username: user.key }, JWT_SECRET, { expiresIn: '21600s' });
			return json({ token: token, success: true }, { status: 201 });
		} else {
			return json({ message: 'Invalid Credentials', success: false }, { status: 401 });
		}
	} catch (err: any) {
		return json({ error: err.message, success: false }, { status: 503 });
	}
};
