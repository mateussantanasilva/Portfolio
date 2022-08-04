import { Request, Response } from 'express'
import { Mailer } from '../modules/Mailer'

export class SendEmailController {
    async handle(req: Request, res: Response) {

        type TContentEmail = {
            name: string
            email: string
            message: string
        }

        const contentEmail: TContentEmail = req.body

        const mailer = new Mailer()
        await mailer.execute(contentEmail)

        return res.redirect('/')
    }
}
