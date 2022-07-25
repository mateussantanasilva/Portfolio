export class FilterProjectsService {

    async execute(

        namesProjects: Array<string>,
        descriptionsProjects: Array<string>,
        urlRepositoriesProjects: Array<string>

    ) {
        //Removendo repositórios indesejados
        const newNamesProjects1 = namesProjects.filter(name => name != 'mateussantanasilva')
        const newNamesProjects2 = newNamesProjects1.filter(name => name != 'Portfolio')

        const newdescriptionsProjects1 = descriptionsProjects.filter(project => project != 'readme')
        const newdescriptionsProjects2 = newdescriptionsProjects1.filter(project => project != 'Meu portfólio.')

        const newurlRepositoriesProjects1 = urlRepositoriesProjects.filter(project => project != 'https://github.com/mateussantanasilva/mateussantanasilva')
        const newurlRepositoriesProjects2 = newurlRepositoriesProjects1.filter(project => project != 'https://github.com/mateussantanasilva/Portfolio')

        return { newNamesProjects2, newdescriptionsProjects2, newurlRepositoriesProjects2 }
    }
}