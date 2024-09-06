'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, Mail, MapPinHouse } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'

import WhatsAppIcon from '@/assets/brand-icons/whatsapp.svg'
import WhatsAppLightIcon from '@/assets/brand-icons/whatsapp-light.svg'

export function Contact() {
  const [isClient, setIsClient] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <section>
      <header className="mb-10 flex flex-col items-center lg:mb-14">
        <span className="text-xs text-slate-400 dark:text-slate-300 lg:text-sm">
          Entrar em contato
        </span>
        <h2 className="text-xl font-semibold text-slate-500 lg:text-2xl">
          Fale comigo
        </h2>
      </header>

      <div className="flex flex-col items-stretch gap-5 md:flex-row">
        <div className="flex w-full flex-col items-center rounded-xl bg-white p-4 shadow-md dark:bg-slate-700 dark:shadow-none">
          <Mail className="size-7" />
          <h3 className="mt-2 max-w-48 text-sm font-semibold">Email</h3>
          <span className="mb-3 truncate text-center text-sm text-slate-400 dark:text-slate-200">
            santanasilva1778@gmail.com
          </span>
          <Link
            href="mailto:santanasilva1778@gmail.com"
            target="_blank"
            className="flex items-center gap-1 text-sm text-slate-500 transition-all hover:brightness-110 dark:hover:brightness-125"
          >
            Escreva-me
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="flex w-full flex-col items-center rounded-xl bg-white p-4 shadow-md dark:bg-slate-700 dark:shadow-none">
          {isClient && theme === 'dark' ? (
            <Image src={WhatsAppIcon} alt="Ícone do WhatsApp" className="w-6" />
          ) : (
            <Image
              src={WhatsAppLightIcon}
              alt="Ícone do WhatsApp"
              className="w-6"
            />
          )}

          <h3 className="mt-2 max-w-48 text-sm font-semibold">WhatsApp</h3>
          <span className="mb-3 truncate text-center text-sm text-slate-400 dark:text-slate-200">
            (11)94346-4488
          </span>
          <Link
            href="https://wa.me/5511943464488?text=Ol%C3%A1%2C+vim+pelo+seu+portf%C3%B3lio."
            target="_blank"
            className="flex items-center gap-1 text-sm text-slate-500 transition-all hover:brightness-110 dark:hover:brightness-125"
          >
            Escreva-me
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="flex w-full flex-col items-center rounded-xl bg-white p-4 shadow-md dark:bg-slate-700 dark:shadow-none">
          <MapPinHouse className="size-7" />
          <h3 className="mt-2 max-w-48 text-sm font-semibold">Localização</h3>
          <span className="mb-3 truncate text-center text-sm text-slate-400 dark:text-slate-200">
            São Paulo, SP - Zona Leste
          </span>
          <Link
            href="https://www.google.com/maps/place/S%C3%A3o+Paulo,+SP/@-23.6815315,-46.875497,10z/data=!3m1!4b1!4m5!3m4!1s0x94ce448183a461d1:0x9ba94b08ff335bae!8m2!3d-23.5557714!4d-46.6395571"
            target="_blank"
            className="flex items-center gap-1 text-sm text-slate-500 transition-all hover:brightness-110 dark:hover:brightness-125"
          >
            Localize-me
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
