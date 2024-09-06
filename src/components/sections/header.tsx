'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Moon, Sun } from 'lucide-react'
import { Navigation } from '@/components/sections/navigation'
import { useTheme } from 'next-themes'

export function Header() {
  const [isClient, setIsClient] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  const { theme, setTheme } = useTheme()

  function handleChangeTheme() {
    if (theme === 'dark') return setTheme('light')

    return setTheme('dark')
  }

  useEffect(() => {
    setIsClient(true)

    const handleScrollY = () => setScrollY(window.scrollY)

    window.addEventListener('scroll', handleScrollY)

    return () => window.removeEventListener('scroll', handleScrollY)
  }, [])

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-10 bg-slate-50 dark:bg-slate-900 ${scrollY > 0 && 'shadow-md dark:shadow-md2'}`}
    >
      <div className="mx-auto flex h-14 max-w-container items-center justify-between px-4">
        <Link
          href="#hero"
          className="text-base font-medium text-slate-500 transition-all hover:brightness-110 dark:hover:brightness-125"
        >
          Mateus
        </Link>

        {isClient && (
          <button onClick={handleChangeTheme}>
            {theme === 'dark' ? (
              <Moon className="size-6 text-slate-400 transition-colors hover:text-slate-500 dark:text-slate-200 dark:hover:text-slate-500" />
            ) : (
              <Sun className="size-6 text-slate-400 transition-colors hover:text-slate-500 dark:text-slate-200 dark:hover:text-slate-500" />
            )}
          </button>
        )}
      </div>

      <Navigation />
    </header>
  )
}
