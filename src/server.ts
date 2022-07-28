import 'express-async-errors'
import express, { NextFunction, Request, Response } from 'express'
import path from 'path'
import { router } from './routes'

const app = express()

app.set('view engine', 'ejs')
//Em desenvolvimento altere o caminho para 'views'
app.set('views', path.join(__dirname, '../src/views'))
app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {

    return res.json({
        status: 'Error',
        message: 'error.message'
    })
})
app.use(router)

app.listen(process.env.PORT || 3000, () => console.log(`App is running...`))