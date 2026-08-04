import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { AcademicsSection } from '@/components/academics-section'
import { SkillsSection } from '@/components/skills-section'
import { GraduationCap, FlaskConical, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Academics - SENK | O-Level & A-Level Programs',
  description: 'Explore our rigorous academic programs, from Ordinary Level to Advanced Level, with subjects, skills training, and UNEB exam preparation.',
}

/** Hexagonal distinction badge with a star — an academic-medal counterpart to the crest used elsewhere. */
function DistinctionBadge({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 132" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M60 4 L112 34 V98 L60 128 L8 98 V34 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.9"
      />
      <path
        d="M60 16 L101 40 V88 L60 112 L19 88 V40 Z"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
      />
      <path
        d="M60 46 L65.5 58 L78.5 59.5 L69 68.5 L71.5 81.5 L60 75 L48.5 81.5 L51 68.5 L41.5 59.5 L54.5 58 Z"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  )
}

const infoItems = [
  {
    title: 'Extra Coaching',
    description: 'Regular tutoring sessions and personalized academic support to ensure student success',
    icon: GraduationCap,
  },
  {
    title: 'Practical Learning',
    description: 'Hands-on laboratory work and real-world applications integrated into the curriculum',
    icon: FlaskConical,
  },
  {
    title: 'UNEB Excellence',
    description: 'Curriculum aligned with UNEB standards, with experienced examiners on staff',
    icon: Award,
  },
]

export default function AcademicsPage() {
  return (
    <main className="w-full">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden section-padding bg-gradient-to-b from-primary to-primary-dark text-primary-foreground pt-32 pb-24">
        {/* Faint ruled-paper texture — evokes an exam script rather than decoration for its own sake */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: 'repeating-linear-gradient(currentColor 0 1px, transparent 1px 36px)',
          }}
        />
        {/* Warm ambient glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-28 -left-20 w-96 h-96 rounded-full bg-gold/20 blur-3xl"
        />

        <DistinctionBadge className="pointer-events-none absolute top-16 right-6 md:right-16 w-16 h-20 md:w-24 md:h-28 text-gold opacity-70 rotate-6" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-gold/20 text-gold text-sm font-medium mb-4 animate-fade-in-down">
            Academic Excellence
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Rigorous &amp; Comprehensive Academic Programs
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            SENK offers a carefully designed curriculum that combines academic rigor with practical skills, preparing students for UNEB success and beyond.
          </p>
        </div>

        {/* Gentle wave, easing into the sections below */}
        <svg
          aria-hidden
          className="absolute bottom-0 left-0 w-full text-background fill-current"
          style={{ height: '40px' }}
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
        >
          <path d="M0,32 C240,60 480,4 720,24 C960,44 1200,8 1440,28 L1440,60 L0,60 Z" />
        </svg>
      </section>

      <AcademicsSection />
      <SkillsSection />

      {/* Info Section */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {infoItems.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="relative card-premium text-center pt-10 pb-8 px-6 overflow-hidden group hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold/40 via-gold to-gold/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                  <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-gold/15 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-primary-foreground transition-colors duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-secondary">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}