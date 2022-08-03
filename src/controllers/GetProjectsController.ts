import { Request, Response } from 'express'
import { GenerateInitialDataProjectsService } from '../services/GenerateInitialDataProjectsService'
import { FilterProjectsService } from '../services/FilterProjectsService'

export class GetProjectsController {
    async handle(req: Request, res: Response) {

        const generateInitialDataProjectsService = new GenerateInitialDataProjectsService()
        const filterProjectsService = new FilterProjectsService()

        // Gerar os dados iniciais pegando da API users/repos
        const projects = await generateInitialDataProjectsService.execute()

        // Filtrar os dados recebidos da API tirando o portfólio e o readme de apresentação
        const resultFilters = await filterProjectsService.execute(projects)

        return res.render('index', { projects: resultFilters })
    }
}