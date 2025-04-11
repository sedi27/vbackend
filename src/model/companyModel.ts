import { sql } from 'drizzle-orm';
import { int, mysqlTable, timestamp, unique, varchar } from 'drizzle-orm/mysql-core';

export const companies = mysqlTable('companies', {
	id: int().autoincrement().notNull(),
	company_name: varchar('company_name', { length: 255 }).notNull(),
	appName: varchar('app_name', { length: 255 }).notNull(),
	company_email: varchar('company_email', { length: 255 }).notNull(),
	company_phone: varchar('company_phone', { length: 20 }).notNull(),
	address: varchar({ length: 255 }).notNull(),
	logo: varchar({ length: 255 }).default('NULL'),
	createdAt: timestamp('created_at', { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updatedAt: timestamp('updated_at', { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
},
(table) => [
	unique('companies_company_email_unique').on(table.company_email),
]);