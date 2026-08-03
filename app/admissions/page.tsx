import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CheckCircle, FileText, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Admissions - SENK | Apply Now',
  description: 'How to apply to SENK. Requirements, fees, application process, and important deadlines.',
}

export default function AdmissionsPage() {
  return (
    <main className="w-full">
      <Navbar />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-primary to-primary-dark text-primary-foreground pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Apply to SENK
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Join our community of achievers. Affordable, quality Catholic education awaits.
          </p>
        </div>
      </section>

      {/* Application Steps */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">How to Apply</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                title: 'Obtain Form',
                description: 'Get the application form from our office or download online',
                icon: FileText,
              },
              {
                step: 2,
                title: 'Complete Form',
                description: 'Fill in all required information and attach supporting documents',
                icon: CheckCircle,
              },
              {
                step: 3,
                title: 'Submit Application',
                description: 'Submit with required documents and application fee',
                icon: Users,
              },
              {
                step: 4,
                title: 'Interview',
                description: 'Attend entrance interview and receive admission decision',
                icon: CheckCircle,
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="card-premium text-center relative">
                  <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-gold text-primary font-bold flex items-center justify-center text-lg">
                    {item.step}
                  </div>
                  <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-secondary">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="section-padding bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Admission Requirements</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Academic Requirements',
                items: [
                  'For O-Level: PLE certificate or equivalent',
                  'Completed English and Mathematics at PLE',
                  'Good academic performance record',
                  'Entrance examination results',
                ],
              },
              {
                title: 'Documentation',
                items: [
                  'Birth certificate or passport',
                  'Previous school records',
                  'Character reference letters',
                  'Medical clearance form',
                  'Parent/Guardian contact information',
                ],
              },
              {
                title: 'Personal Qualities',
                items: [
                  'Positive attitude toward learning',
                  'Willingness to follow school rules',
                  'Respect for Catholic values',
                  'Commitment to discipline',
                ],
              },
              {
                title: 'Application Process',
                items: [
                  'Application deadline: Rolling admissions',
                  'Application fee required',
                  'Entrance exam on scheduled dates',
                  'Interview with admissions team',
                ],
              },
            ].map((section, index) => (
              <div key={index} className="card-premium p-6">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-gradient-to-b from-primary to-gold rounded-full" />
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fees */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Fees Structure</h2>
            <p className="text-lg text-secondary">Affordable quality education for all</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Day Students',
                items: [
                  { label: 'Tuition per term', value: 'UGX [Amount]' },
                  { label: 'Registration', value: 'UGX [Amount]' },
                  { label: 'Exam fees', value: 'UGX [Amount]' },
                  { label: 'Activity fees', value: 'UGX [Amount]' },
                ],
              },
              {
                title: 'Boarding Students',
                items: [
                  { label: 'Tuition per term', value: 'UGX [Amount]' },
                  { label: 'Boarding per term', value: 'UGX [Amount]' },
                  { label: 'Registration', value: 'UGX [Amount]' },
                  { label: 'Exam & activity fees', value: 'UGX [Amount]' },
                ],
              },
            ].map((section, index) => (
              <div key={index} className="card-premium p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">{section.title}</h3>
                <div className="space-y-4">
                  {section.items.map((item, i) => (
                    <div key={i} className="flex justify-between items-center pb-2 border-b border-border">
                      <span className="text-foreground">{item.label}</span>
                      <span className="font-bold text-primary">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-xl bg-gold/10 border border-gold/20 text-center">
            <p className="text-foreground mb-4">
              Scholarships and payment plans available for eligible students. Contact admissions for more information.
            </p>
            <a href="/contact" className="inline-block px-6 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary-dark transition-all">
              Inquire About Scholarships
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Ready to Apply?</h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Take the first step toward academic excellence and a transformative educational experience.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 rounded-lg bg-gold text-primary font-bold hover:bg-gold-light transition-all transform hover:scale-105"
          >
            Contact Admissions Today
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
