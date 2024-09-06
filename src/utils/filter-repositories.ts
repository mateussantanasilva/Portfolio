export interface Repository {
  image_url: string
  name: string
  description: string
  html_url: string
  homepage: string
}

export function filterRepositories(repos: Repository[]) {
  const reposToDelete = ['aulas', 'portfolio', 'mateussantanasilva']

  const filteredRepos = repos.filter(
    (repo) =>
      !reposToDelete.some((repoToDelete) =>
        repo.name.toLocaleLowerCase().includes(repoToDelete),
      ),
  )

  filteredRepos.forEach(
    (repo) =>
      (repo.image_url = `https://github.com/mateussantanasilva/${repo.name}/blob/main/.github/front-cover.webp?raw=true`),
  )

  console.log(filteredRepos)

  return filteredRepos
}
