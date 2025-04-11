import { sql } from 'drizzle-orm';
import { int, mysqlTable, timestamp, unique, varchar } from 'drizzle-orm/mysql-core';

export const leads = mysqlTable('leads', {
	id: int().autoincrement().notNull(),
	company_id: int('company_id').notNull(),
	client_id: int('client_id').notNull(),
    source_id: int('source_id').notNull(),
    status_id: int('status_id').notNull(),
    column_priority: int('column_priority').notNull(),
    company_name: varchar({ length: 255 }).notNull(),
    website: varchar({ length: 255 }).notNull(),
    address: varchar({ length: 255 }).notNull(),
    salutation: varchar({ length: 255 }).notNull(),
    client_name: varchar({ length: 255 }).notNull(),
    cleint_email: varchar({ length: 255 }).notNull(),
    mobile: varchar({ length: 255 }).notNull(),
    cell: varchar({ length: 255 }).notNull(),
    office: varchar({ length: 255 }).notNull(),
    city: varchar({ length: 255 }).notNull(),
    state: varchar({ length: 255 }).notNull(),
    country: varchar({ length: 255 }).notNull(),
    postal_code: varchar({ length: 255 }).notNull(),
    note: varchar({ length: 255 }).notNull(),
    category_id: int('category_id').notNull(),
    added_by: varchar({ length: 255 }).notNull(),
    lead_owner: varchar({ length: 255 }).notNull(),
    last_updated_by: varchar({ length: 255 }).notNull(),
    hash: varchar({ length: 255 }).notNull(),
    createdAt: timestamp('created_at', { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
    updatedAt: timestamp('updated_at', { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),

	
},
(table) => [
	unique('leads_company_id_unique').on(table.company_id),
	unique('leads_client_id_unique').on(table.client_id),
]);