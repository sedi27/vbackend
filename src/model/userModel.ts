import { int, mysqlTable, varchar, timestamp, unique, mysqlEnum } from 'drizzle-orm/mysql-core';
import { sql } from 'drizzle-orm'


export const users = mysqlTable('users', {
    id: int().autoincrement().notNull(),
    // company_id: int('company_id').notNull(),
    username: varchar({ length: 100 }).notNull(),
    email: varchar({ length: 255 }).notNull(),
    password: varchar({ length: 255 }).notNull(),
    status: varchar({ length: 20 }).default('\'active\'').notNull(),
    role: mysqlEnum('role', ['admin', 'user', 'superadmin']).default('user').notNull(),
    created_at: timestamp('created_at', { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
    updated_at: timestamp('updated_at', { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
},
(table) => [
    // index('users_company_id_companies_id_fk').on(table.company_id),
    unique('users_email_unique').on(table.email),
]);