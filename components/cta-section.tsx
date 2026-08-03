'use client'

import Link from 'next/link'
import { ArrowRight, Phone, Mail, MessageSquare } from 'lucide-react'

export function CTASection() {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary opacity-90" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml?utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 600%22><defs><pattern id=%22grid%22 width=%2260%22 height=%2260%22 patternUnits=%22userSpaceOnUse%22><path d=%22M 60 0 L 0 0 0 60%22 fill=%22none%22 stroke=%22white%22 stroke-width=%220.5%22 opacity=%220.1%22/></pattern></defs><rect width=%221200%22 height=%22600%22 fill=%22url(%23grid)%22/></svg>')] opacity-20" />

          {/* Content */}
          <div className="relative z-10 p-8 md:p-16 text-center text-white">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
              Join the SENK Family Today
            </h2>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
              Begin your journey toward academic excellence, spiritual growth, and character development. Become part of a community that transforms lives.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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

            {/* Contact Quick Links */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-white/90">
              <a
                href="tel:+256784XXXXXX"
                className="flex items-center gap-2 hover:text-gold transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <span>Call Us</span>
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
                href="https://wa.me/256784XXXXXX"
                className="flex items-center gap-2 hover:text-gold transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Secondary CTA - Info Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Ready to Apply?',
              description: 'Start your application process today and join our vibrant academic community.',
              link: '/admissions',
              linkText: 'Begin Application',
            },
            {
              title: 'Need More Information?',
              description: 'Download our prospectus, view our FAQ, or schedule a campus tour.',
              link: '/downloads',
              linkText: 'Get Resources',
            },
            {
              title: 'Still Have Questions?',
              description: 'Our admissions team is here to help. Reach out anytime with your inquiries.',
              link: '/contact',
              linkText: 'Get in Touch',
            },
          ].map((card, index) => (
            <div
              key={index}
              className="card-premium text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
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
          ))}
        </div>
      </div>
    </section>
  )
}
