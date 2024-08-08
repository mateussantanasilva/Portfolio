import Link from 'next/link'
import { Linkedin, Moon } from 'lucide-react'
import { About } from '@/components/sections/about'
import { Hero } from '@/components/sections/hero'
import { Services } from '@/components/sections/services'
import { Skills } from '@/components/sections/skills'
import { Contact } from '@/components/sections/contact'
import Image from 'next/image'

import GithubIcon from '@/assets/brand-icons/github.svg'
import InstagramIcon from '@/assets/brand-icons/instagram.svg'

export default function Home() {
  return (
    <>
      <header className="mx-4 flex h-14 items-center justify-between">
        <Link href="/" className="text-base font-medium text-slate-500">
          Mateus
        </Link>

        <Moon className="size-6 text-slate-200" />
      </header>

      <main className="mx-4 mb-20 mt-12 space-y-20">
        <Hero />

        <About />

        <Skills />

        <Services />

        <Contact />
      </main>

      <footer className="flex flex-col items-center bg-slate-500 px-4 pb-24 pt-8 text-center text-slate-900">
        <strong className="text-3xl font-semibold">Mateus</strong>

        <div className="my-8 flex justify-center gap-5">
          <Link href="">Habilidades</Link>
          <Link href="">Projetos</Link>
        </div>

        <div className="mb-16 flex justify-center gap-5">
          <Link
            href="https://github.com/mateussantanasilva"
            className="rounded bg-slate-900 p-1"
          >
            <Image
              src={GithubIcon}
              alt="Ícone do github em link para ver perfil"
              className="size-4"
            />
          </Link>

          <Link
            href="https://www.instagram.com/santana__mss/"
            className="rounded bg-slate-900 p-1"
          >
            <Image
              src={InstagramIcon}
              alt="Ícone do instagram em link para ver perfil"
              className="size-4"
            />
          </Link>

          <Link
            href="https://www.linkedin.com/in/mateus-santana-silva/"
            className="rounded bg-slate-900 p-1"
          >
            <Linkedin
              aria-label="Ícone do linkedin em link para ver perfil"
              className="size-4 text-slate-500"
            />
          </Link>
        </div>

        <span className="text-xs text-slate-700">
          &copy; Bedimcode, Mateus Santana da Silva. Todos os direitos
          reservados.
        </span>
      </footer>
    </>
  )
}
