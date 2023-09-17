import { DETA_PROJECT_KEY } from '$env/static/private';
import { Deta } from 'deta';
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

		const passwordHash = CryptoJS.SHA256(authFormData.password).toString(CryptoJS.enc.Hex);

		const registerJsonData = {
			key: authFormData.username,
			password: passwordHash
		};
		const toInsert = await auth.insert(registerJsonData);

		return json({ username: toInsert.key, success: true }, { status: 201 });
	} catch (err: any) {
		return json({ error: err.message, success: false }, { status: 503 });
	}
};
