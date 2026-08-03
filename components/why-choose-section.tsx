'use client'

import {
  Star,
  Users,
  Wallet,
  Cpu,
  Shield,
  Heart,
  Zap,
  Home,
  Lightbulb,
  Briefcase,
  Wifi,
} from 'lucide-react'
import { whyChooseSenk } from '@/lib/data'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Star,
  Users,
  Wallet,
  Cpu,
  Shield,
  Heart,
  Zap,
  Home,
  Lightbulb,
  Briefcase,
  Wifi,
}

export function WhyChooseSection() {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-down">
          <div className="inline-block px-4 py-2 rounded-full bg-gold/20 text-gold text-sm font-medium mb-4">
            Why Choose SENK
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Excellence in Every Aspect
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Twelve reasons why SENK stands out as Uganda&apos;s premier secondary school
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseSenk.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap] || Star

            return (
              <div
                key={index}
                className="group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${(index % 3) * 0.1}s` }}
              >
                <div className="card-premium h-full hover:border-gold hover:bg-gold/5 relative overflow-hidden">
                  {/* Number Badge */}
                  <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-gold flex items-center justify-center text-white font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100 origin-top-right">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/10 to-gold/10 flex items-center justify-center mb-4 group-hover:from-primary group-hover:to-gold transition-all duration-300">
                    <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-secondary leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Decorative Line */}
                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center animate-fade-in-up">
          <p className="text-lg text-secondary mb-6 text-balance">
            Ready to join the SENK family and unlock your potential?
          </p>
          <a
            href="/admissions"
            className="inline-flex items-center px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Start Your Journey Today
          </a>
        </div>
      </div>
    </section>
  )
}
