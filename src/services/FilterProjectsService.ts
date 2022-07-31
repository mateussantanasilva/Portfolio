export class FilterProjectsService {

    async execute(

        namesProjects: Array<string>,
        descriptionsProjects: Array<string>,
        urlRepositoriesProjects: Array<string>

    ) {
        //Removendo repositórios indesejados
        const newNamesProjects1 = namesProjects.filter(name => name != 'mateussantanasilva')
        const newNamesProjects2 = newNamesProjects1.filter(name => name != 'Portfolio')

        const newDescriptionsProjects1 = descriptionsProjects.filter(project => project != 'readme')
        const newDescriptionsProjects2 = newDescriptionsProjects1.filter(project => project != 'Meu portfólio.')

        const newUrlRepositoriesProjects1 = urlRepositoriesProjects.filter(project => project != 'https://github.com/mateussantanasilva/mateussantanasilva')
        const newUrlRepositoriesProjects2 = newUrlRepositoriesProjects1.filter(project => project != 'https://github.com/mateussantanasilva/Portfolio')

        return { newNamesProjects2, newDescriptionsProjects2, newUrlRepositoriesProjects2 }
    }
}