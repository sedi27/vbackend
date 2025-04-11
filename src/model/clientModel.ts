import { sql } from 'drizzle-orm';
import { int, mysqlTable, timestamp, unique, varchar } from 'drizzle-orm/mysql-core';

export const clients = mysqlTable('clients', {
	id: int().autoincrement().notNull(),
	company_id: int('company_id').notNull(),
	user_id: int('user_id').notNull(),
	company_name: varchar({ length: 255 }).notNull(),
	address: varchar({ length: 255 }).notNull(),
	shipping_address: varchar({ length: 255 }).notNull(),
	postal_code: varchar({ length: 255 }).notNull(),
	state: varchar({ length: 255 }).notNull(),
	city: varchar({ length: 255 }).notNull(),
	office: varchar({ length: 255 }).notNull(),
	website: varchar({ length: 255 }).notNull(),
	note: varchar({ length: 255 }).notNull(),
	linkedin: varchar({ length: 255 }).notNull(),
	facebook: varchar({ length: 255 }).notNull(),
	twitter: varchar({ length: 255 }).notNull(),
    skype: varchar({ length: 255 }).notNull(),
    gst_number: varchar({ length: 255 }).notNull(),
	category_id: int('category_id').notNull(),
	sub_category_id: int('sub_category_id').notNull(),
	added_by: varchar({ length: 255 }).notNull(),
	last_updated_by: varchar({ length: 255 }).notNull(),
	company_logo: varchar({ length: 255 }).notNull(),
	company_logo_json: varchar({ length: 255 }).notNull(),
	createdAt: timestamp('created_at', { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updatedAt: timestamp('updated_at', { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	
},
(table) => [
	unique('clients_company_id_unique').on(table.company_id),
	unique('clients_user_id_unique').on(table.user_id),
]);