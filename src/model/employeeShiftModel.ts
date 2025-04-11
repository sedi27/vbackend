import { sql } from 'drizzle-orm';
import { int, mysqlEnum, mysqlTable, timestamp, unique, varchar } from 'drizzle-orm/mysql-core';

export const employee_shifts = mysqlTable('employee_shifts', {
	id: int().autoincrement().notNull(),
	company_id: int('company_id').notNull(),
	shift_name: varchar({ length: 255 }).notNull(),
	shift_short_code: varchar({ length: 255 }).notNull(),
	color: varchar({ length: 255 }).notNull(),
	office_start_time: timestamp('office_start_time', { mode: 'string' }).notNull(),
	office_end_time: timestamp('office_end_time', { mode: 'string' }).notNull(),
	halfday_mark_time: timestamp('halfday_mark_time', { mode: 'string' }).notNull(),
	late_mark_duration: varchar({ length: 255 }).notNull(),
	clock_in_day: varchar({ length: 255 }).notNull(),
	office_open_days: varchar({ length: 255 }).notNull(),
	createdAt: timestamp('created_at', { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updatedAt: timestamp('updated_at', { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	early_clock_in: mysqlEnum(['yes', 'no']).notNull()
},
(table) => [
	unique('employee_shifts_company_id_unique').on(table.company_id)
]);