'use client'

import { Eye, Target, Heart } from 'lucide-react'
import { schoolInfo, statistics } from '@/lib/data'

export function VisionMissionSection() {
  const cards = [
    {
      icon: Eye,
      title: 'Our Vision',
      description: schoolInfo.vision,
      color: 'from-primary to-primary-dark',
    },
    {
      icon: Target,
      title: 'Our Mission',
      description: schoolInfo.mission,
      color: 'from-gold to-gold-dark',
    },
  ]

  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Our Vision & Mission
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Guiding SENK&apos;s commitment to excellence and Catholic values
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {cards.map((card, index) => {
            const Icon = card.icon
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${card.color} rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold">{card.title}</h3>
                </div>
                <p className="text-white/90 leading-relaxed">{card.description}</p>
              </div>
            )
          })}
        </div>

        {/* Core Values */}
        <div className="bg-card rounded-2xl p-12 border border-border">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 rounded-full bg-gold/20 text-gold text-sm font-medium mb-4">
              Core Values
            </div>
            <h3 className="text-3xl font-bold text-foreground">What Drives Us</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {schoolInfo.coreValues.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-background hover:bg-muted transition-colors duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-gold flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">{value.name}</h4>
                <p className="text-sm text-secondary">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Established', value: schoolInfo.established },
            { label: 'UNEB Centre', value: schoolInfo.unebCentre },
            { label: 'Registration No', value: schoolInfo.registrationNo },
            { label: 'Type', value: 'Mixed Boarding' },
          ].map((stat, index) => (
            <div
              key={index}
              className="card-premium text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-primary text-2xl font-bold mb-2">{stat.value}</div>
              <div className="text-xs text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
