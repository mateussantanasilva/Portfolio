import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/sections/header'
import { About } from '@/components/sections/about'
import { Hero } from '@/components/sections/hero'
import { Services } from '@/components/sections/services'
import { Skills } from '@/components/sections/skills'
import { Contact } from '@/components/sections/contact'
import { Works } from '@/components/sections/works'
import { Linkedin } from 'lucide-react'

import GithubIcon from '@/assets/brand-icons/github.svg'
import InstagramIcon from '@/assets/brand-icons/instagram.svg'

export default function Home() {
  return (
    <>
      <Header />

      <main className="mx-auto mb-20 mt-26 max-w-container space-y-20 px-4">
        <Hero />

        <About />

        <Skills />

        <Services />

        <Works />

        <Contact />
      </main>

      <footer className="flex flex-col items-center bg-slate-500 px-4 pb-24 pt-8 text-center text-slate-50 dark:text-slate-900">
        <strong className="text-3xl font-semibold">Mateus</strong>

        <div className="my-8 flex justify-center gap-5">
          <Link href="">Habilidades</Link>
          <Link href="">Projetos</Link>
        </div>

        <div className="mb-16 flex justify-center gap-5">
          <Link
            href="https://github.com/mateussantanasilva"
            className="rounded-lg bg-white p-1 dark:bg-slate-900 lg:p-1.5"
          >
            <Image
              src={GithubIcon}
              alt="Ícone do github em link para ver perfil"
              className="size-4 lg:size-5"
            />
          </Link>

          <Link
            href="https://www.instagram.com/santana__mss/"
            className="rounded-lg bg-white p-1 dark:bg-slate-900 lg:p-1.5"
          >
            <Image
              src={InstagramIcon}
              alt="Ícone do instagram em link para ver perfil"
              className="size-4 lg:size-5"
            />
          </Link>

          <Link
            href="https://www.linkedin.com/in/mateus-santana-silva/"
            className="rounded-lg bg-white p-1 dark:bg-slate-900 lg:p-1.5"
          >
            <Linkedin
              aria-label="Ícone do linkedin em link para ver perfil"
              className="size-4 text-slate-500 lg:size-5"
            />
          </Link>
        </div>

        <span className="text-xs text-white dark:text-slate-700 lg:text-sm">
          &copy; Bedimcode, Mateus Santana da Silva. Todos os direitos
          reservados.
        </span>
      </footer>
    </>
  )
}
