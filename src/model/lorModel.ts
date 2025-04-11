import { sql } from 'drizzle-orm';
import { int, mysqlEnum, mysqlTable, unique, varchar } from 'drizzle-orm/mysql-core';

export const lor = mysqlTable('lor', {
	id: int().autoincrement().notNull(),
	company_id: int('company_id').notNull(),
	emp_id: int('emp_id').notNull(),
	name: varchar({ length: 255 }).notNull(),
	email: varchar({ length: 255 }).notNull(),
	department: varchar({ length: 255 }).notNull(),
	emp_type: mysqlEnum(['intern', 'employee', 'unpaid']).notNull(),
	pronoun1: varchar({ length: 255 }).notNull(),
	pronoun2: varchar({ length: 255 }).notNull(),
	content: varchar({ length: 255 }).notNull(),
},
(table) => [
	unique('companies_emp_id_unique').on(table.emp_id),
	unique('companies_company_id_unique').on(table.company_id),
]);