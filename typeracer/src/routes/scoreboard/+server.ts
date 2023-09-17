import { DETA_PROJECT_KEY } from '$env/static/private';
import { Deta } from 'deta';
import type { IScore } from './interfaces';
import { json } from '@sveltejs/kit';

const deta = Deta(DETA_PROJECT_KEY);
const scoresDB = deta.Base('scores');

export const GET = async ({ request }) => {
	try {
		const data = await scoresDB.fetch();

		const userScores: { [username: string]: IScore } = {};

		data.items.forEach((item: any) => {
			const username = item.key;
			const scores = item.value;

			if (!userScores[username]) {
				userScores[username] = {
					username,
					accuracy: 0,
					wpm: 0,
					rank: 0
				};
			}

			scores.forEach((score: any) => {
				if (score.wpm > userScores[username].wpm) {
					userScores[username].accuracy = score.accuracy;
					userScores[username].wpm = score.wpm;
				} else if (
					score.wpm === userScores[username].wpm &&
					score.accuracy > userScores[username].accuracy
				) {
					userScores[username].accuracy = score.accuracy;
				}
			});
		});

		const sortedUserScores = Object.values(userScores).sort((a, b) => {
			if (a.wpm === b.wpm) {
				return b.accuracy - a.accuracy;
			}
			return b.wpm - a.wpm;
		});

		sortedUserScores.forEach((score, index) => {
			score.rank = index + 1;
		});

		return json({ sortedUserScores }, { status: 200 });
	} catch (err: any) {
		return json({ error: err.message, success: false }, { status: 503 });
	}
};
