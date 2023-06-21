import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// you would have to import / invoke this in another file
export async function openDb() {
	const db = open({
		filename: '/tmp/database.db',
		driver: sqlite3.Database
	});

	(await db).exec('CREATE TABLE interactions (slideId INTEGER, prompt TEXT, responses TEXT)');

	return db;
}
