import { Request, Response } from 'express'
import { Mailer } from '../modules/Mailer'

export class SendEmailService {
    async handle(req: Request, res: Response) {

        type TContentEmail = {
            name: string
            email: string
            message: string
        }

        const contentEmail: TContentEmail = req.body

        const mailer = new Mailer()
        const resultMailer = await mailer.execute(contentEmail)

        return res.redirect('/?status=enviado')
    }
}
