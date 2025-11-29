import { Layout } from '@/components/dom/Layout'
import { Analytics } from "@vercel/analytics/next"
import '@/global.css'

export const metadata = {
  title: "Beam's Spellbook",
  description: "Welcome to Beam's Spellbook, a mystical portfolio that showcases the artistry and magic behind my work.",
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='antialiased'>
      <head>
        <link rel="icon" href="/mascot.ico" type="image/x-icon" />
      </head>
      <body className='select-none'>
        <Layout>{children}</Layout>
        <Analytics />
      </body>
    </html>
  )
}
