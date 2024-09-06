'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../button'
import { Linkedin, Mouse } from 'lucide-react'
import { scrollToSection } from '@/utils/scroll-to-section'
import { Reveal } from '../reveal'

import ProfileImg from '@/assets/profile.webp'
import GithubIcon from '@/assets/brand-icons/github.svg'
import GmailIcon from '@/assets/brand-icons/gmail.svg'

export function Hero() {
  return (
    <Reveal>
      <section id="hero" className="relative">
        <header className="mb-10 flex flex-col items-center">
          <span className="mb-1 text-sm font-medium">Olá, me chamo</span>
          <h1 className="flex h-16 items-center text-center text-3xl font-semibold lg:text-4.5xl">
            Mateus Santana
          </h1>
          <h3 className="text-center text-sm font-medium text-slate-400 dark:text-slate-200">
            Desenvolvedor Full Stack
          </h3>
        </header>

        <div className="mb-16 flex flex-col items-center justify-center gap-6 xs:flex-row">
          <Button
            href="/CV_MateusSantana.pdf"
            download="CV_MateusSantana"
            title="Baixar CV"
            variant="outline"
          />

          <Button
            role="button"
            title="Sobre mim"
            onClick={() => scrollToSection('about')}
          />
        </div>

        <div className="mx-auto flex h-60 w-40 items-end justify-center rounded-b-2xl rounded-t-3xl bg-profile xs:h-72 xs:w-48 lg:h-96 lg:w-72">
          <Image
            src={ProfileImg}
            alt="Foto de perfil do Mateus"
            width={424}
            priority
            className="w-36 drop-shadow-2xl dark:brightness-90 xs:w-44 lg:w-60"
          />
        </div>

        <div className="absolute bottom-6 left-0 flex w-fit flex-col items-center gap-2 after:h-8 after:w-0.5 after:bg-slate-500">
          <Link
            href="https://www.linkedin.com/in/mateus-santana-silva/"
            target="_blank"
            className="rounded bg-white p-1 shadow-md transition-all hover:brightness-95 dark:bg-slate-700 dark:shadow-none dark:hover:brightness-200 lg:p-1.5"
          >
            <Linkedin
              aria-label="Ícone do linkedin em link para ver perfil"
              className="size-4 text-slate-500 lg:size-5"
            />
          </Link>

          <Link
            href="https://github.com/mateussantanasilva"
            target="_blank"
            className="rounded bg-white p-1 shadow-md transition-all hover:brightness-95 dark:bg-slate-700 dark:shadow-none dark:hover:brightness-200 lg:p-1.5"
          >
            <Image
              src={GithubIcon}
              alt="Ícone do github em link para ver perfil"
              className="size-4 lg:size-5"
            />
          </Link>

          <Link
            href="mailto:santanasilva1778@gmail.com"
            target="_blank"
            className="rounded bg-white p-1 shadow-md transition-all hover:brightness-95 dark:bg-slate-700 dark:shadow-none dark:hover:brightness-200 lg:p-1.5"
          >
            <Image
              src={GmailIcon}
              alt="Ícone do gmail em link para ver perfil"
              className="size-4 lg:size-5"
            />
          </Link>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="absolute -right-9 bottom-16 flex -rotate-90 items-center gap-2 text-slate-500 transition-all hover:brightness-110 dark:hover:brightness-125"
        >
          <span className="text-xs lg:text-sm">Ver Portfólio</span>
          <Mouse className="size-3.5 rotate-90 lg:size-4" />
        </button>
      </section>
    </Reveal>
  )
}
