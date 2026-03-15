import Link from 'next/link'
import config from '../config'

export default function Services() {
  return (
    <div>

      {/* Header */}
      <section style={{ backgroundColor: 'var(--text-dark)' }} className="px-6 py-16 text-center">
        <h1 className="text-4xl font-bold mb-3" style={{ color: '#F5C842' }}>Our Services</h1>
        <p style={{ color: 'rgba(255,255,255,0.7)' }} className="text-sm">Simple, honest and affordable</p>
      </section>

      {/* Pricing */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2" style={{ color: 'var(--text-dark)' }}>Pricing</h2>
          <p className="text-center text-sm mb-10" style={{ color: 'var(--text-mid)' }}>Choose what works for you</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            {config.pricing.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 text-center"
                style={{ border: item.popular ? '2px solid var(--saffron)' : '1px solid rgba(200,120,40,0.2)', position: 'relative' }}>
                {item.popular && (
                  <div className="text-xs font-medium px-3 py-1 rounded-full"
                    style={{ backgroundColor: 'var(--saffron)', color: 'white', position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap' }}>
                    Popular
                  </div>
                )}
                <div className="text-sm mb-2" style={{ color: 'var(--text-mid)' }}>{item.label}</div>
                <div className="text-3xl font-bold mb-1" style={{ color: 'var(--saffron)', fontFamily: 'Playfair Display, serif' }}>₹{item.price}</div>
                <div className="text-xs mb-3" style={{ color: 'var(--text-mid)' }}>{item.people}</div>
                <div className="text-xs px-3 py-1 rounded-full inline-block" style={{ backgroundColor: '#FDF0E0', color: 'var(--gold)' }}>{item.transport}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex items-center justify-center gap-4 py-4">
        <div className="h-px w-16" style={{ backgroundColor: 'var(--gold)', opacity: 0.3 }} />
        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--gold)' }} />
        <div className="h-px w-16" style={{ backgroundColor: 'var(--gold)', opacity: 0.3 }} />
      </div>

      {/* Payment Flow */}
      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2" style={{ color: 'var(--text-dark)' }}>How Payment Works</h2>
          <p className="text-center text-sm mb-10" style={{ color: 'var(--text-mid)' }}>We earn your trust, we don't ask for it</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            {[
              { step: `₹${config.tokenAmount}`, title: 'Token Booking', desc: `Pay just ₹${config.tokenAmount} to confirm your slot via UPI/GPay` },
              { step: '50%', title: 'Midway', desc: 'Pay half the remaining amount midway through the tour' },
              { step: '50%', title: 'End of Tour', desc: 'Final payment only after you are fully satisfied' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold"
                  style={{ backgroundColor: 'var(--text-dark)', color: '#F5C842', fontFamily: 'Playfair Display, serif' }}>
                  {item.step}
                </div>
                <div className="font-medium text-sm mb-1" style={{ color: 'var(--text-dark)' }}>{item.title}</div>
                <div className="text-xs" style={{ color: 'var(--text-mid)' }}>{item.desc}</div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs mt-8" style={{ color: 'var(--text-mid)' }}>
            * Food, entry tickets and transport fares are paid directly by you. Our fee is for guiding only.
          </p>
        </div>
      </section>

      {/* Package Types */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2" style={{ color: 'var(--text-dark)' }}>Package Types</h2>
          <p className="text-center text-sm mb-10" style={{ color: 'var(--text-mid)' }}>Pick what suits your trip</p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="bg-white rounded-xl p-6 border" style={{ borderColor: 'rgba(200,120,40,0.2)' }}>
              <div className="text-2xl mb-3">🎒</div>
              <div className="font-medium mb-2" style={{ color: 'var(--text-dark)' }}>Standard</div>
              <ul className="text-xs space-y-2" style={{ color: 'var(--text-mid)' }}>
                <li>✅ Local guide throughout</li>
                <li>✅ Transport negotiation</li>
                <li>✅ Food & shopping spots</li>
                <li>✅ Boat ride negotiation</li>
                <li>❌ Hotel booking</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 border" style={{ borderColor: 'var(--saffron)', borderWidth: '2px' }}>
              <div className="text-2xl mb-3">⭐</div>
              <div className="font-medium mb-2" style={{ color: 'var(--text-dark)' }}>Custom Package</div>
              <ul className="text-xs space-y-2" style={{ color: 'var(--text-mid)' }}>
                <li>✅ Everything in Standard</li>
                <li>✅ Hotel booking assistance</li>
                <li>✅ Full trip planning</li>
                <li>✅ Custom itinerary</li>
                <li>✅ Priced on request</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: 'var(--text-dark)' }} className="px-6 py-12 text-center">
        <h2 className="text-2xl font-bold mb-2" style={{ color: '#F5C842' }}>Ready to book?</h2>
        <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>Start with just ₹{config.tokenAmount} token amount</p>
        <Link href="/book" style={{ backgroundColor: 'var(--saffron)' }}
          className="text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition">
          Book Now
        </Link>
      </section>

    </div>
  )
}



// import Link from 'next/link'

// export default function Services() {
//   return (
//     <div>

//       {/* Header */}
//       <section style={{ backgroundColor: 'var(--text-dark)' }} className="px-6 py-16 text-center">
//         <h1 className="text-4xl font-bold mb-3" style={{ color: '#F5C842' }}>Our Services</h1>
//         <p style={{ color: 'rgba(255,255,255,0.7)' }} className="text-sm">Simple, honest and affordable</p>
//       </section>

//       {/* Pricing */}
//       <section className="px-6 py-16">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-2" style={{ color: 'var(--text-dark)' }}>Pricing</h2>
//           <p className="text-center text-sm mb-10" style={{ color: 'var(--text-mid)' }}>Choose what works for you</p>

//           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
//             {[
//               { label: 'Solo Explorer', price: '251', people: '1 person', transport: 'Public Transport', popular: false },
//               { label: 'Solo + Bike', price: '1,001', people: '1 person with bike', transport: 'Personal Bike', popular: true },
//               { label: 'Couple / Small Group', price: '501', people: '2–3 people', transport: 'Public Transport', popular: false },
//               { label: 'Family', price: '1,100', people: '4–5 people', transport: 'Public Transport', popular: false },
//               { label: 'Group', price: '1,501', people: '6–10 people', transport: 'Public Transport', popular: false },
//               { label: 'Large Group', price: '2,100', people: '10+ people', transport: 'Public Transport', popular: false },
//             ].map((item, i) => (
//               <div key={i} className="bg-white rounded-xl p-6 text-center"
//                 style={{ border: item.popular ? '2px solid var(--saffron)' : '1px solid rgba(200,120,40,0.2)', position: 'relative' }}>
//                 {item.popular && (
//                   <div className="text-xs font-medium px-3 py-1 rounded-full"
//                     style={{ backgroundColor: 'var(--saffron)', color: 'white', position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap' }}>
//                     Popular
//                   </div>
//                 )}
//                 <div className="text-sm mb-2" style={{ color: 'var(--text-mid)' }}>{item.label}</div>
//                 <div className="text-3xl font-bold mb-1" style={{ color: 'var(--saffron)', fontFamily: 'Playfair Display, serif' }}>₹{item.price}</div>
//                 <div className="text-xs mb-3" style={{ color: 'var(--text-mid)' }}>{item.people}</div>
//                 <div className="text-xs px-3 py-1 rounded-full inline-block" style={{ backgroundColor: '#FDF0E0', color: 'var(--gold)' }}>{item.transport}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Divider */}
//       <div className="flex items-center justify-center gap-4 py-4">
//         <div className="h-px w-16" style={{ backgroundColor: 'var(--gold)', opacity: 0.3 }} />
//         <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--gold)' }} />
//         <div className="h-px w-16" style={{ backgroundColor: 'var(--gold)', opacity: 0.3 }} />
//       </div>

//       {/* Payment Flow */}
//       <section className="px-6 py-16">
//         <div className="max-w-3xl mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-2" style={{ color: 'var(--text-dark)' }}>How Payment Works</h2>
//           <p className="text-center text-sm mb-10" style={{ color: 'var(--text-mid)' }}>We earn your trust, we don't ask for it</p>

//           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
//             {[
//               { step: '₹21', title: 'Token Booking', desc: 'Pay just ₹21 to confirm your slot via UPI/GPay' },
//               { step: '50%', title: 'Midway', desc: 'Pay half the remaining amount midway through the tour' },
//               { step: '50%', title: 'End of Tour', desc: 'Final payment only after you are fully satisfied' },
//             ].map((item, i) => (
//               <div key={i} className="text-center">
//                 <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold"
//                   style={{ backgroundColor: 'var(--text-dark)', color: '#F5C842', fontFamily: 'Playfair Display, serif' }}>
//                   {item.step}
//                 </div>
//                 <div className="font-medium text-sm mb-1" style={{ color: 'var(--text-dark)' }}>{item.title}</div>
//                 <div className="text-xs" style={{ color: 'var(--text-mid)' }}>{item.desc}</div>
//               </div>
//             ))}
//           </div>

//           <p className="text-center text-xs mt-8" style={{ color: 'var(--text-mid)' }}>
//             * Food, entry tickets and transport fares are paid directly by you. Our fee is for guiding only.
//           </p>
//         </div>
//       </section>

//       {/* Package Types */}
//       <section className="px-6 pb-16">
//         <div className="max-w-3xl mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-2" style={{ color: 'var(--text-dark)' }}>Package Types</h2>
//           <p className="text-center text-sm mb-10" style={{ color: 'var(--text-mid)' }}>Pick what suits your trip</p>

//           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
//             <div className="bg-white rounded-xl p-6 border" style={{ borderColor: 'rgba(200,120,40,0.2)' }}>
//               <div className="text-2xl mb-3">🎒</div>
//               <div className="font-medium mb-2" style={{ color: 'var(--text-dark)' }}>Standard</div>
//               <ul className="text-xs space-y-2" style={{ color: 'var(--text-mid)' }}>
//                 <li>✅ Local guide throughout</li>
//                 <li>✅ Transport negotiation</li>
//                 <li>✅ Food & shopping spots</li>
//                 <li>✅ Boat ride negotiation</li>
//                 <li>❌ Hotel booking</li>
//               </ul>
//             </div>
//             <div className="bg-white rounded-xl p-6 border" style={{ borderColor: 'var(--saffron)', borderWidth: '2px' }}>
//               <div className="text-2xl mb-3">⭐</div>
//               <div className="font-medium mb-2" style={{ color: 'var(--text-dark)' }}>Custom Package</div>
//               <ul className="text-xs space-y-2" style={{ color: 'var(--text-mid)' }}>
//                 <li>✅ Everything in Standard</li>
//                 <li>✅ Hotel booking assistance</li>
//                 <li>✅ Full trip planning</li>
//                 <li>✅ Custom itinerary</li>
//                 <li>✅ Priced on request</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section style={{ backgroundColor: 'var(--text-dark)' }} className="px-6 py-12 text-center">
//         <h2 className="text-2xl font-bold mb-2" style={{ color: '#F5C842' }}>Ready to book?</h2>
//         <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>Start with just ₹21 token amount</p>
//         <Link href="/book" style={{ backgroundColor: 'var(--saffron)' }}
//           className="text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition">
//           Book Now
//         </Link>
//       </section>

//     </div>
//   )
// }