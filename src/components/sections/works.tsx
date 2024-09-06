'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { Button } from '../button'
import { Code, Globe } from 'lucide-react'
import { Repository } from '@/utils/filter-repositories'

import 'swiper/css'
import 'swiper/css/pagination'
import { ThumbnailFallback } from '../thumbnail-fallback'

interface WorksProps {
  projects: Repository[]
}

export function Works({ projects }: WorksProps) {
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
        slidesPerView={1}
        grabCursor
        pagination={{ clickable: true }}
        loop
        breakpoints={{
          520: {
            slidesPerView: 2,
          },
          820: {
            slidesPerView: 3,
          },
        }}
        className="cursor-grab"
      >
        <div className="max-w-3xl">
          {projects.map((project) => (
            <SwiperSlide
              key={project.name}
              className="mb-12 flex flex-col rounded-3xl bg-white px-6 py-5 shadow-md dark:bg-slate-700 dark:shadow-none lg:px-8 lg:py-6"
            >
              <ThumbnailFallback
                src={project.image_url}
                alt={`Capa de projeto ${project.name}`}
                width={450}
                height={320}
                className="mb-4 w-full rounded-3xl"
              />

              <h3 className="mb-1 truncate font-medium">{project.name}</h3>
              <p className="line-clamp-4 min-h-20 text-sm text-slate-400 dark:text-slate-200">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start">
                {project.homepage && (
                  <Button
                    href={project.homepage}
                    target="_blank"
                    title="Site"
                    variant="outline"
                    size="sm"
                    icon={Globe}
                  />
                )}

                <Button
                  href={project.html_url}
                  target="_blank"
                  title="Repositório"
                  size="sm"
                  icon={Code}
                />
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </section>
  )
}
