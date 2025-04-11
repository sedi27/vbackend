import { sql } from 'drizzle-orm';
import { date, double, int, mysqlTable, timestamp, unique, varchar } from 'drizzle-orm/mysql-core';


export const employees = mysqlTable('employees', {
    id: int().autoincrement().notNull(),
    user_id: int('user_id').notNull(),
    country: varchar({ length: 100 }).notNull(),
    state: varchar({ length: 100 }),
    city: varchar({ length: 100 }),
    address: varchar({ length: 255 }).notNull(),
    monthly_salary: double('monthly_salary'),
    slack_username: varchar({ length: 100 }),
    department_id: int('department_id'),
    designation_id: int('designation_id'),
    joining_date: timestamp('joining_date', { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
    last_date: date('last_date').default(sql`CURRENT_TIMESTAMP`).notNull(),
    added_by: int('added_by'),
    last_updated_by: int('last_updated_by'),
    attendance_reminder: date('attendance_reminder').default(sql`CURRENT_TIMESTAMP`),
    date_of_birth: date('date_of_birth'),
    calendar_view: varchar({ length: 100 }),
    about_me: varchar({ length: 255 }).notNull(),
    reporting_to: int('reporting_to').notNull(),
    contract_end_date: date('contract_end_date'),
    internship_start_date: date('internship_start_date'),
    internship_end_date: date('internship_end_date'),
    employment_type: varchar({ length: 100 }).notNull(),
    marriage_anniversary_date: date('marriage_anniversary_date'),
    marital_status: varchar({ length: 100 }).notNull(),
    notice_period_end_date: date('notice_period_end_date'),
    notice_period_start_date: date('notice_period_start_date'),
    probation_end_date: date('probation_end_date'),

    created_at: timestamp('created_at', { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
    updated_at: timestamp('updated_at', { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
},

(table) => [
    unique('employees_user_id_unique').on(table.user_id),
]);