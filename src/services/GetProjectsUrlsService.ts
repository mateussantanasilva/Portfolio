import axios from 'axios'

export class GetProjectsUrlsService {
    async execute(namesProjects: Array<string>) {

        let urlsBranchesProjects: Array<string> = []
        let urlsCommitsProjects: Array<string> = []
        let urlsProjects: Array<string> = []
        const url = 'https://api.github.com/repos/mateussantanasilva/<project>/branches/main'

        // Gerando uma lista de urls
        for (const name of namesProjects) {
            urlsBranchesProjects.push(url.replace('<project>', name))
        }

        // Gerando uma lista com todos os ultimos commits
        for (let i = 0; i < urlsBranchesProjects.length; i++) {
            await axios.get(urlsBranchesProjects[i])
                .then(response => {
                    const resultCommit = response.data.commit.commit.message
                    urlsCommitsProjects.push(resultCommit)

                    if (i == urlsBranchesProjects.length + 1) {
                        return urlsCommitsProjects
                    }
                })
                .catch(err => { throw new Error('Req url projects invalid') })
        }

        // Separando icon do link no commit
        urlsCommitsProjects.forEach(commit => {
            const [, url] = commit.split(' ')

            // Criando lista com todos os links de projetos
            if (url.includes('http')) {
                urlsProjects.push(url)
            }
            urlsProjects.push('em andamento')
        })

        return urlsProjects
    }
}