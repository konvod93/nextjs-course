"use client"

import { Roboto } from 'next/font/google'
import './globals.css'
import { AppWrapper } from '@/context'


const roboto = Roboto({ weight: '400', subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <AppWrapper>{children}</AppWrapper>
               
      </body>
    </html>
  )
}
