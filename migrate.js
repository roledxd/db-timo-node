import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';

const migrationClient = postgres("postgres://postgres:Passw0rd@localhost:5433/DBSalex", { max: 1 });
migrate(drizzle(migrationClient), { migrationsFolder: "migrations-folder" })

