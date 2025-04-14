import "./globals.css" // CORRETO

import type { Metadata } from "next"
import { Inter, Orbitron } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-title",
  display: "swap",
  weight: ["400", "500", "700"],
})

export const metadata: Metadata = {
  title: "NexAgent-Pro",
  description: "Gestão brutal de HyperAgentes IA.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`
          ${inter.variable} 
          ${orbitron.variable} 
          font-sans 
          bg-background 
          text-foreground 
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  )
}
