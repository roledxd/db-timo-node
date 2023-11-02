CREATE TABLE IF NOT EXISTS "guardians" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256),
	"phone" varchar(256),
	"email" varchar(256)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "players" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256),
	"birthday" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "playersGuardians" (
	"playerId" integer,
	"guardianId" integer,
	CONSTRAINT playersGuardians_playerId_guardianId PRIMARY KEY("playerId","guardianId")
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "name_idx" ON "guardians" ("name");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "name_idx" ON "players" ("name");