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
      <header className="mb-10 flex flex-col items-center lg:mb-14">
        <span className="text-xs text-slate-400 dark:text-slate-300 lg:text-sm">
          Meu portfólio
        </span>
        <h2 className="text-xl font-semibold text-slate-500 lg:text-2xl">
          Trabalhos Recentes
        </h2>
      </header>

      <Swiper
        modules={[Pagination]}
        spaceBetween={24}
        loop
        grabCursor
        pagination={{ clickable: true }}
        breakpoints={{
          560: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        className="cursor-grab"
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <SwiperSlide
            key={index}
            className="mb-12 max-w-slide rounded-3xl bg-white px-6 py-5 shadow-md dark:bg-slate-700 dark:shadow-none lg:px-8 lg:py-6"
          >
            <Image
              src={DefaultImg}
              alt="Capa de projeto em desenvolvimento"
              className="mb-4 w-full rounded-3xl"
            />

            <h3 className="mb-1 truncate font-medium">SavPets</h3>
            <p className="text-sm text-slate-400 dark:text-slate-200">
              Plataforma de recomendações para leitores, um lugar onde eles
              possam avaliar e ver avaliações.
            </p>

            <div className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start">
              <Button title="Site" variant="outline" size="sm" icon={Globe} />
              <Button title="Repositório" size="sm" icon={Code} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
