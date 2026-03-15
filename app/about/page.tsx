export default function About() {
  return (
    <div>

      {/* Header */}
      <section style={{ backgroundColor: 'var(--text-dark)' }} className="px-6 py-16 text-center">
        <h1 className="text-4xl font-bold mb-3" style={{ color: '#F5C842' }}>About Us</h1>
        <p style={{ color: 'rgba(255,255,255,0.7)' }} className="text-sm">We are Varanasi</p>
      </section>

      {/* Story */}
      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl p-8 border" style={{ borderColor: 'rgba(200,120,40,0.2)' }}>

            {/* Pritam Card */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0"
                style={{ backgroundColor: 'rgba(245,200,66,0.2)', color: '#F5C842', fontFamily: 'Playfair Display, serif' }}>
                P
              </div>
              <div>
                <div className="font-bold text-lg" style={{ color: 'var(--text-dark)' }}>Pritam</div>
                <div className="text-sm" style={{ color: 'var(--text-mid)' }}>Founder, The Organizer</div>
                <div className="text-xs" style={{ color: 'var(--text-mid)' }}>Varanasi, Uttar Pradesh</div>
              </div>
            </div>

            <p className="text-sm mb-4" style={{ color: 'var(--text-mid)', lineHeight: '1.8' }}>
              Born and raised in Varanasi, I know this city like the back of my hand. Every ghat, every lane, every hidden dhaba — I've been there a hundred times.
            </p>
            <p className="text-sm mb-4" style={{ color: 'var(--text-mid)', lineHeight: '1.8' }}>
              I started The Organizer because I was tired of seeing tourists get cheated. Overpriced autos, fake guides, tourist trap restaurants — it happens every single day in this city.
            </p>
            <p className="text-sm" style={{ color: 'var(--text-mid)', lineHeight: '1.8' }}>
              You deserve to experience the real Varanasi — the morning aarti, the authentic kachori wala, the boatman who won't overcharge you. That's what we're here for.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            {[
              { num: '100%', label: 'Local Team' },
              { num: '0', label: 'Tourist Traps' },
              { num: '∞', label: 'Trust' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 text-center border"
                style={{ borderColor: 'rgba(200,120,40,0.2)' }}>
                <div className="text-3xl font-bold mb-1" style={{ color: 'var(--saffron)', fontFamily: 'Playfair Display, serif' }}>{item.num}</div>
                <div className="text-xs" style={{ color: 'var(--text-mid)' }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2" style={{ color: 'var(--text-dark)' }}>Our Team</h2>
          <p className="text-center text-sm mb-10" style={{ color: 'var(--text-mid)' }}>Local friends and brothers who love this city</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            {[
              { initial: 'P', name: 'Pritam', role: 'Founder & Guide' },
              { initial: 'F', name: 'Friend 1', role: 'Local Guide' },
              { initial: 'F', name: 'Friend 2', role: 'Local Guide' },
            ].map((member, i) => (
              <div key={i} className="bg-white rounded-xl p-6 text-center border"
                style={{ borderColor: 'rgba(200,120,40,0.2)' }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg"
                  style={{ backgroundColor: 'rgba(245,200,66,0.2)', color: '#F5C842', fontFamily: 'Playfair Display, serif' }}>
                  {member.initial}
                </div>
                <div className="font-medium text-sm" style={{ color: 'var(--text-dark)' }}>{member.name}</div>
                <div className="text-xs" style={{ color: 'var(--text-mid)' }}>{member.role}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs mt-4" style={{ color: 'var(--text-mid)' }}>* You can update your friends' names here later!</p>
        </div>
      </section>

    </div>
  )
}