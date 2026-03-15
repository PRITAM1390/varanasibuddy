import config from '../config'

export default function Contact() {
  return (
    <div>

      {/* Header */}
      <section style={{ backgroundColor: 'var(--text-dark)' }} className="px-6 py-16 text-center">
        <h1 className="text-4xl font-bold mb-3" style={{ color: '#F5C842' }}>Get In Touch</h1>
        <p style={{ color: 'rgba(255,255,255,0.7)' }} className="text-sm">We usually respond within 2 hours</p>
      </section>

      {/* Contact Cards */}
      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto">

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '3rem' }}>
            {[
              { icon: '💬', platform: 'WhatsApp', handle: config.whatsappDisplay, desc: 'Fastest response — message us directly', href: `https://wa.me/${config.whatsapp}` },
              { icon: '📸', platform: 'Instagram', handle: config.instagram, desc: 'Follow us for Varanasi content', href: config.instagramUrl },
              { icon: '📧', platform: 'Email', handle: config.email, desc: 'For formal bookings and queries', href: `mailto:${config.email}` },
            ].map((item, i) => (
              <a key={i} href={item.href} target="_blank" rel="noopener noreferrer"
                className="bg-white rounded-xl p-6 text-center border block hover:shadow-md transition"
                style={{ borderColor: 'rgba(200,120,40,0.2)', textDecoration: 'none' }}>
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{item.icon}</div>
                <div className="font-medium text-sm mb-1" style={{ color: 'var(--text-dark)' }}>{item.platform}</div>
                <div className="text-xs mb-2" style={{ color: 'var(--saffron)' }}>{item.handle}</div>
                <div className="text-xs" style={{ color: 'var(--text-mid)' }}>{item.desc}</div>
              </a>
            ))}
          </div>

          {/* CTA Box */}
          <div className="rounded-xl p-10 text-center" style={{ backgroundColor: 'var(--text-dark)' }}>
            <h2 className="text-2xl font-bold mb-2" style={{ color: '#F5C842' }}>
              Ready to see the real Varanasi?
            </h2>
            <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Book now and experience the city through the eyes of a local
            </p>
            <a href="/book"
              style={{ backgroundColor: 'var(--saffron)', display: 'inline-block', padding: '12px 32px', borderRadius: '8px', color: 'white', fontWeight: '500', fontSize: '14px', textDecoration: 'none' }}>
              Book for just ₹{config.tokenAmount}
            </a>
          </div>

        </div>
      </section>

    </div>
  )
}


// export default function Contact() {
//   return (
//     <div>

//       {/* Header */}
//       <section style={{ backgroundColor: 'var(--text-dark)' }} className="px-6 py-16 text-center">
//         <h1 className="text-4xl font-bold mb-3" style={{ color: '#F5C842' }}>Get In Touch</h1>
//         <p style={{ color: 'rgba(255,255,255,0.7)' }} className="text-sm">We usually respond within 2 hours</p>
//       </section>

//       {/* Contact Cards */}
//       <section className="px-6 py-16">
//         <div className="max-w-3xl mx-auto">

//           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '3rem' }}>
//             {[
//               { icon: '💬', platform: 'WhatsApp', handle: '+91 8127452463', desc: 'Fastest response — message us directly' },
//               { icon: '📸', platform: 'Instagram', handle: '@theorganizer.varanasi', desc: 'Follow us for Varanasi content' },
//               { icon: '📧', platform: 'Email', handle: 'kingcofcrew@gmail.com', desc: 'For formal bookings and queries' },
//             ].map((item, i) => (
//               <div key={i} className="bg-white rounded-xl p-6 text-center border"
//                 style={{ borderColor: 'rgba(200,120,40,0.2)' }}>
//                 <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{item.icon}</div>
//                 <div className="font-medium text-sm mb-1" style={{ color: 'var(--text-dark)' }}>{item.platform}</div>
//                 <div className="text-xs mb-2" style={{ color: 'var(--saffron)' }}>{item.handle}</div>
//                 <div className="text-xs" style={{ color: 'var(--text-mid)' }}>{item.desc}</div>
//               </div>
//             ))}
//           </div>

//           {/* CTA Box */}
//           <div className="rounded-xl p-10 text-center" style={{ backgroundColor: 'var(--text-dark)' }}>
//             <h2 className="text-2xl font-bold mb-2" style={{ color: '#F5C842' }}>
//               Ready to see the real Varanasi?
//             </h2>
//             <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>
//               Book now and experience the city through the eyes of a local
//             </p>
//             <a href="/book"
//               style={{ backgroundColor: 'var(--saffron)', display: 'inline-block', padding: '12px 32px', borderRadius: '8px', color: 'white', fontWeight: '500', fontSize: '14px', textDecoration: 'none' }}>
//               Book for just ₹21
//             </a>
//           </div>

//         </div>
//       </section>

//     </div>
//   )
// }