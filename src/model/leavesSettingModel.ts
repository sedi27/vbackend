import { sql } from 'drizzle-orm';
import { index, int, mysqlEnum, mysqlTable, timestamp } from 'drizzle-orm/mysql-core';


export const leaves_settings = mysqlTable('leaves_settings', {
	id: int().autoincrement().notNull(),
	company_id: int('company_id').notNull(),
	manager_permission: mysqlEnum(['yes', 'no']).notNull(),
	createdAt: timestamp('created_at', { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updatedAt: timestamp('updated_at', { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
},
(table) => [
	index('leaves_settings_company_id_companies_id_fk').on(table.company_id),
]);