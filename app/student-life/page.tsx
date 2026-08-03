import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { StudentLifeSection } from '@/components/student-life-section'

export const metadata: Metadata = {
  title: 'Student Life - SENK | Sports, Clubs & Leadership',
  description: 'Explore extracurricular activities, sports, clubs, and leadership opportunities at SENK.',
}

export default function StudentLifePage() {
  return (
    <main className="w-full">
      <Navbar />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-primary to-primary-dark text-primary-foreground pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Student Life at SENK
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Beyond academics: sports, clubs, leadership, and meaningful experiences
          </p>
        </div>
      </section>

      <StudentLifeSection />

      <Footer />
    </main>
  )
}
