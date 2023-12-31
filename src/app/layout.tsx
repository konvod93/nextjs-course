"use client"
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { Toaster, toast } from 'sonner'

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
        <Toaster />
      </body>
    </html>
  )
}
