import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { AcademicsSection } from '@/components/academics-section'
import { SkillsSection } from '@/components/skills-section'

export const metadata: Metadata = {
  title: 'Academics - SENK | O-Level & A-Level Programs',
  description: 'Explore our rigorous academic programs, from Ordinary Level to Advanced Level, with subjects, skills training, and UNEB exam preparation.',
}

export default function AcademicsPage() {
  return (
    <main className="w-full">
      <Navbar />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-primary to-primary-dark text-primary-foreground pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-gold/20 text-gold text-sm font-medium mb-4">
            Academic Excellence
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Rigorous & Comprehensive Academic Programs
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            SENK offers a carefully designed curriculum that combines academic rigor with practical skills, preparing students for UNEB success and beyond.
          </p>
        </div>
      </section>

      <AcademicsSection />
      <SkillsSection />

      {/* Info Section */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Extra Coaching',
                description: 'Regular tutoring sessions and personalized academic support to ensure student success',
              },
              {
                title: 'Practical Learning',
                description: 'Hands-on laboratory work and real-world applications integrated into the curriculum',
              },
              {
                title: 'UNEB Excellence',
                description: 'Curriculum aligned with UNEB standards, with experienced examiners on staff',
              },
            ].map((item, index) => (
              <div key={index} className="card-premium text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-secondary">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
