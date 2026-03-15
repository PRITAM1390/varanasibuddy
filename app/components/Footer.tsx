import config from '../config'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--text-dark)' }} className="text-center py-6 px-4 mt-auto">
      <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
        <span style={{ color: '#F5C842' }}>{config.businessName}</span> — {config.tagline}
      </p>
      <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.3)' }}>
        Made with ❤️ in Kashi
      </p>
    </footer>
  )
}


// export default function Footer() {
//   return (
//     <footer style={{ backgroundColor: 'var(--text-dark)' }} className="text-center py-6 px-4 mt-auto">
//       <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
//         <span style={{ color: '#F5C842' }}>The Organizer</span> — Varanasi's Trusted Local Guide
//       </p>
//       <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.3)' }}>
//         Made with ❤️ in Kashi
//       </p>
//     </footer>
//   )
// }