import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../button'
import { Linkedin, Mouse } from 'lucide-react'

import ProfileImg from '@/assets/profile.webp'
import GithubIcon from '@/assets/brand-icons/github.svg'
import GmailIcon from '@/assets/brand-icons/gmail.svg'

export function Hero() {
  return (
    <section className="relative">
      <header className="mb-10 flex flex-col items-center">
        <span className="mb-1 text-sm font-medium">Olá, me chamo</span>
        <h1 className="text-3xl font-semibold">Mateus Santana</h1>
        <h3 className="text-sm font-medium text-slate-200">
          Desenvolvedor Full Stack
        </h3>
      </header>

      <div className="mb-16 flex items-center justify-center gap-6">
        <Button title="Baixar CV" variant="outline" />

        <Button title="Sobre mim" />
      </div>

      <div className="mx-auto flex h-72 w-48 items-end justify-center rounded-b-2xl rounded-t-3xl bg-profile">
        <Image
          src={ProfileImg}
          alt="Foto de perfil do Mateus"
          width={424}
          className="w-44 brightness-95 drop-shadow-xl"
        />
      </div>

      <div className="absolute bottom-6 left-0 flex w-fit flex-col items-center gap-2 after:h-8 after:w-0.5 after:bg-slate-500">
        <Link
          href="https://www.linkedin.com/in/mateus-santana-silva/"
          className="rounded bg-slate-700 p-1"
        >
          <Linkedin
            aria-label="Ícone do linkedin em link para ver perfil"
            className="size-4 text-slate-500"
          />
        </Link>

        <Link
          href="https://github.com/mateussantanasilva"
          className="rounded bg-slate-700 p-1"
        >
          <Image
            src={GithubIcon}
            alt="Ícone do github em link para ver perfil"
            className="size-4"
          />
        </Link>

        <Link
          href="mailto:santanasilva1778@gmail.com"
          className="rounded bg-slate-700 p-1"
        >
          <Image
            src={GmailIcon}
            alt="Ícone do gmail em link para ver perfil"
            className="size-4"
          />
        </Link>
      </div>

      <Link
        href=""
        className="absolute -right-9 bottom-16 flex -rotate-90 items-center gap-2 text-slate-500"
      >
        <span className="text-xs">Ver Portfólio</span>
        <Mouse className="size-3.5 rotate-90" />
      </Link>
    </section>
  )
}
