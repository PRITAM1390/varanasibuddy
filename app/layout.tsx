import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import config from './config'

// export const metadata: Metadata = {
//   title: config.metaTitle,
//   description: config.metaDescription,
// }

export const metadata: Metadata = {
  title: config.metaTitle,
  description: config.metaDescription,
  verification: {
    google: 'g-RBZNPXx1xQYCOctFcqjwKRZugKrYhAfwHCqTkUqcg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}


// import type { Metadata } from 'next'
// import './globals.css'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'

// export const metadata: Metadata = {
//   title: 'The Organizer — Varanasi Local Guide',
//   description: 'Explore Varanasi like a local. No tourist traps, no overcharging. Trusted local guide service in Varanasi.',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className="flex flex-col min-h-screen">
//         <Navbar />
//         <main className="flex-1">
//           {children}
//         </main>
//         <Footer />
//       </body>
//     </html>
//   )
// }