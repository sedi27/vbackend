import { sql } from 'drizzle-orm';
import { int, mysqlEnum, mysqlTable, timestamp, unique, varchar } from 'drizzle-orm/mysql-core';

export const leaves = mysqlTable('leaves', {
	id: int().autoincrement().notNull(),
	company_id: int('company_id'),
	user_id: int('user_id').notNull(),
	leave_type_id: int('leave_type_id').notNull(),
	unique_id: varchar({ length: 255 }),
	duration: varchar({ length: 255 }).notNull(),
	leavedate: timestamp('leavedate', { mode: 'string' }).notNull(),
	reason: varchar({ length: 255 }).notNull(),
	status: mysqlEnum(['pending', 'approved', 'rejected']).notNull(),
	reject_reason: varchar({ length: 255 }),
	paid: mysqlEnum(['yes', 'no']),
	added_by: varchar({ length: 255 }),
	last_updated_by: varchar({ length: 255 }),
	event_id: varchar({ length: 255 }),
	approved_by: varchar({ length: 255 }),
	half_day_type: mysqlEnum(['first_half', 'second_half']),
	createdAt: timestamp('created_at', { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	updatedAt: timestamp('updated_at', { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
    manager_status_permission: mysqlEnum(['yes', 'no']),
	approve_reason: varchar({ length: 255 }),
	
},
// (table) => [
// 	// unique('leave_company_id_unique').on(table.company_id),
// 	// unique('leave_user_id_unique').on(table.user_id),
// ]);
);
