import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { schoolInfo } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Contact SENK | St. Elizabeth Senior Secondary School',
  description: 'Get in touch with us. Contact information, location, and inquiry form.',
}

export default function ContactPage() {
  return (
    <main className="w-full">
      <Navbar />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-primary to-primary-dark text-primary-foreground pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Get in Touch
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Have questions? We&apos;d love to hear from you. Reach out anytime.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: Phone,
                title: 'Phone',
                content: schoolInfo.phone,
                link: `tel:${schoolInfo.phone}`,
              },
              {
                icon: Mail,
                title: 'Email',
                content: schoolInfo.email,
                link: `mailto:${schoolInfo.email}`,
              },
              {
                icon: MapPin,
                title: 'Location',
                content: schoolInfo.location,
                link: '#map',
              },
              {
                icon: Clock,
                title: 'Working Hours',
                content: 'Mon-Fri: 8:00 AM - 5:00 PM',
                link: '#',
              },
            ].map((contact, index) => {
              const Icon = contact.icon
              return (
                <a
                  key={index}
                  href={contact.link}
                  className="card-premium text-center group hover:border-gold"
                >
                  <Icon className="w-12 h-12 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {contact.title}
                  </h3>
                  <p className="text-secondary text-sm">{contact.content}</p>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Send us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone (Optional)</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="+256..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-bold hover:bg-primary-dark transition-all transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Map Placeholder */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Location</h2>
            <div id="map" className="w-full h-[450px] rounded-lg overflow-hidden border border-border bg-muted flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-secondary mx-auto mb-2 opacity-50" />
                <p className="text-secondary">Google Maps integration placeholder</p>
                <p className="text-sm text-secondary/70 mt-2">{schoolInfo.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Contact Methods */}
      <section className="section-padding bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Quick Contact Methods</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                method: 'Call Us',
                description: 'Direct line to our admissions office',
                action: `Call: ${schoolInfo.phone}`,
                color: 'from-blue-500 to-blue-600',
              },
              {
                method: 'Email Us',
                description: 'Detailed inquiries with response within 24 hours',
                action: `Email: ${schoolInfo.email}`,
                color: 'from-purple-500 to-purple-600',
              },
              {
                method: 'WhatsApp',
                description: 'Quick messaging and real-time responses',
                action: 'Chat: +256 (0) 784 XXXXXX',
                color: 'from-green-500 to-green-600',
              },
            ].map((contact, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${contact.color} text-white rounded-xl p-6 card-premium text-center`}
              >
                <h3 className="text-xl font-bold mb-2">{contact.method}</h3>
                <p className="text-white/80 text-sm mb-4">{contact.description}</p>
                <p className="font-medium">{contact.action}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
