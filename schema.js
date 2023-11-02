import { integer, pgTable, serial, index, varchar, timestamp, primaryKey } from 'drizzle-orm/pg-core';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';



export const players = pgTable('players', {

  id: serial('id').primaryKey(),

  name: varchar('name', { length: 256 }),

  birthday: timestamp('birthday', { length: 256 }),

}, (table) => {

  return {

    nameIndex: index('name_idx').on(table.name),

  }

});



export const guardians = pgTable('guardians', {

  id: serial('id').primaryKey(),

  name: varchar('name', { length: 256 }),

  phone: varchar('phone', { length: 256 }),

  email: varchar('email', { length: 256 })

}, (table) => {

  return {

    nameIndex: index('name_idx').on(table.name),

  }

});



export const playersGuardians = pgTable('playersGuardians', {

  playerId: integer('playerId'),

  guardianId: integer('guardianId'),

}, (table) => {

  return {

    pk: primaryKey(table.playerId, table.guardianId),

  }

});

const queryClient = postgres("postgres://postgres:Passw0rd@localhost:5433/DBSalex");
export const db = drizzle(queryClient);