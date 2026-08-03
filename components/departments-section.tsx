'use client'

import {
  BookOpen,
  Briefcase,
  Laptop,
  Microscope,
  BookMarked,
  Home,
  Heart,
  Trophy,
  Compass,
  Library,
} from 'lucide-react'
import { departments } from '@/lib/data'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen,
  Briefcase,
  Laptop,
  Microscope,
  BookMarked,
  Home,
  Heart,
  Trophy,
  Compass,
  Library,
}

export function DepartmentsSection() {
  return (
    <section className="section-padding bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-down">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            School Organization
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Our Departments
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Specialized departments working together to ensure holistic student development and operational excellence
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {departments.map((dept, index) => {
            const Icon = iconMap[dept.icon as keyof typeof iconMap] || BookOpen

            return (
              <div
                key={index}
                className="group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${(index % 5) * 0.08}s` }}
              >
                <div className="card-premium h-full relative overflow-hidden hover:border-gold transition-all duration-300">
                  {/* Background Icon */}
                  <div className="absolute -top-8 -right-8 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <Icon className="w-32 h-32" />
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-gold/20 flex items-center justify-center mb-3 group-hover:from-primary group-hover:to-gold group-hover:text-white transition-all duration-300 relative z-10">
                    <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>

                  {/* Content */}
                  <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors relative z-10">
                    {dept.name}
                  </h3>
                  <p className="text-sm text-secondary group-hover:text-foreground transition-colors relative z-10">
                    {dept.description}
                  </p>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 to-gold/0 group-hover:from-primary/5 group-hover:to-gold/5 transition-all duration-300" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-background rounded-2xl p-8 border border-border animate-fade-in-up">
            <h3 className="text-2xl font-bold text-foreground mb-4">Holistic Development</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">
              SENK&apos;s departmental structure ensures that students receive comprehensive support across all dimensions of growth—academic, spiritual, physical, and social.
            </p>
            <ul className="space-y-2">
              {[
                'Expert leadership in each department',
                'Integrated support systems',
                'Student-centered approach',
                'Continuous improvement focus',
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-secondary">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-background rounded-2xl p-8 border border-border animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-2xl font-bold text-foreground mb-4">Excellence Through Collaboration</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Each department collaborates seamlessly to create an environment where students thrive academically, develop character, and build lasting friendships.
            </p>
            <ul className="space-y-2">
              {[
                'Regular departmental meetings',
                'Coordinated curriculum delivery',
                'Professional development programs',
                'Quality assurance processes',
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-secondary">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
