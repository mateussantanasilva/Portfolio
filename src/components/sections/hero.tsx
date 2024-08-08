import Image from 'next/image'
import { Button } from '../button'

import ProfileImg from '@/assets/profile.webp'

export function Hero() {
  return (
    <section>
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

      <div className="bg-profile mx-auto flex h-72 w-48 items-end justify-center rounded-b-2xl rounded-t-3xl">
        <Image
          src={ProfileImg}
          alt="Foto de perfil do Mateus"
          width={424}
          className="w-44 brightness-95 drop-shadow-xl"
        />
      </div>
    </section>
  )
}
