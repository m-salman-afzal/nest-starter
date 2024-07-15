CREATE TABLE IF NOT EXISTS "tasks" (
	"id" serial PRIMARY KEY NOT NULL,
	"createdAt" timestamp,
	"updatedAt" timestamp,
	"deletedAt" timestamp,
	"taskId" varchar(256),
	"name" varchar(256),
	"userId" varchar(256),
	CONSTRAINT "tasks_taskId_idx" UNIQUE("taskId")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"createdAt" timestamp,
	"updatedAt" timestamp,
	"deletedAt" timestamp,
	"userId" varchar(256),
	"name" varchar(256),
	"email" varchar(256),
	"password" varchar(256),
	CONSTRAINT "users_userId_idx" UNIQUE("userId"),
	CONSTRAINT "users_email_idx" UNIQUE("email")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tasks" ADD CONSTRAINT "tasks_userId_users_userId_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("userId") ON DELETE set null ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
