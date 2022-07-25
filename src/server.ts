import 'express-async-errors'
import express, { NextFunction, Request, Response } from 'express'
import path from 'path'
import { router } from './routes'

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static('public'))

app.use(express.json())
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {

    return res.json({
        status: 'Error',
        message: 'error.message'
    })
})
app.use(router)

app.listen(3000, () => console.log(`App is running...`))