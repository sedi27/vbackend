import mysql from 'mysql2/promise';
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/mysql2';

// Create a MySQL connection pool
const connectionPool = mysql.createPool({
    host: '173.231.207.59',
    user: 'priyankadinodiya_demodb',
    password: '9_Ys!0+qDey=',
    database: 'priyankadinodiya_demodb',
});

// Initialize Drizzle ORM with the connection pool
const db = drizzle(connectionPool);

// Function to test the database connection
async function connectToDatabase() {
    try {
        // Test the connection
        await connectionPool.getConnection();
        console.log('Connected to the database!');
        return db; // Return the Drizzle ORM instance
    } catch (error) {
        console.error('Error connecting to the database:', error);
        throw error;
    }
}

export { db, connectToDatabase };