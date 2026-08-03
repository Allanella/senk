'use client'

import {
  Beaker,
  Droplets,
  Sparkles,
  Scissors,
  Shirt,
  Croissant,
  Cpu,
  Flame,
  Zap,
} from 'lucide-react'
import { skillsPrograms } from '@/lib/data'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Beaker,
  Droplets,
  Sparkles,
  Scissors,
  Shirt,
  Croissant,
  Cpu,
  Flame,
  Zap,
}

const colorGradients = [
  'from-blue-400 to-blue-600',
  'from-cyan-400 to-blue-500',
  'from-purple-400 to-purple-600',
  'from-pink-400 to-rose-500',
  'from-orange-400 to-orange-600',
  'from-amber-400 to-orange-500',
  'from-green-400 to-emerald-600',
  'from-red-400 to-rose-600',
  'from-indigo-400 to-purple-600',
]

export function SkillsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-down">
          <div className="inline-block px-4 py-2 rounded-full bg-gold/20 text-gold text-sm font-medium mb-4">
            Vocational Excellence
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Skills Development Programs
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Practical vocational training alongside academics, equipping students with real-world skills for entrepreneurship and employment
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsPrograms.map((skill, index) => {
            const Icon = iconMap[skill.icon as keyof typeof iconMap]
            const gradient = colorGradients[index % colorGradients.length]

            return (
              <div
                key={index}
                className="group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${(index % 3) * 0.1}s` }}
              >
                <div
                  className={`card-premium h-full bg-gradient-to-br ${gradient} text-white hover:shadow-2xl`}
                >
                  {/* Icon */}
                  <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-white/20 mb-4 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                    {Icon && <Icon className="w-8 h-8" />}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-white/95 transition-colors">
                    {skill.name}
                  </h3>

                  {/* Description */}
                  <p className="text-white/80 text-sm leading-relaxed">
                    Industry-relevant skills with hands-on training and mentorship
                  </p>

                  {/* Bottom Element */}
                  <div className="mt-4 pt-4 border-t border-white/20 flex items-center justify-between">
                    <span className="text-xs text-white/70 font-medium">Vocational</span>
                    <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Supporting Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 bg-card rounded-2xl p-12 border border-border">
          {[
            {
              number: '9+',
              title: 'Programs',
              description: 'Diverse skills across multiple sectors',
            },
            {
              number: '100%',
              title: 'Practical',
              description: 'Hands-on learning with expert instructors',
            },
            {
              number: '∞',
              title: 'Opportunity',
              description: 'Career paths and entrepreneurship',
            },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{item.number}</div>
              <h4 className="text-lg font-bold text-foreground mb-1">{item.title}</h4>
              <p className="text-sm text-secondary">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
