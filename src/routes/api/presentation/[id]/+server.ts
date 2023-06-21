import { error, json } from '@sveltejs/kit';
import { openDb } from '../../../../database.js';

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
	const db = await openDb();
	const result = await db.get('SELECT * FROM interactions');
	return json(result);
}

/** @type {import('./$types').RequestHandler} */
export async function POST({ url }) {
	const db = await openDb();
}
