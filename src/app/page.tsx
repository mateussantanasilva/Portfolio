import { Header } from '@/components/sections/header'
import { About } from '@/components/sections/about'
import { Hero } from '@/components/sections/hero'
import { Services } from '@/components/sections/services'
import { Skills } from '@/components/sections/skills'
import { Contact } from '@/components/sections/contact'
import { Works } from '@/components/sections/works'
import { filterRepositories } from '@/utils/filter-repositories'
import { Footer } from '@/components/sections/footer'

export default async function Home() {
  const data = await fetch(
    'https://api.github.com/users/mateussantanasilva/repos',
  )
  const repos = await data.json()

  const projects = filterRepositories(repos)

  return (
    <>
      <Header />

      <main className="mx-auto mb-20 mt-26 max-w-container space-y-20 px-4">
        <Hero />

        <About projectsNumber={projects.length} />

        <Skills />

        <Services />

        <Works projects={projects} />

        <Contact />
      </main>

      <Footer />
    </>
  )
}
