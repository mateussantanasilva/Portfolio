'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { Button } from '../button'
import { Code, Globe } from 'lucide-react'

import 'swiper/css'
import 'swiper/css/pagination'

import DefaultImg from '@/assets/default-front-cover.webp'

export function Works() {
  return (
    <section>
      <header className="mb-10 flex flex-col items-center">
        <span className="text-xs text-slate-300">Meu portfólio</span>
        <h2 className="text-xl font-semibold text-slate-500">
          Trabalhos Recentes
        </h2>
      </header>

      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        loop
        pagination={{ clickable: true }}
        className="cursor-grab"
      >
        {Array.from({ length: 5 }).map((item, index) => (
          <SwiperSlide
            key={index}
            className="mb-12 rounded-3xl bg-slate-700 px-6 py-5"
          >
            <Image
              src={DefaultImg}
              alt="Capa de projeto em desenvolvimento"
              className="mb-4 w-full rounded-3xl"
            />

            <h3 className="mb-1 truncate font-medium">SavPets</h3>
            <p className="text-sm text-slate-200">
              Plataforma de recomendações para leitores, um lugar onde eles
              possam avaliar e ver avaliações.
            </p>

            <div className="mt-4 flex flex-wrap justify-center gap-2">
              <Button title="Site" variant="outline" size="sm" icon={Globe} />
              <Button title="Repositório" size="sm" icon={Code} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
