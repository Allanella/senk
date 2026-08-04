import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { VisionMissionSection } from '@/components/vision-mission-section'
import { PillarsSection } from '@/components/pillars-section'
import { schoolInfo } from '@/lib/data'
import { Calendar, ClipboardCheck, FileBadge2, Users2, ArrowRight } from 'lucide-react'

/** Circular seal — cross flanked by laurel, standing in for a school crest. */
function SchoolCrest({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="56" stroke="currentColor" strokeWidth="1.5" opacity="0.9" />
      <circle cx="60" cy="60" r="48" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      {/* Cross */}
      <path d="M60 34v40M46 48h28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      {/* Laurel, left */}
      <path
        d="M40 84c-6-8-9-18-7-28M33 56c3 1 6 3 7 6M35 66c3 1 6 2 8 5M38 76c3 0 6 1 8 3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.85"
      />
      {/* Laurel, right */}
      <path
        d="M80 84c6-8 9-18 7-28M87 56c-3 1-6 3-7 6M85 66c-3 1-6 2-8 5M82 76c-3 0-6 1-8 3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.85"
      />
    </svg>
  )
}

/** Builds a tileable scalloped-edge path, evoking a certificate or wax-seal ribbon border. */
function buildScallopPath(width: number, scallop: number, height: number) {
  const count = Math.ceil(width / scallop)
  let d = `M0,0 `
  for (let i = 0; i < count; i++) {
    const x1 = i * scallop + scallop / 2
    const x2 = (i + 1) * scallop
    d += `Q${x1},${height} ${x2},0 `
  }
  d += `L${width},${height + 20} L0,${height + 20} Z`
  return d
}
const SCALLOP_PATH = buildScallopPath(1440, 48, 22)

export const metadata: Metadata = {
  title: 'About SENK | St. Elizabeth Senior Secondary School Nkoowe',
  description: 'Learn about our vision, mission, and values. SENK provides quality Catholic education with academic excellence since 1995.',
}

const keyFacts = [
  { label: 'Established', value: schoolInfo.established, icon: Calendar },
  { label: 'UNEB Centre', value: schoolInfo.unebCentre, icon: ClipboardCheck },
  { label: 'Registration', value: schoolInfo.registrationNo, icon: FileBadge2 },
  { label: 'Type', value: 'Mixed Boarding', icon: Users2 },
]

const leadership = [
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
]

function initialsOf(name: string) {
  const cleaned = name.replace(/[\[\]]/g, '').trim()
  const parts = cleaned.split(' ').filter(Boolean)
  const letters = parts
    .filter((p) => p !== 'Dr.')
    .slice(0, 2)
    .map((p) => p[0])
  return letters.join('').toUpperCase() || 'SE'
}

export default function AboutPage() {
  return (
    <main className="w-full">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden section-padding bg-gradient-to-b from-primary to-primary-dark text-primary-foreground pt-32 pb-24">
        {/* Ambient glow, warm rather than flat */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gold/25 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-primary-foreground/10 blur-3xl"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SchoolCrest className="w-16 h-16 mx-auto mb-5 text-gold animate-fade-in-down" />
          <div className="text-xs font-semibold tracking-[0.25em] uppercase text-primary-foreground/70 mb-6 animate-fade-in-down">
            Est. {schoolInfo.established} &middot; Catholic Education
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            About SENK
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            St. Elizabeth Senior Secondary School Nkoowe has been a beacon of educational excellence and Catholic values since 1995.
          </p>
        </div>

        {/* Scalloped edge, tying into the "credentials plaque" motif used below */}
        <svg
          aria-hidden
          className="absolute bottom-0 left-0 w-full text-background fill-current"
          style={{ height: '32px' }}
          viewBox="0 0 1440 48"
          preserveAspectRatio="none"
        >
          <path d={SCALLOP_PATH} />
        </svg>
      </section>

      {/* History Section */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            <div className="relative card-premium p-8 md:p-10 overflow-hidden animate-fade-in-up">
              {/* Manuscript-style accent rule */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-gold via-gold/60 to-transparent" />
              {/* Faint watermark, echoing the hero crest without competing with it */}
              <SchoolCrest className="absolute -right-6 -bottom-6 w-40 h-40 text-gold opacity-[0.06]" />
              <div className="pl-4 relative">
                <div className="inline-block px-3 py-1 rounded-full bg-gold/15 text-gold text-xs font-semibold tracking-wide uppercase mb-4">
                  Our Journey
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Journey</h2>
                <span aria-hidden className="block text-6xl leading-none text-gold/30 font-serif -mb-4">&ldquo;</span>
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
            </div>

            {/* Key Facts — styled as a credentials plaque rather than a plain stat grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {keyFacts.map((fact, index) => {
                const Icon = fact.icon
                return (
                  <div
                    key={index}
                    className="card-premium text-center py-6 px-3 group hover:-translate-y-1 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.08}s` }}
                  >
                    <div className="mx-auto mb-3 w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-primary-foreground transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-1">{fact.value}</div>
                    <div className="text-sm text-secondary">{fact.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <VisionMissionSection />
      <PillarsSection />

      {/* Staff & Leadership */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-down">
            <div className="inline-block px-4 py-2 rounded-full bg-gold/20 text-gold text-sm font-medium mb-4">
              Our People
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">Leadership & Staff</h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Our dedicated team of experienced educators, administrators, and support staff work tirelessly to ensure student success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((staff, index) => (
              <div
                key={index}
                className="relative card-premium text-center pt-10 pb-8 px-6 group hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold ring-4 ring-card group-hover:ring-gold/40 transition-all duration-300">
                  {initialsOf(staff.name)}
                </div>
                <div className="text-sm font-bold text-gold uppercase tracking-wide mb-1">{staff.title}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{staff.name}</h3>
                <p className="text-secondary text-sm leading-relaxed">{staff.bio}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="/staff-directory"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary-dark transition-all duration-300 group"
            >
              View Full Staff Directory
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}