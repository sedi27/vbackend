import { sql } from 'drizzle-orm';
import { int, mysqlEnum, mysqlTable, timestamp, unique, varchar } from 'drizzle-orm/mysql-core';


export const attendance_settings = mysqlTable('attendance_settings', {
	id: int().autoincrement().notNull(),
	company_id: int('company_id').notNull(),
    auto_clock_in: mysqlEnum(['yes', 'no']).notNull(),
	auto_clock_in_location: varchar({ length: 255 }).notNull(),
	office_start_time: timestamp('office_start_time', { mode: 'string' }).notNull(),
	office_end_time: timestamp('office_end_time', { mode: 'string' }).notNull(),
	halfday_mark_time: timestamp('halfday_mark_time', { mode: 'string' }).notNull(),
	late_mart_duration: varchar({ length: 255 }).notNull(),
	clock_in_day: varchar({ length: 255 }).notNull(),
	employee_clock_in_out: mysqlEnum(['yes', 'no']).notNull(),
	office_open_days: varchar({ length: 255 }).notNull(),
	ip_address: varchar({ length: 255 }).notNull(),
	radius: varchar({ length: 255 }).notNull(),
	radius_check: mysqlEnum(['yes', 'no']).notNull(),
	ip_check: mysqlEnum(['yes', 'no']).notNull(),
	alert_after: varchar({ length: 255 }).notNull(),
	alert_after_status: mysqlEnum(['yes', 'no']).notNull(),
	save_current_location: mysqlEnum(['yes', 'no']).notNull(),
	default_employee_shift: int('default_employee_shift').notNull(),
	week_start_from: varchar({ length: 255 }).notNull(),
    allow_shift_change: mysqlEnum(['yes', 'no']).notNull(),
    show_clock_in_button: mysqlEnum(['yes', 'no']).notNull(),
    createdAt: timestamp('created_at', { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updatedAt: timestamp('updated_at', { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	monthly_report: mysqlEnum(['yes', 'no']).notNull(),
	monthly_report_roles: varchar({ length: 255 }).notNull(),
	office_open_days_json: varchar({ length: 255 }).notNull(),
    break_end_time: timestamp('break_end_time', { mode: 'string' }).notNull(),

},
(table) => [
	unique('attendance_settings_company_id_unique').on(table.company_id),
	
]);