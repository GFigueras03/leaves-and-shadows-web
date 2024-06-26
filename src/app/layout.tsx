/* eslint-disable @typescript-eslint/explicit-function-return-type */
import type { Metadata } from 'next'
import React from 'react'
import './globals.css'
import { getServerSession } from 'next-auth'
import Provider from '@/app/context/client-provider'
import { authConfig } from '@/lib/route'

export const metadata: Metadata = {
  title: 'Leaves & Shadows',
  description: 'Generated by create next app'
}

export default async function RootLayout ({ children }: Readonly<{ children: React.ReactNode }>) {
  const session = await getServerSession(authConfig)

  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/leaves_and_shadows.ico" />
      </head>
      <body className="w-screen h-screen bg-zinc-950 flex flex-col items-center overflow-hidden">
        <Provider session={session}>
          {children}
        </Provider>
        </body>
    </html>
  )
}
