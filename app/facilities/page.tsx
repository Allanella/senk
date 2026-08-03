import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { FacilitiesSection } from '@/components/facilities-section'

export const metadata: Metadata = {
  title: 'Facilities - SENK | Modern Infrastructure',
  description: 'Explore our world-class facilities including laboratories, ICT labs, boarding, and dining facilities.',
}

export default function FacilitiesPage() {
  return (
    <main className="w-full">
      <Navbar />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-primary to-primary-dark text-primary-foreground pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            World-Class Facilities
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Modern infrastructure supporting academic excellence and student wellbeing
          </p>
        </div>
      </section>

      <FacilitiesSection />

      <Footer />
    </main>
  )
}
