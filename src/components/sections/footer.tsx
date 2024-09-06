'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Linkedin } from 'lucide-react'
import { scrollToSection } from '@/utils/scroll-to-section'
import { Reveal } from '../reveal'

import GithubIcon from '@/assets/brand-icons/github.svg'
import InstagramIcon from '@/assets/brand-icons/instagram.svg'

export function Footer() {
  return (
    <footer className="flex flex-col items-center bg-slate-500 px-4 pb-24 pt-8 text-center text-slate-50 dark:text-slate-900">
      <Reveal>
        <strong className="text-3xl font-semibold">Mateus</strong>

        <div className="my-8 flex justify-center gap-5">
          <button
            onClick={() => scrollToSection('skills')}
            className="underline-offset-8 transition-all hover:underline hover:brightness-95 dark:hover:brightness-200"
          >
            Habilidades
          </button>
          <button
            onClick={() => scrollToSection('works')}
            className="underline-offset-8 transition-all hover:underline hover:brightness-95 dark:hover:brightness-200"
          >
            Projetos
          </button>
        </div>

        <div className="mb-16 flex justify-center gap-5">
          <Link
            href="https://github.com/mateussantanasilva"
            target="_blank"
            className="rounded-lg bg-white p-1 transition-all hover:brightness-95 dark:bg-slate-900 dark:hover:brightness-200 lg:p-1.5"
          >
            <Image
              src={GithubIcon}
              alt="Ícone do github em link para ver perfil"
              className="size-4 lg:size-5"
            />
          </Link>

          <Link
            href="https://www.instagram.com/santana__mss/"
            target="_blank"
            className="rounded-lg bg-white p-1 transition-all hover:brightness-95 dark:bg-slate-900 dark:hover:brightness-200 lg:p-1.5"
          >
            <Image
              src={InstagramIcon}
              alt="Ícone do instagram em link para ver perfil"
              className="size-4 lg:size-5"
            />
          </Link>

          <Link
            href="https://www.linkedin.com/in/mateus-santana-silva/"
            target="_blank"
            className="rounded-lg bg-white p-1 transition-all hover:brightness-95 dark:bg-slate-900 dark:hover:brightness-200 lg:p-1.5"
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
      </Reveal>
    </footer>
  )
}
