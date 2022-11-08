import axios from 'axios'
import 'dotenv/config'

export class GenerateInitialDataProjectsService {

    async execute() {

        type TInitialDataProjects = {
            name: string
            description: string
            urlFrontCover: string
            urlRepositorie: string
            urlAccommodation: string
        }
        let projects: Array<TInitialDataProjects> = []

        const url = `https://api.github.com/users/${process.env.USER_AGENT}/repos`

        await axios.get(url,
            {
                headers: {
                    'User-Agent': `${process.env.USER_AGENT}`,
                    'Authorization': `token ${process.env.TOKEN_USER_GITHUB}`
                }
            })
            .then(response => {
                const resultRepositories = response.data
                
                // Criando um array de objetos com cada projeto
                for (let i = 0; i < resultRepositories.length; i++) {
                    projects.push({
                        name: resultRepositories[i].name,
                        description: resultRepositories[i].description,
                        urlFrontCover: `https://github.com/${process.env.USER_AGENT}/${resultRepositories[i].name}/blob/main/.github/front-cover.webp?raw=true`,
                        urlRepositorie: resultRepositories[i].html_url,
                        urlAccommodation: resultRepositories[i].homepage,
                    })
                }
            })
            .catch(error => {
                throw new Error(error);
            })

        return projects
    }
}