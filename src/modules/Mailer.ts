import nodemailer from 'nodemailer'
import { google } from 'googleapis'
import 'dotenv/config'

type TContentEmail = {
    name: string
    email: string
    message: string
}

export class Mailer {
    async execute(contentEmail: TContentEmail) {
        const clientId = process.env.CLIENT_ID
        const clientSecret = process.env.SECRET_KEY
        const refreshToken = process.env.REFRESH_TOKEN

        const redirectURI = 'https://developers.google.com/oauthplayground'

        // Pegar accessToken
        const OAuth2 = google.auth.OAuth2
        const oAuth2Client = new OAuth2(clientId, clientSecret, redirectURI)
        oAuth2Client.setCredentials({
            refresh_token: refreshToken
        })
        const accessToken = await oAuth2Client.getAccessToken()

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            logger: false,
            debug: false,
            auth: {
                type: 'OAuth2',
                user: 'santanasilva1778@gmail.com',
                clientId,
                clientSecret,
                refreshToken,
                accessToken: Object(accessToken)
            }
        })

        const emailStructure = {
            from: `${contentEmail.name} <${contentEmail.email}>`,
            to: `santanasilva1778@gmail.com`,
            subject: 'Mensagem pelo Portfólio',
            text: `
            Enviado por: ${contentEmail.name} <${contentEmail.email}>
                
            Mensagem:
            ${contentEmail.message}
            `
        }

        const result = await transporter.sendMail(emailStructure)

        return result
    }
}