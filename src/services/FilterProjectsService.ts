type TInitialDataProjects = {
    name: string
    description: string
    urlFrontCover: string
    urlRepositorie: string
    urlAccommodation: string
}

export class FilterProjectsService {
    async execute(projects: Array<TInitialDataProjects>) {

        // Tirando o repositório de apresentação e o do portfólio
        const filteredProjects = projects.filter(project => {
            return project.name != 'Portfolio' && project.name != 'mateussantanasilva'
        })

        return filteredProjects
    }
}