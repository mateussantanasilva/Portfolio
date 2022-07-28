import { Router } from 'express'
import { GetProjectsService } from './services/GetProjectsService'
import { SendEmailService } from './services/SendEmailService'

const router = Router()

const getProject = new GetProjectsService()
const sendEmail = new SendEmailService()

router.get('/', (req, res) => res.render('index', { status: req.query.status }))
router.post('/send', sendEmail.handle)

export { router }