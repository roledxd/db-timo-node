import { db, players } from './schema.js';

await db.insert(players).values({ name: process.argv[2] });