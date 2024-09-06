import Image from 'next/image'
import { Award, Briefcase, Building } from 'lucide-react'
import { Button } from '../button'

import AboutImg from '@/assets/about.webp'

interface AboutProps {
  projectsNumber: number
}

export async function About({ projectsNumber }: AboutProps) {
  return (
    <section>
      <header className="mb-10 flex flex-col items-center lg:mb-14">
        <span className="text-xs text-slate-400 dark:text-slate-300 lg:text-sm">
          Introdução
        </span>
        <h2 className="text-xl font-semibold text-slate-500 lg:text-2xl">
          Sobre Mim
        </h2>
      </header>

      <div className="grid grid-cols-1 items-center justify-center lg:grid-cols-2 lg:gap-16">
        <Image
          src={AboutImg}
          alt="Foto de perfil sobre o Mateus"
          width={350}
          className="mx-auto mb-10 w-56 rounded-3xl brightness-95 drop-shadow-xl lg:mb-0 lg:w-84"
        />

        <div>
          <div className="mx-auto grid w-full grid-cols-2 gap-2 xs:grid-cols-3 sm:w-fit sm:grid-cols-badges">
            <div className="flex flex-col items-center justify-center rounded-xl bg-white px-2 py-3 shadow-md dark:bg-slate-700 dark:shadow-none">
              <Award className="size-6 text-slate-500" />
              <h3 className="mb-1.5 mt-2 text-sm font-semibold">Experiência</h3>
              <span className="text-center text-xs leading-loose text-slate-400 dark:text-slate-200">
                3 anos <br /> estudando
              </span>
            </div>

            <div className="flex flex-col items-center justify-center rounded-xl bg-white px-2 py-3 shadow-md dark:bg-slate-700 dark:shadow-none">
              <Briefcase className="size-6 text-slate-500" />
              <h3 className="mb-1.5 mt-2 text-sm font-semibold">Concluído</h3>
              <span className="text-center text-xs leading-loose text-slate-400 dark:text-slate-200">
                + {projectsNumber} <br /> projetos
              </span>
            </div>

            <div className="flex flex-col items-center justify-center rounded-xl bg-white px-2 py-3 shadow-md dark:bg-slate-700 dark:shadow-none">
              <Building className="size-6 text-slate-500" />
              <h3 className="mb-1.5 mt-2 text-sm font-semibold">Emprego</h3>
              <span className="text-center text-xs leading-loose text-slate-400 dark:text-slate-200">
                3 meses <br /> trabalhando
              </span>
            </div>
          </div>

          <p className="my-8 text-center text-slate-400 dark:text-slate-200 sm:px-20 lg:px-0 lg:text-start">
            Desenvolvedor full stack, graduando em desenvolvimento de software
            multiplataforma, com objetivo de construir aplicações completas com
            persistência de dados, buscando sempre aprimorar o nível de
            conhecimento atual.
          </p>

          <div className="mx-auto w-fit lg:mx-0">
            <Button href="#contact" title="Contate-me" />
          </div>
        </div>
      </div>
    </section>
  )
}
