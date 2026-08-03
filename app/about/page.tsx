import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { VisionMissionSection } from '@/components/vision-mission-section'
import { PillarsSection } from '@/components/pillars-section'
import { schoolInfo } from '@/lib/data'

export const metadata: Metadata = {
  title: 'About SENK | St. Elizabeth Senior Secondary School Nkoowe',
  description: 'Learn about our vision, mission, and values. SENK provides quality Catholic education with academic excellence since 1995.',
}

export default function AboutPage() {
  return (
    <main className="w-full">
      <Navbar />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-primary to-primary-dark text-primary-foreground pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            About SENK
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            St. Elizabeth Senior Secondary School Nkoowe has been a beacon of educational excellence and Catholic values since 1995.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="card-premium p-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Journey</h2>
              <p className="text-lg text-secondary leading-relaxed mb-4">
                Founded in {schoolInfo.established}, St. Elizabeth Senior Secondary School Nkoowe was established with a vision
                to provide quality, affordable Catholic education that transforms young minds. What began as a modest institution
                has grown into a beacon of educational excellence across Uganda.
              </p>
              <p className="text-lg text-secondary leading-relaxed">
                Over nearly three decades, SENK has remained committed to its core mission: fostering academic excellence,
                spiritual growth, moral development, and disciplined character in every student. Our Catholic heritage remains
                central to all we do, guided by the principles of faith, hope, and charity.
              </p>
            </div>

            {/* Key Facts */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Established', value: schoolInfo.established },
                { label: 'UNEB Centre', value: schoolInfo.unebCentre },
                { label: 'Registration', value: schoolInfo.registrationNo },
                { label: 'Type', value: 'Mixed Boarding' },
              ].map((fact, index) => (
                <div key={index} className="card-premium text-center">
                  <div className="text-2xl font-bold text-primary mb-1">{fact.value}</div>
                  <div className="text-sm text-secondary">{fact.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <VisionMissionSection />
      <PillarsSection />

      {/* Staff & Leadership */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Leadership & Staff</h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Our dedicated team of experienced educators, administrators, and support staff work tirelessly to ensure student success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Principal',
                name: 'Dr. [Principal Name]',
                bio: 'Visionary leader with decades of experience in secondary education',
              },
              {
                title: 'Deputy Principal (Academics)',
                name: '[Name]',
                bio: 'Oversees curriculum implementation and academic excellence',
              },
              {
                title: 'Deputy Principal (Discipline)',
                name: '[Name]',
                bio: 'Ensures safe, disciplined learning environment',
              },
            ].map((staff, index) => (
              <div key={index} className="card-premium text-center">
                <div className="text-lg font-bold text-primary mb-1">{staff.title}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{staff.name}</h3>
                <p className="text-secondary text-sm">{staff.bio}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a href="/staff-directory" className="inline-block px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary-dark transition-all">
              View Full Staff Directory
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
