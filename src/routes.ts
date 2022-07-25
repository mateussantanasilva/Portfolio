import { Router } from 'express'
import { GetProjectsService } from './services/GetProjectsService'

const router = Router()

const getProject = new GetProjectsService()

router.get('/', getProject.handle)

export { router }