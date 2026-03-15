'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Gallery() {
  const [images, setImages] = useState<string[]>([])
  const [selected, setSelected] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/gallery')
      .then(res => res.json())
      .then(data => setImages(data.images))
  }, [])

  return (
    <div>

      {/* Header */}
      <section style={{ backgroundColor: 'var(--text-dark)' }} className="px-6 py-16 text-center">
        <h1 className="text-4xl font-bold mb-3" style={{ color: '#F5C842' }}>Gallery</h1>
        <p style={{ color: 'rgba(255,255,255,0.7)' }} className="text-sm">Varanasi through our eyes</p>
      </section>

      {/* Gallery Grid */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          {images.length === 0 ? (
            <p className="text-center" style={{ color: 'var(--text-mid)' }}>Loading...</p>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
              {images.map((img, i) => (
                <div key={i}
                  onClick={() => setSelected(img)}
                  style={{ position: 'relative', height: '250px', borderRadius: '12px', overflow: 'hidden', cursor: 'pointer' }}
                  className="hover:opacity-90 transition">
                  <Image
                    src={`/gallery/${img}`}
                    alt={`Varanasi ${i + 1}`}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            cursor: 'pointer',
            padding: '2rem'
          }}>

          {/* Close button */}
          <button
            onClick={() => setSelected(null)}
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              color: 'white',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              fontSize: '20px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            ✕
          </button>

          {/* Full image */}
          <div
            onClick={e => e.stopPropagation()}
            style={{ position: 'relative', width: '90vw', height: '80vh', borderRadius: '12px', overflow: 'hidden' }}>
            <Image
              src={`/gallery/${selected}`}
              alt="Varanasi"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>

          {/* Navigation */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              const idx = images.indexOf(selected)
              setSelected(images[idx > 0 ? idx - 1 : images.length - 1])
            }}
            style={{
              position: 'absolute',
              left: '1rem',
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              color: 'white',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              fontSize: '20px',
              cursor: 'pointer'
            }}>
            ‹
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              const idx = images.indexOf(selected)
              setSelected(images[idx < images.length - 1 ? idx + 1 : 0])
            }}
            style={{
              position: 'absolute',
              right: '1rem',
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              color: 'white',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              fontSize: '20px',
              cursor: 'pointer'
            }}>
            ›
          </button>

        </div>
      )}

    </div>
  )
}


// 'use client'

// import { useEffect, useState } from 'react'
// import Image from 'next/image'

// export default function Gallery() {
//   const [images, setImages] = useState<string[]>([])

//   useEffect(() => {
//     fetch('/api/gallery')
//       .then(res => res.json())
//       .then(data => setImages(data.images))
//   }, [])

//   return (
//     <div>

//       {/* Header */}
//       <section style={{ backgroundColor: 'var(--text-dark)' }} className="px-6 py-16 text-center">
//         <h1 className="text-4xl font-bold mb-3" style={{ color: '#F5C842' }}>Gallery</h1>
//         <p style={{ color: 'rgba(255,255,255,0.7)' }} className="text-sm">Varanasi through our eyes</p>
//       </section>

//       {/* Gallery Grid */}
//       <section className="px-6 py-16">
//         <div className="max-w-5xl mx-auto">
//           {images.length === 0 ? (
//             <p className="text-center" style={{ color: 'var(--text-mid)' }}>Loading...</p>
//           ) : (
//             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
//               {images.map((img, i) => (
//                 <div key={i} style={{ position: 'relative', height: '250px', borderRadius: '12px', overflow: 'hidden' }}>
//                   <Image
//                     src={`/gallery/${img}`}
//                     alt={`Varanasi ${i + 1}`}
//                     fill
//                     style={{ objectFit: 'cover' }}
//                   />
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>

//     </div>
//   )
// }