'use client'

import { useState } from 'react'
import Link from 'next/link'
import config from '../config'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav style={{ backgroundColor: 'var(--text-dark)' }} className="sticky top-0 z-50 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link href="/" style={{ color: '#F5C842', fontFamily: 'Playfair Display, serif' }} className="text-xl font-bold tracking-wide">
          {config.businessName}
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-8 list-none">
          <li><Link href="/" style={{ color: 'rgba(255,255,255,0.8)' }} className="hover:text-yellow-400 text-sm font-medium">Home</Link></li>
          <li><Link href="/services" style={{ color: 'rgba(255,255,255,0.8)' }} className="hover:text-yellow-400 text-sm font-medium">Services</Link></li>
          <li><Link href="/about" style={{ color: 'rgba(255,255,255,0.8)' }} className="hover:text-yellow-400 text-sm font-medium">About</Link></li>
          <li><Link href="/book" style={{ color: 'rgba(255,255,255,0.8)' }} className="hover:text-yellow-400 text-sm font-medium">Book Now</Link></li>
          <li><Link href="/contact" style={{ color: 'rgba(255,255,255,0.8)' }} className="hover:text-yellow-400 text-sm font-medium">Contact</Link></li>
          <li><Link href="/gallery" style={{ color: 'rgba(255,255,255,0.8)' }} className="hover:text-yellow-400 text-sm font-medium">Gallery</Link></li>
        </ul>

        {/* Mobile hamburger */}
        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-3 flex flex-col gap-3 px-4 pb-4">
          <Link href="/" style={{ color: 'rgba(255,255,255,0.8)' }} className="text-sm" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/services" style={{ color: 'rgba(255,255,255,0.8)' }} className="text-sm" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="/about" style={{ color: 'rgba(255,255,255,0.8)' }} className="text-sm" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/book" style={{ color: 'rgba(255,255,255,0.8)' }} className="text-sm" onClick={() => setMenuOpen(false)}>Book Now</Link>
          <Link href="/contact" style={{ color: 'rgba(255,255,255,0.8)' }} className="text-sm" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link href="/gallery" style={{ color: 'rgba(255,255,255,0.8)' }} className="text-sm" onClick={() => setMenuOpen(false)}>Gallery</Link>
        </div>
      )}
    </nav>
  )
}



// 'use client'

// import { useState } from 'react'
// import Link from 'next/link'

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false)

//   return (
//     <nav style={{ backgroundColor: 'var(--text-dark)' }} className="sticky top-0 z-50 px-6 py-4">
//       <div className="max-w-6xl mx-auto flex items-center justify-between">

//         {/* Logo */}
//         <Link href="/" style={{ color: '#F5C842', fontFamily: 'Playfair Display, serif' }} className="text-xl font-bold tracking-wide">
//           The Organizer
//         </Link>

//         {/* Desktop Nav Links */}
//         <ul className="hidden md:flex gap-8 list-none">
//           <li><Link href="/" style={{ color: 'rgba(255,255,255,0.8)' }} className="hover:text-yellow-400 text-sm font-medium">Home</Link></li>
//           <li><Link href="/services" style={{ color: 'rgba(255,255,255,0.8)' }} className="hover:text-yellow-400 text-sm font-medium">Services</Link></li>
//           <li><Link href="/about" style={{ color: 'rgba(255,255,255,0.8)' }} className="hover:text-yellow-400 text-sm font-medium">About</Link></li>
//           <li><Link href="/book" style={{ color: 'rgba(255,255,255,0.8)' }} className="hover:text-yellow-400 text-sm font-medium">Book Now</Link></li>
//           <li><Link href="/contact" style={{ color: 'rgba(255,255,255,0.8)' }} className="hover:text-yellow-400 text-sm font-medium">Contact</Link></li>
//           <li><Link href="/gallery" style={{ color: 'rgba(255,255,255,0.8)' }} className="hover:text-yellow-400 text-sm font-medium">Gallery</Link></li>
//         </ul>

//         {/* Mobile hamburger */}
//         <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
//           ☰
//         </button>

//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden mt-3 flex flex-col gap-3 px-4 pb-4">
//           <Link href="/" style={{ color: 'rgba(255,255,255,0.8)' }} className="text-sm" onClick={() => setMenuOpen(false)}>Home</Link>
//           <Link href="/services" style={{ color: 'rgba(255,255,255,0.8)' }} className="text-sm" onClick={() => setMenuOpen(false)}>Services</Link>
//           <Link href="/about" style={{ color: 'rgba(255,255,255,0.8)' }} className="text-sm" onClick={() => setMenuOpen(false)}>About</Link>
//           <Link href="/book" style={{ color: 'rgba(255,255,255,0.8)' }} className="text-sm" onClick={() => setMenuOpen(false)}>Book Now</Link>
//           <Link href="/contact" style={{ color: 'rgba(255,255,255,0.8)' }} className="text-sm" onClick={() => setMenuOpen(false)}>Contact</Link>
//           <li><Link href="/gallery" style={{ color: 'rgba(255,255,255,0.8)' }} className="hover:text-yellow-400 text-sm font-medium">Gallery</Link></li>
//         </div>
//       )}
//     </nav>
//   )
// }