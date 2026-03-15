'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Gallery() {
  const [images, setImages] = useState<string[]>([])

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
                <div key={i} style={{ position: 'relative', height: '250px', borderRadius: '12px', overflow: 'hidden' }}>
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

    </div>
  )
}