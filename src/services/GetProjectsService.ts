import { Request, Response } from 'express'
import axios from 'axios'
import { FilterProjectsService } from './FilterProjectsService'
import { GetProjectsUrlsService } from './GetProjectsUrlsService'

export class GetProjectsService {
    async handle(req: Request, res: Response) {

        const url = 'https://api.github.com/users/mateussantanasilva/repos'

        await axios.get(url)
            .then(response => {
                const resultRepositories = response.data

                let namesProjects: Array<string> = []
                let descriptionsProjects: Array<string> = []
                let urlRepositoriesProjects: Array<string> = []

                // Lista de nomes de cada projeto
                for (let i = 0; i < resultRepositories.length; i++) {
                    namesProjects.push(resultRepositories[i].name)
                }

                // Lista de descrições de cada projeto
                for (let i = 0; i < resultRepositories.length; i++) {
                    descriptionsProjects.push(resultRepositories[i].description)
                }

                // Lista de url de cada projeto
                for (let i = 0; i < resultRepositories.length; i++) {
                    urlRepositoriesProjects.push(resultRepositories[i].html_url)
                }

                (async function prepareProjects() {
                    const filterProjectsService = new FilterProjectsService()
                    const getProjectsUrlsService = new GetProjectsUrlsService()

                    const resultFilters = await filterProjectsService.execute(
                        namesProjects,
                        descriptionsProjects,
                        urlRepositoriesProjects
                    )

                    const resultUrls = await getProjectsUrlsService.execute(resultFilters.newNamesProjects2)

                    return res.render('index', {
                        informationsProjects: resultFilters, urlsProjects: resultUrls
                    })
                })()
            })
            .catch(err => {
                return res.status(400).json({
                    message: 'Req github invalid'
                })
            })
    }
}