import { DETA_PROJECT_KEY, JWT_SECRET } from '$env/static/private';
import { Deta } from 'deta';
import crypto from 'crypto-js';
import { Buffer } from 'buffer/';
import { createJWT } from '@sensethenlove/jwt';
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
		const storedHash = user.password as string;

		const passwordHash = crypto.SHA256(authFormData.password).toString(crypto.enc.Hex);

		if (storedHash === passwordHash) {
			const jwtPayload = { userId: 1 };
			const expiresInAsSeconds = 32400;
			const token = await createJWT(jwtPayload, expiresInAsSeconds, JWT_SECRET, Buffer);
			return json({ token: token, success: true }, { status: 201 });
		} else {
			return json({ message: 'Invalid Credentials', success: false }, { status: 401 });
		}
	} catch (err: any) {
		return json({ error: err.message, success: false }, { status: 503 });
	}
};
