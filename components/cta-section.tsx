'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Phone, Mail, MessageSquare, Send, Download, HelpCircle } from 'lucide-react'

const secondaryCards = [
  {
    title: 'Ready to Apply?',
    description: 'Start your application process today and join our vibrant academic community.',
    link: '/admissions',
    linkText: 'Begin Application',
    icon: Send,
  },
  {
    title: 'Need More Information?',
    description: 'Download our prospectus, view our FAQ, or schedule a campus tour.',
    link: '/downloads',
    linkText: 'Get Resources',
    icon: Download,
  },
  {
    title: 'Still Have Questions?',
    description: 'Our admissions team is here to help. Reach out anytime with your inquiries.',
    link: '/contact',
    linkText: 'Get in Touch',
    icon: HelpCircle,
  },
]

export function CTASection() {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary" />

          {/* Ambient glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-16 w-80 h-80 rounded-full bg-gold/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-16 w-80 h-80 rounded-full bg-white/10 blur-3xl"
          />

          {/* Content */}
          <div className="relative z-10 p-8 md:p-16 text-center text-white">
            {/* School Crest / Badge */}
            <div className="relative w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-gold/40 shadow-xl bg-white flex items-center justify-center">
              <Image
                src="/badge.JPG"
                alt="SENK School Badge"
                fill
                sizes="80px"
                className="object-contain p-1"
              />
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
              Join the SENK Family Today
            </h2>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
              Begin your journey toward academic excellence, spiritual growth, and character development. Become part of a community that transforms lives.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link
                href="/admissions"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gold text-primary font-bold hover:bg-gold-light transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-lg"
              >
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-white text-white font-bold hover:bg-white hover:text-primary transition-all duration-300"
              >
                Contact Admissions
                <Phone className="w-5 h-5" />
              </Link>
            </div>

            {/* Divider */}
            <div className="w-16 h-px bg-white/25 mx-auto mb-10" />

            {/* Contact Quick Links */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-white/90">
              <a
                href="tel:256700966715"
                className="flex items-center gap-2 hover:text-gold transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <span>Call Us (0700966715)</span>
              </a>
              <a
                href="mailto:info@senk.edu.ug"
                className="flex items-center gap-2 hover:text-gold transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <span>Email Us</span>
              </a>
              <a
                href="https://wa.me/256700966715?text=Hello%20SENK%20Admissions,%20I%20would%20like%20to%20make%20an%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gold transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>

        {/* Secondary CTA - Info Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {secondaryCards.map((card, index) => {
            const Icon = card.icon
            return (
              <div
                key={index}
                className="relative card-premium text-center overflow-hidden group hover:-translate-y-1 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold/40 via-gold to-gold/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                <div className="mx-auto mb-3 w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-primary-foreground transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{card.title}</h3>
                <p className="text-secondary text-sm mb-4">{card.description}</p>
                <Link
                  href={card.link}
                  className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-dark transition-colors group"
                >
                  {card.linkText}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}