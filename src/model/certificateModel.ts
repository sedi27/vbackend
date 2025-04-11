import { sql } from 'drizzle-orm';
import { int, mysqlEnum, mysqlTable, timestamp, unique, varchar } from 'drizzle-orm/mysql-core';

export const certificates = mysqlTable('certificates', {
	id: int().autoincrement().notNull(),
	company_id: int('company_id').notNull(),
	emp_id: int('emp_id').notNull(),
	certificate_for: varchar({ length: 255 }).notNull(),
	name: varchar({ length: 255 }).notNull(),
	email: varchar({ length: 255 }).notNull(),
	department: varchar({ length: 255 }).notNull(),
	certificate_type: mysqlEnum(['intern', 'employee', 'unpaid']).notNull(),
	content: varchar({ length: 255 }).notNull(),
	createdAt: timestamp('created_at', { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updatedAt: timestamp('updated_at', { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
},
(table) => [
	unique('certificates_emp_id_unique').on(table.emp_id),
	unique('certificates_company_id_unique').on(table.company_id),
]);