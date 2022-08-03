import { Router } from 'express'
import { GetProjectsController } from './controllers/GetProjectsController'
import { SendEmailController } from './controllers/SendEmailController'

const router = Router()

const getProject = new GetProjectsController()
const sendEmail = new SendEmailController()

router.get('/', getProject.handle)
router.post('/send', sendEmail.handle)

export { router }