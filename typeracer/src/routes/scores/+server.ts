import { DETA_PROJECT_KEY, JWT_SECRET } from '$env/static/private';
import { Deta } from 'deta';
import jose from 'jose';
import type { ITypingTestScore } from './interfaces';
import { json } from '@sveltejs/kit';

const deta = Deta(DETA_PROJECT_KEY);
const scoresDB = deta.Base('scores');

const checkAuth = async (jwt: string, username: string) => {
	const secretString = JWT_SECRET as string;
	const secretBuffer = new TextEncoder().encode(secretString);

	try {
		const { payload } = await jose.jwtVerify(jwt, secretBuffer);
		// paylod.sub is the username
		return payload.sub === username;
	} catch (error) {
		return false;
	}
};

export const POST = async ({ request }) => {
	try {
		const jwtAsString = request.headers.get('authorization') as string;
		const newScore = (await request.json()) as ITypingTestScore;
		const username = newScore.username;

		if ((await checkAuth(jwtAsString, username)) == false) {
			throw new Error('Not authorized');
		}
		let existing = await scoresDB.get(username);

		if (existing == null) {
			existing = { key: username, value: [] };
		} else if (!Array.isArray(existing.value)) {
			existing.value = [];
		}

		// eslint-disable-next-line prefer-const
		let existingScores: any[] = existing.value as any;
		existingScores.push(newScore);

		console.log(existingScores);
		await scoresDB.put(existing, username);

		return json({ message: 'Updated Scores', success: true }, { status: 201 });
	} catch (err: any) {
		return json({ error: err.message, success: false }, { status: 503 });
	}
};

export const GET = async ({ request, url }) => {
	try {
		const username = await url.searchParams.get('username');
		if (username == null) {
			throw new Error('Username not provided');
		}
		const jwtAsString = request.headers.get('authorization') as string;

		if ((await checkAuth(jwtAsString, username)) == false) {
			throw new Error('Not authorized');
		}
		const fetchedScores = await scoresDB.fetch();

		const userScores = fetchedScores.items.find((item) => item.key === username).value;
		if (userScores) {
			return json(userScores);
		}
	} catch (err: any) {
		return json({ error: err.message, success: false }, { status: 503 });
	}
};
