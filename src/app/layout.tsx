"use client"

import { Roboto } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'

const roboto = Roboto({ weight: '400', subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div>{children}</div>
        <Toaster expand={false} richColors position="top-right" />
      </body>
    </html>
  )
}
