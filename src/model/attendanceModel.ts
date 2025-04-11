import { sql } from 'drizzle-orm';
import { int, mysqlEnum, mysqlTable, timestamp, unique, varchar } from 'drizzle-orm/mysql-core';


export const attendances = mysqlTable('attendances', {
	id: int().autoincrement().notNull(),
	company_id: int('company_id').notNull(),
	user_id: int('user_id').notNull(),
	location_id: varchar({ length: 255 }).notNull(),
	leave_id: varchar({ length: 255 }).notNull(),
	clock_in_time: timestamp('clock_in_time', { mode: 'string' }).notNull(),
	clock_out_time: timestamp('clock_out_time', { mode: 'string' }).notNull(),
	clock_in_ip: varchar({ length: 255 }).notNull(),
	clock_out_ip: varchar({ length: 255 }).notNull(),
	working_from: varchar({ length: 255 }).notNull(),
	late: varchar({ length: 255 }).notNull(),
	half_day: mysqlEnum(['yes', 'no']).notNull(),
	added_by: varchar({ length: 255 }).notNull(),
	last_updated_by: varchar({ length: 255 }).notNull(),
	latitude: varchar({ length: 255 }).notNull(),
	longitude: varchar({ length: 255 }).notNull(),
	shift_start_time: timestamp('shift_start_time', { mode: 'string' }).notNull(),
	shift_end_time: timestamp('shift_end_time', { mode: 'string' }).notNull(),
	employee_shift_id: int('employee_shift_id').notNull(),
	created_at: timestamp('created_at', { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updated_at: timestamp('updated_at', { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	work_from_type: mysqlEnum(['office', 'home']).notNull(),
	overwrite_attendance: mysqlEnum(['yes', 'no']).notNull(),
	break_in_ip: varchar({ length: 255 }).notNull(),
	break_in_time: timestamp('break_in_time', { mode: 'string' }).notNull(),
	break_out_ip: varchar({ length: 255 }).notNull(),
	break_out_time: timestamp('break_out_time', { mode: 'string' }).notNull(),
},
(table) => [
	unique('attendances_company_id_unique').on(table.company_id),
	unique('attendances_user_id_unique').on(table.user_id),
]);