'use client'

import { Cross, Shield, Zap, BookOpen } from 'lucide-react'
import { schoolInfo } from '@/lib/data'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Cross,
  Shield,
  Zap,
  BookOpen,
}

export function PillarsSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-background via-card/50 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            The Four Pillars of SENK
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Our foundational principles that shape student character and success
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {schoolInfo.fourPillars.map((pillar, index) => {
            const Icon = iconMap[pillar.icon as keyof typeof iconMap] || BookOpen

            return (
              <div
                key={index}
                className="group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className="card-premium h-full overflow-hidden transform transition-all duration-300 hover:border-gold"
                  style={{
                    animation: 'fadeInUp 0.6s ease-out backwards',
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {/* Icon Container */}
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {pillar.name}
                  </h3>
                  <p className="text-secondary text-sm leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Supporting Text */}
        <div className="mt-16 bg-card rounded-2xl p-8 border border-border animate-fade-in-up">
          <p className="text-lg text-foreground leading-relaxed text-center text-balance">
            These four pillars form the cornerstone of SENK&apos;s educational philosophy, ensuring that every student develops spiritually, morally, intellectually, and physically. We believe that true education encompasses more than academics—it shapes character, builds integrity, and prepares students to be leaders in their communities and the world.
          </p>
        </div>
      </div>
    </section>
  )
}
