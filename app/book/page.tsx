'use client'

import { useState } from 'react'
import config from '../config'

export default function Book() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const form = e.target as HTMLFormElement
    const name = (form[0] as HTMLInputElement).value
    const phone = (form[1] as HTMLInputElement).value
    const date = (form[2] as HTMLInputElement).value
    const group = (form[3] as HTMLSelectElement).value
    const packageType = (form[4] as HTMLSelectElement).value
    const message = (form[5] as HTMLTextAreaElement).value

    const whatsappMessage = `Hello! I want to book a tour with ${config.businessName} 🙏

*Name:* ${name}
*WhatsApp:* ${phone}
*Visit Date:* ${date}
*Group Size:* ${group}
*Package:* ${packageType}
*Special Requests:* ${message || 'None'}`

    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappURL = `https://wa.me/${config.whatsapp}?text=${encodedMessage}`

    window.open(whatsappURL, '_blank')
    setSubmitted(true)
  }

  return (
    <div>

      {/* Header */}
      <section style={{ backgroundColor: 'var(--text-dark)' }} className="px-6 py-16 text-center">
        <h1 className="text-4xl font-bold mb-3" style={{ color: '#F5C842' }}>Book Your Experience</h1>
        <p style={{ color: 'rgba(255,255,255,0.7)' }} className="text-sm">Fill in your details and we'll confirm within a few hours</p>
      </section>

      {/* Form */}
      <section className="px-6 py-16">
        <div className="max-w-xl mx-auto">

          {submitted ? (
            <div className="bg-white rounded-xl p-10 text-center border" style={{ borderColor: 'rgba(200,120,40,0.2)' }}>
              <div className="text-5xl mb-4">🎉</div>
              <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-dark)' }}>Booking Received!</h2>
              <p className="text-sm mb-4" style={{ color: 'var(--text-mid)' }}>
                WhatsApp has opened — just hit send! We will get back to you shortly with UPI payment details for the ₹{config.tokenAmount} token.
              </p>
              <p className="text-xs mb-6 px-4 py-3 rounded-lg" style={{ backgroundColor: '#FDF0E0', color: 'var(--gold)' }}>
                Don't use WhatsApp? Call or Email us —
                <a href={`tel:${config.whatsapp}`} style={{ color: 'var(--saffron)', fontWeight: '500' }}> {config.whatsappDisplay}</a> ·
                <a href={`mailto:${config.email}`} style={{ color: 'var(--saffron)', fontWeight: '500' }}> {config.email}</a>
              </p>
              <button
                onClick={() => setSubmitted(false)}
                style={{ backgroundColor: 'var(--saffron)' }}
                className="text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition">
                Book Another
              </button>
            </div>
          ) : (
            <div className="bg-white rounded-xl p-8 border" style={{ borderColor: 'rgba(200,120,40,0.2)' }}>

              <div className="text-sm font-medium px-4 py-3 rounded-lg mb-6"
                style={{ backgroundColor: '#FDF0E0', color: 'var(--gold)' }}>
                Only ₹{config.tokenAmount} token required to confirm — pay via UPI/GPay
              </div>

              <form onSubmit={handleSubmit}>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label className="block text-xs font-medium mb-1" style={{ color: 'var(--text-mid)' }}>Your Name</label>
                    <input required type="text" placeholder="e.g. Ravi Kumar"
                      className="w-full px-3 py-2 rounded-lg text-sm outline-none"
                      style={{ border: '1px solid rgba(200,120,40,0.3)', backgroundColor: 'var(--cream)', color: 'var(--text-dark)' }} />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1" style={{ color: 'var(--text-mid)' }}>WhatsApp Number</label>
                    <input required type="tel" placeholder="+91 98765 43210"
                      className="w-full px-3 py-2 rounded-lg text-sm outline-none"
                      style={{ border: '1px solid rgba(200,120,40,0.3)', backgroundColor: 'var(--cream)', color: 'var(--text-dark)' }} />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label className="block text-xs font-medium mb-1" style={{ color: 'var(--text-mid)' }}>Visit Date</label>
                    <input required type="date"
                      className="w-full px-3 py-2 rounded-lg text-sm outline-none"
                      style={{ border: '1px solid rgba(200,120,40,0.3)', backgroundColor: 'var(--cream)', color: 'var(--text-dark)' }} />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1" style={{ color: 'var(--text-mid)' }}>Group Size</label>
                    <select required className="w-full px-3 py-2 rounded-lg text-sm outline-none"
                      style={{ border: '1px solid rgba(200,120,40,0.3)', backgroundColor: 'var(--cream)', color: 'var(--text-dark)' }}>
                      <option value="">Select...</option>
                      {config.pricing.map((item, i) => (
                        <option key={i}>{item.people} — {item.label} (₹{item.price})</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label className="block text-xs font-medium mb-1" style={{ color: 'var(--text-mid)' }}>Package Type</label>
                  <select required className="w-full px-3 py-2 rounded-lg text-sm outline-none"
                    style={{ border: '1px solid rgba(200,120,40,0.3)', backgroundColor: 'var(--cream)', color: 'var(--text-dark)' }}>
                    <option value="">Select...</option>
                    <option>Standard (I'll manage my own hotel)</option>
                    <option>Custom Package (Help me with hotel too)</option>
                  </select>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label className="block text-xs font-medium mb-1" style={{ color: 'var(--text-mid)' }}>Any special requests?</label>
                  <textarea rows={3} placeholder="e.g. morning aarti, specific temples, dietary preferences..."
                    className="w-full px-3 py-2 rounded-lg text-sm outline-none"
                    style={{ border: '1px solid rgba(200,120,40,0.3)', backgroundColor: 'var(--cream)', color: 'var(--text-dark)', resize: 'none' }} />
                </div>

                <button type="submit" style={{ backgroundColor: 'var(--saffron)', width: '100%' }}
                  className="text-white py-3 rounded-lg font-medium hover:opacity-90 transition text-sm">
                  Confirm Booking (Pay ₹{config.tokenAmount} Token)
                </button>

              </form>
            </div>
          )}
        </div>
      </section>

    </div>
  )
}


// 'use client'

// import { useState } from 'react'

// export default function Book() {
//   const [submitted, setSubmitted] = useState(false)

//   function handleSubmit(e: React.FormEvent) {
//     e.preventDefault()

//     const form = e.target as HTMLFormElement
//     const name = (form[0] as HTMLInputElement).value
//     const phone = (form[1] as HTMLInputElement).value
//     const date = (form[2] as HTMLInputElement).value
//     const group = (form[3] as HTMLSelectElement).value
//     const packageType = (form[4] as HTMLSelectElement).value
//     const message = (form[5] as HTMLTextAreaElement).value

//     const whatsappMessage = `Hello! I want to book a tour with The Organizer 🙏

// *Name:* ${name}
// *WhatsApp:* ${phone}
// *Visit Date:* ${date}
// *Group Size:* ${group}
// *Package:* ${packageType}
// *Special Requests:* ${message || 'None'}`

//     const encodedMessage = encodeURIComponent(whatsappMessage)
//     const whatsappNumber = '918127452463'
//     const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

//     window.open(whatsappURL, '_blank')
//     setSubmitted(true)
//   }

//   return (
//     <div>

//       {/* Header */}
//       <section style={{ backgroundColor: 'var(--text-dark)' }} className="px-6 py-16 text-center">
//         <h1 className="text-4xl font-bold mb-3" style={{ color: '#F5C842' }}>Book Your Experience</h1>
//         <p style={{ color: 'rgba(255,255,255,0.7)' }} className="text-sm">Fill in your details and we'll confirm within a few hours</p>
//       </section>

//       {/* Form */}
//       <section className="px-6 py-16">
//         <div className="max-w-xl mx-auto">

//           {submitted ? (
//             <div className="bg-white rounded-xl p-10 text-center border" style={{ borderColor: 'rgba(200,120,40,0.2)' }}>
//               <div className="text-5xl mb-4">🎉</div>
//               <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-dark)' }}>Booking Received!</h2>
//               <p className="text-sm mb-4" style={{ color: 'var(--text-mid)' }}>
//                 WhatsApp has opened — just hit send! We will get back to you shortly with UPI payment details for the ₹21 token.
//               </p>
//               <p className="text-xs mb-6 px-4 py-3 rounded-lg" style={{ backgroundColor: '#FDF0E0', color: 'var(--gold)' }}>
//                 Don't use WhatsApp? Call or Email us —
//                 <a href="tel:+918127452436" style={{ color: 'var(--saffron)', fontWeight: '500' }}> +91 8127452463</a> · 
//                 <a href="mailto:hello@theorganizer.in" style={{ color: 'var(--saffron)', fontWeight: '500' }}> hello@theorganizer.in</a>
//               </p>
//               <button
//                 onClick={() => setSubmitted(false)}
//                 style={{ backgroundColor: 'var(--saffron)' }}
//                 className="text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition">
//                 Book Another
//               </button>
//             </div>
//           ) : (
//             <div className="bg-white rounded-xl p-8 border" style={{ borderColor: 'rgba(200,120,40,0.2)' }}>

//               <div className="text-sm font-medium px-4 py-3 rounded-lg mb-6"
//                 style={{ backgroundColor: '#FDF0E0', color: 'var(--gold)' }}>
//                 Only ₹21 token required to confirm — pay via UPI/GPay
//               </div>

//               <form onSubmit={handleSubmit}>

//                 <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
//                   <div>
//                     <label className="block text-xs font-medium mb-1" style={{ color: 'var(--text-mid)' }}>Your Name</label>
//                     <input required type="text" placeholder="e.g. Ravi Kumar"
//                       className="w-full px-3 py-2 rounded-lg text-sm outline-none"
//                       style={{ border: '1px solid rgba(200,120,40,0.3)', backgroundColor: 'var(--cream)', color: 'var(--text-dark)' }} />
//                   </div>
//                   <div>
//                     <label className="block text-xs font-medium mb-1" style={{ color: 'var(--text-mid)' }}>WhatsApp Number</label>
//                     <input required type="tel" placeholder="+91 xxxxxxxxxx"
//                       className="w-full px-3 py-2 rounded-lg text-sm outline-none"
//                       style={{ border: '1px solid rgba(200,120,40,0.3)', backgroundColor: 'var(--cream)', color: 'var(--text-dark)' }} />
//                   </div>
//                 </div>

//                 <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
//                   <div>
//                     <label className="block text-xs font-medium mb-1" style={{ color: 'var(--text-mid)' }}>Visit Date</label>
//                     <input required type="date"
//                       className="w-full px-3 py-2 rounded-lg text-sm outline-none"
//                       style={{ border: '1px solid rgba(200,120,40,0.3)', backgroundColor: 'var(--cream)', color: 'var(--text-dark)' }} />
//                   </div>
//                   <div>
//                     <label className="block text-xs font-medium mb-1" style={{ color: 'var(--text-mid)' }}>Group Size</label>
//                     <select required className="w-full px-3 py-2 rounded-lg text-sm outline-none"
//                       style={{ border: '1px solid rgba(200,120,40,0.3)', backgroundColor: 'var(--cream)', color: 'var(--text-dark)' }}>
//                       <option value="">Select...</option>
//                       <option value="">Select...</option>
//                       <option>1 person — Standard (₹251)</option>
//                       <option>1 person — With Bike (₹1,001)</option>
//                       <option>2–3 people (₹501)</option>
//                       <option>4–5 people (₹1,100)</option>
//                       <option>6–10 people (₹1,501)</option>
//                       <option>10+ people (₹2,100)</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div style={{ marginBottom: '1rem' }}>
//                   <label className="block text-xs font-medium mb-1" style={{ color: 'var(--text-mid)' }}>Package Type</label>
//                   <select required className="w-full px-3 py-2 rounded-lg text-sm outline-none"
//                     style={{ border: '1px solid rgba(200,120,40,0.3)', backgroundColor: 'var(--cream)', color: 'var(--text-dark)' }}>
//                     <option value="">Select...</option>
//                     <option>Standard (I'll manage my own hotel)</option>
//                     <option>Custom Package (Help me with hotel too)</option>
//                   </select>
//                 </div>

//                 <div style={{ marginBottom: '1.5rem' }}>
//                   <label className="block text-xs font-medium mb-1" style={{ color: 'var(--text-mid)' }}>Any special requests?</label>
//                   <textarea rows={3} placeholder="e.g. morning aarti, specific temples, dietary preferences..."
//                     className="w-full px-3 py-2 rounded-lg text-sm outline-none"
//                     style={{ border: '1px solid rgba(200,120,40,0.3)', backgroundColor: 'var(--cream)', color: 'var(--text-dark)', resize: 'none' }} />
//                 </div>

//                 <button type="submit" style={{ backgroundColor: 'var(--saffron)', width: '100%' }}
//                   className="text-white py-3 rounded-lg font-medium hover:opacity-90 transition text-sm">
//                   Confirm Booking (Pay ₹21 Token)
//                 </button>

//               </form>
//             </div>
//           )}
//         </div>
//       </section>

//     </div>
//   )
// }