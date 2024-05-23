// "use client"
// import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Sistema de crud',
//   description:
//     'Pequeno sistema de crud com nextjs, react-hook-form, prisma, react-icons',
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-br'>
      {/* <ToastProvider> */}
      <body className={inter.className}>
        <Header />

        <main>{children}</main>
        <Toaster />
      </body>
      {/* </ToastProvider> */}
    </html>
  )
}
