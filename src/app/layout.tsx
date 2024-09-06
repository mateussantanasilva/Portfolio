import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600'] })

export const metadata: Metadata = {
  title: 'Portfólio | Mateus',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ptBR" suppressHydrationWarning>
      <body
        className={`antialiased ${poppins.className} bg-slate-50 text-slate-600 transition-colors dark:bg-slate-900 dark:text-slate-100`}
      >
        <ThemeProvider
          attribute="class"
          themes={['light', 'dark']}
          defaultTheme="dark"
          storageKey="theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
