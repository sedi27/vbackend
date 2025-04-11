import express, { Application, NextFunction, Request, Response } from 'express'
import path from 'path'
import router from './router/apiRouter'
import user from './router/userRouter'
import login from './router/loginRouter'
import register from './router/userEmployeeRouter'
import leaveRegister from './router/leaveRouter'
import globalErrorHandler from './middlewares/globalErrorHandler'
import responseMessage from './constants/responseMessage'
import httpError from './util/httpError'
import helmet from 'helmet'
import cors from 'cors'
import bodyParser from 'body-parser'

const app: Application = express()

// Middleware
app.use(helmet())
app.use(express.json())
app.use(express.static(path.join(__dirname, '../', 'public')))
app.use(
    cors({
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'HEAD'],
        origin: '*',
        credentials: true
    })
)
// app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Routes
app.use('/api/v1', router)
app.use('/api/v1/user', user)
app.use('/api/v1/auth', login)
app.use('/api/v1/register', register)
app.use('/api/v1/leave', leaveRegister)

// Global Error Handler
app.use(globalErrorHandler)

// 404 Handler
app.use((req: Request, _: Response, next: NextFunction) => {
    try {
        throw new Error(responseMessage.NOT_FOUND('route'))
    } catch (err) {
        httpError(next, err, req, 404)
    }
})

export default app
