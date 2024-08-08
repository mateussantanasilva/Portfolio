import Image from 'next/image'
import { Award, Briefcase, Building } from 'lucide-react'
import { Button } from '../button'

import AboutImg from '@/assets/about.webp'

export function About() {
  return (
    <section>
      <header className="mb-10 flex flex-col items-center">
        <span className="text-xs text-slate-300">Introdução</span>
        <h2 className="text-xl font-semibold text-slate-500">Sobre Mim</h2>
      </header>

      <div className="flex flex-col items-center">
        <Image
          src={AboutImg}
          alt="Foto de perfil sobre o Mateus"
          width={350}
          className="mb-10 w-56 rounded-3xl brightness-95 drop-shadow-xl"
        />

        <div className="grid grid-cols-3 flex-wrap gap-2">
          <div className="flex flex-col items-center justify-center rounded-xl bg-slate-700 px-2 py-3">
            <Award className="size-6 text-slate-500" />
            <h3 className="mb-1.5 mt-2 text-sm font-semibold">Experiência</h3>
            <span className="text-center text-xs text-slate-200">
              3 anos <br /> estudando
            </span>
          </div>

          <div className="flex flex-col items-center justify-center rounded-xl bg-slate-700 px-2 py-3">
            <Briefcase className="size-6 text-slate-500" />
            <h3 className="mb-1.5 mt-2 text-sm font-semibold">Concluído</h3>
            <span className="text-center text-xs text-slate-200">
              + 8 <br /> projetos
            </span>
          </div>

          <div className="flex flex-col items-center justify-center rounded-xl bg-slate-700 px-2 py-3">
            <Building className="size-6 text-slate-500" />
            <h3 className="mb-1.5 mt-2 text-sm font-semibold">Emprego</h3>
            <span className="text-center text-xs text-slate-200">
              3 meses <br /> trabalhando
            </span>
          </div>
        </div>

        <p className="my-8 text-center text-slate-200">
          Desenvolvedor full stack, graduando em desenvolvimento de software
          multiplataforma, com objetivo de construir aplicações completas com
          persistência de dados, buscando sempre aprimorar o nível de
          conhecimento atual.
        </p>

        <Button title="Contate-me" />
      </div>
    </section>
  )
}
