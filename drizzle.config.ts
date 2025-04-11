import dotenv from 'dotenv'; // Import dotenv
dotenv.config({ path: './.env.development' }); // Explicitly load .env.development

import type { Config } from 'drizzle-kit';

if (!process.env.DATABASE_URL) {
  throw new Error('❌ DATABASE_URL is missing or not loaded.');
}

const drizzleConfig: Config = {
  schema: './src/model/index.ts',
  out: './drizzle',
  dialect: 'mysql',
  dbCredentials: {
    url: process.env.DATABASE_URL, // Use DATABASE_URL from .env.development
  },
};

export default drizzleConfig;