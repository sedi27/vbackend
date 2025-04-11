/* eslint-disable no-console */
import dotenv from 'dotenv'; // Import dotenv
dotenv.config({ path: './.env.development' }); // Load environment variables

import app from './app'
import { connectToDatabase } from './services/databaseService'

const PORT = 3300
const server = app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`)
})

// eslint-disable-next-line @typescript-eslint/no-floating-promises
;(async () => {
    try {
        await connectToDatabase()
        console.log(`Database Connected`)
    } catch (err) {
        console.error('Error starting application:', err)
        server.close(() => process.exit(1))
    }
})()
