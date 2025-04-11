import { sql } from 'drizzle-orm';
import { int, mysqlTable, timestamp, unique, varchar } from 'drizzle-orm/mysql-core';

export const designations = mysqlTable('designation', {
	id: int().autoincrement().notNull().primaryKey(),
	company_id: int('company_id').notNull(),
	name: varchar({ length: 255 }).notNull(),
	parent_id: int('parent_id').notNull(),
	added_by: varchar({ length: 255 }).notNull(),
	last_updated_by: varchar({ length: 255 }).notNull(),
	createdAt: timestamp('created_at', { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updatedAt: timestamp('updated_at', { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
},

(table) => [
	unique('designations_name_unique').on(table.name),
]);