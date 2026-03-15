import Link from 'next/link'
import config from './config'

export default function Home() {
  return (
    <div>

      {/* Hero Section */}
      <section className="relative px-6 py-24 text-center overflow-hidden"
        style={{
          backgroundImage: 'url(/hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>

        {/* Dark Overlay */}
        <div className="absolute inset-0"
          style={{ backgroundColor: 'rgba(20, 10, 5, 0.75)' }}
        />

        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-block text-xs font-medium px-4 py-1 rounded-full mb-6 border"
            style={{ backgroundColor: 'rgba(232,93,4,0.2)', color: '#F5C842', borderColor: 'rgba(245,200,66,0.3)' }}>
            {config.tagline}
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Explore Varanasi <br />
            <span style={{ color: '#F5C842' }}>Like a Local</span>
          </h1>

          <p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.7)' }}>
            {config.description}
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/book"
              style={{ backgroundColor: 'var(--saffron)' }}
              className="text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition">
              Book a Tour
            </Link>
            <Link href="/services"
              className="text-white px-8 py-3 rounded-lg font-medium border transition hover:bg-white/10"
              style={{ borderColor: 'rgba(255,255,255,0.4)' }}>
              See Services
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex items-center justify-center gap-4 py-8">
        <div className="h-px w-16" style={{ backgroundColor: 'var(--gold)', opacity: 0.3 }} />
        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--gold)' }} />
        <div className="h-px w-16" style={{ backgroundColor: 'var(--gold)', opacity: 0.3 }} />
      </div>

      {/* Why Us Section */}
      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2" style={{ color: 'var(--text-dark)' }}>
            Why Choose Us?
          </h2>
          <p className="text-center mb-10 text-sm" style={{ color: 'var(--text-mid)' }}>
            We bridge the gap between tourists and the real Varanasi
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
            {[
              { icon: '🛺', title: 'Transport', desc: 'Rickshaw, auto, toto — we negotiate so you don\'t get overcharged' },
              { icon: '🚤', title: 'Boat Rides', desc: 'Fair prices with boatmen, handled by us' },
              { icon: '🍛', title: 'Local Food', desc: 'Kachori, lassi, malaiyo, chaat — the real spots only locals know' },
              { icon: '🛍️', title: 'Shopping', desc: 'Banarasi sarees, handicrafts at authentic prices' },
              { icon: '🏛️', title: 'City Tour', desc: 'Ghats, temples, hidden gems — every lane covered' },
              { icon: '🏨', title: 'Hotel Booking', desc: 'Available in custom package — full trip planned for you' },
            ].map((item, i) => (
              <div key={i}
                className="bg-white rounded-xl p-5 text-center border"
                style={{ borderColor: 'rgba(200,120,40,0.2)' }}>
                <div className="text-3xl mb-3">{item.icon}</div>
                <div className="font-medium text-sm mb-1" style={{ color: 'var(--text-dark)' }}>{item.title}</div>
                <div className="text-xs" style={{ color: 'var(--text-mid)' }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section style={{ backgroundColor: 'var(--text-dark)' }} className="px-6 py-12 text-center">
        <h2 className="text-2xl font-bold mb-2" style={{ color: '#F5C842' }}>
          Ready to see the real Varanasi?
        </h2>
        <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>
          Book now for just ₹{config.tokenAmount} token — pay the rest only when you're happy
        </p>
        <Link href="/book"
          style={{ backgroundColor: 'var(--saffron)' }}
          className="text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition">
          Book for just ₹{config.tokenAmount}
        </Link>
      </section>

    </div>
  )
}


// import Link from 'next/link'

// export default function Home() {
//   return (
//     <div>

//       {/* Hero Section */}
//       <section className="relative px-6 py-24 text-center overflow-hidden"
//         style={{
//           backgroundImage: 'url(/hero.jpg)',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//         }}>

//         {/* Dark Overlay */}
//         <div className="absolute inset-0"
//           style={{ backgroundColor: 'rgba(20, 10, 5, 0.75)' }}
//         />

//         <div className="relative z-10 max-w-3xl mx-auto">
//           <span className="inline-block text-xs font-medium px-4 py-1 rounded-full mb-6 border"
//             style={{ backgroundColor: 'rgba(232,93,4,0.2)', color: '#F5C842', borderColor: 'rgba(245,200,66,0.3)' }}>
//             Varanasi's Trusted Local Guide
//           </span>

//           <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
//             Explore Varanasi <br />
//             <span style={{ color: '#F5C842' }}>Like a Local</span>
//           </h1>

//           <p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.7)' }}>
//             No tourist traps. No overcharging. Just an honest local friend who knows every ghat, every dish, and every shortcut in the city.
//           </p>

//           <div className="flex gap-4 justify-center flex-wrap">
//             <Link href="/book"
//               style={{ backgroundColor: 'var(--saffron)' }}
//               className="text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition">
//               Book a Tour
//             </Link>
//             <Link href="/services"
//               className="text-white px-8 py-3 rounded-lg font-medium border transition hover:bg-white/10"
//               style={{ borderColor: 'rgba(255,255,255,0.4)' }}>
//               See Services
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Divider */}
//       <div className="flex items-center justify-center gap-4 py-8">
//         <div className="h-px w-16" style={{ backgroundColor: 'var(--gold)', opacity: 0.3 }} />
//         <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--gold)' }} />
//         <div className="h-px w-16" style={{ backgroundColor: 'var(--gold)', opacity: 0.3 }} />
//       </div>

//       {/* Why Us Section */}
//       <section className="px-6 pb-16">
//         <div className="max-w-5xl mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-2" style={{ color: 'var(--text-dark)' }}>
//             Why Choose Us?
//           </h2>
//           <p className="text-center mb-10 text-sm" style={{ color: 'var(--text-mid)' }}>
//             We bridge the gap between tourists and the real Varanasi
//           </p>
//           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
//             {[
//               { icon: '🛺', title: 'Transport', desc: 'Rickshaw, auto, toto — we negotiate so you don\'t get overcharged' },
//               { icon: '🚤', title: 'Boat Rides', desc: 'Fair prices with boatmen, handled by us' },
//               { icon: '🍛', title: 'Local Food', desc: 'Kachori, lassi, malaiyo — the real spots only locals know' },
//               { icon: '🛍️', title: 'Shopping', desc: 'Banarasi sarees, handicrafts at authentic prices' },
//               { icon: '🏛️', title: 'City Tour', desc: 'Ghats, temples, hidden gems — every lane covered' },
//               { icon: '🏨', title: 'Hotel Booking', desc: 'Available in custom package — full trip planned for you' },
//             ].map((item, i) => (
//               <div key={i}
//                 className="bg-white rounded-xl p-5 text-center border"
//                 style={{ borderColor: 'rgba(200,120,40,0.2)' }}>
//                 <div className="text-3xl mb-3">{item.icon}</div>
//                 <div className="font-medium text-sm mb-1" style={{ color: 'var(--text-dark)' }}>{item.title}</div>
//                 <div className="text-xs" style={{ color: 'var(--text-mid)' }}>{item.desc}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Strip */}
//       <section style={{ backgroundColor: 'var(--text-dark)' }} className="px-6 py-12 text-center">
//         <h2 className="text-2xl font-bold mb-2" style={{ color: '#F5C842' }}>
//           Ready to see the real Varanasi?
//         </h2>
//         <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>
//           Book now for just ₹21 token — pay the rest only when you're happy
//         </p>
//         <Link href="/book"
//           style={{ backgroundColor: 'var(--saffron)' }}
//           className="text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition">
//           Book for just ₹21
//         </Link>
//       </section>

//     </div>
//   )
// }