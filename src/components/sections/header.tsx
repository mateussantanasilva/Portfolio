'use client'

import Link from 'next/link'
import { Moon, Sun } from 'lucide-react'
import { Navigation } from '@/components/sections/navigation'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function Header() {
  const [isClient, setIsClient] = useState(false)
  const { theme, setTheme } = useTheme()

  function handleChangeTheme() {
    if (theme === 'dark') return setTheme('light')

    return setTheme('dark')
  }

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <header className="fixed left-0 right-0 top-0 z-10 bg-slate-50 shadow-md dark:bg-slate-900 dark:shadow-md2">
      <div className="mx-auto flex h-14 max-w-container items-center justify-between px-4">
        <Link href="/" className="text-base font-medium text-slate-500">
          Mateus
        </Link>

        {isClient && (
          <button onClick={handleChangeTheme}>
            {theme === 'dark' ? (
              <Moon className="size-6 text-slate-400 dark:text-slate-200" />
            ) : (
              <Sun className="size-6 text-slate-400 dark:text-slate-200" />
            )}
          </button>
        )}
      </div>

      <Navigation />
    </header>
  )
}
