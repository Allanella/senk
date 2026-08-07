import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  User,
  Tag,
  MessageSquare,
  Send,
  Navigation,
  MessageCircle,
  Building2,
  Headphones,
} from 'lucide-react'
import { schoolInfo } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Contact SENK | St. Elizabeth Senior Secondary School',
  description: 'Get in touch with us. Contact information, location, and inquiry form.',
}

const contactCards = [
  {
    icon: Headphones,
    title: 'General Inquiries',
    content: '+256 752 838370',
    link: 'tel:+256752838370',
  },
  {
    icon: Building2,
    title: 'Administration Direct',
    content: '+256 772 481321',
    link: 'tel:+256772481321',
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
]

const quickContacts = [
  {
    method: 'General Inquiries',
    description: 'Direct line for all general questions & support',
    action: 'Call: +256 752 838370',
    href: 'tel:+256752838370',
    icon: Headphones,
  },
  {
    method: 'Administration Direct',
    description: 'Direct line to school administration',
    action: 'Call: +256 772 481321',
    href: 'tel:+256772481321',
    icon: Building2,
  },
  {
    method: 'Email Us',
    description: 'Detailed inquiries with response within 24 hours',
    action: `Email: ${schoolInfo.email}`,
    href: `mailto:${schoolInfo.email}`,
    icon: Mail,
  },
  {
    method: 'WhatsApp',
    description: 'Quick messaging and real-time responses',
    action: 'Chat: +256 (0) 701 939452',
    href: 'https://wa.me/256701939452',
    icon: MessageCircle,
  },
]

const formFields = [
  { label: 'Full Name', type: 'text', placeholder: 'Your name', icon: User },
  { label: 'Email', type: 'email', placeholder: 'your@email.com', icon: Mail },
  { label: 'Phone (Optional)', type: 'tel', placeholder: '+256...', icon: Phone },
  { label: 'Subject', type: 'text', placeholder: 'Subject', icon: Tag },
]

const mapQuery = encodeURIComponent(schoolInfo.location)
const mapEmbedSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`
const mapDirectionsHref = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`

export default function ContactPage() {
  return (
    <main className="w-full">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden section-padding bg-gradient-to-b from-primary to-primary-dark text-primary-foreground pt-32 pb-24">
        {/* Radar ping — signature element for a "reach us" page */}
        <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="absolute w-40 h-40 rounded-full border border-gold/25 animate-ping [animation-duration:3s]" />
          <span className="absolute w-64 h-64 rounded-full border border-gold/15" />
          <span className="absolute w-96 h-96 rounded-full border border-gold/10" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/20 text-gold mb-6 animate-fade-in-down">
            <MapPin className="w-7 h-7" />
          </div>
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
            {contactCards.map((contact, index) => {
              const Icon = contact.icon
              return (
                <a
                  key={index}
                  href={contact.link}
                  className="relative card-premium text-center group hover:border-gold hover:-translate-y-1 transition-all duration-300 overflow-hidden animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold/40 via-gold to-gold/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-gold group-hover:text-primary-foreground text-primary transition-colors duration-300">
                    <Icon className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
                  </div>
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
          <div className="card-premium p-8">
            <h2 className="text-3xl font-bold text-foreground mb-6">Send us a Message</h2>
            <form className="space-y-4">
              {formFields.map((field) => {
                const Icon = field.icon
                return (
                  <div key={field.label}>
                    <label className="block text-sm font-medium text-foreground mb-2">{field.label}</label>
                    <div className="relative">
                      <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary/70" />
                      <input
                        type={field.type}
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder-secondary focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-colors"
                        placeholder={field.placeholder}
                      />
                    </div>
                  </div>
                )
              })}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-secondary/70" />
                  <textarea
                    rows={5}
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder-secondary focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-colors"
                    placeholder="Your message..."
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-bold hover:bg-primary-dark transition-all transform hover:scale-[1.02]"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Map */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Location</h2>
            <div
              id="map"
              className="w-full h-[400px] rounded-lg overflow-hidden border border-border shadow-md"
            >
              <iframe
                title="SENK Location Map"
                src={mapEmbedSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mt-4 flex items-center justify-between gap-4 card-premium py-3 px-4">
              <div className="flex items-center gap-2 text-secondary text-sm min-w-0">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="truncate">{schoolInfo.location}</span>
              </div>
              <a
                href={mapDirectionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-gold transition-colors flex-shrink-0"
              >
                Get Directions
                <Navigation className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Contact Methods */}
      <section className="section-padding bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Quick Contact Methods</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickContacts.map((contact, index) => {
              const Icon = contact.icon
              return (
                <a
                  key={index}
                  href={contact.href}
                  className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-dark text-primary-foreground rounded-xl p-6 card-premium text-center group hover:-translate-y-1.5 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-full bg-gold/20 text-gold flex items-center justify-center mx-auto mb-4 group-hover:bg-gold group-hover:text-primary-foreground transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{contact.method}</h3>
                  <p className="text-primary-foreground/75 text-sm mb-4">{contact.description}</p>
                  <p className="font-medium text-gold text-sm">{contact.action}</p>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}