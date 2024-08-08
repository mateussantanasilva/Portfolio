import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

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
    <html lang="ptBR">
      <body
        className={`antialiased ${poppins.className} bg-slate-900 text-slate-100`}
      >
        {children}
      </body>
    </html>
  )
}
