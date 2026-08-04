import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { StudentLifeSection } from '@/components/student-life-section'
import { Trophy, Users, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Student Life - SENK | Sports, Clubs & Leadership',
  description: 'Explore extracurricular activities, sports, clubs, and leadership opportunities at SENK.',
}

/** Builds a bunting/pennant-flag edge — playful, fitting a page about sports and clubs. */
function buildPennantPath(width: number, flag: number, height: number) {
  const count = Math.ceil(width / flag)
  let d = `M0,0 `
  for (let i = 0; i < count; i++) {
    const xMid = i * flag + flag / 2
    const xEnd = (i + 1) * flag
    d += `L${xMid},${height} L${xEnd},0 `
  }
  d += `L${width},${height + 20} L0,${height + 20} Z`
  return d
}
const PENNANT_PATH = buildPennantPath(1440, 40, 26)

const badges = [
  { icon: Trophy, position: 'top-10 left-[8%] md:left-[14%]', rotate: '-rotate-6' },
  { icon: Users, position: 'top-6 right-[10%] md:right-[16%]', rotate: 'rotate-6' },
  { icon: Star, position: 'bottom-16 left-[20%] md:left-1/4', rotate: '-rotate-3' },
]

const confetti = [
  { className: 'top-8 left-1/3 w-2.5 h-2.5 bg-gold/70' },
  { className: 'top-20 right-1/4 w-2 h-2 bg-primary-foreground/50' },
  { className: 'bottom-24 right-[15%] w-3 h-3 bg-gold/50' },
  { className: 'bottom-10 left-[12%] w-2 h-2 bg-primary-foreground/40' },
  { className: 'top-1/3 right-[8%] w-1.5 h-1.5 bg-gold/60' },
]

export default function StudentLifePage() {
  return (
    <main className="w-full">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden section-padding bg-gradient-to-b from-primary to-primary-dark text-primary-foreground pt-32 pb-28">
        {/* Diagonal energy sweep */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: 'linear-gradient(115deg, transparent 40%, currentColor 40%, currentColor 42%, transparent 42%, transparent 46%, currentColor 46%, currentColor 47%, transparent 47%)',
          }}
        />

        {/* Confetti scatter — irregular, not a repeating grid */}
        {confetti.map((c, i) => (
          <span
            key={i}
            aria-hidden
            className={`pointer-events-none absolute rounded-full ${c.className}`}
          />
        ))}

        {/* Floating activity badges, directly reflecting sports / clubs / leadership */}
        {badges.map((b, i) => {
          const Icon = b.icon
          return (
            <div
              key={i}
              className={`hidden sm:flex pointer-events-none absolute ${b.position} ${b.rotate} w-14 h-14 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-sm items-center justify-center text-gold shadow-lg animate-fade-in-down`}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <Icon className="w-6 h-6" />
            </div>
          )
        })}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-gold/20 text-gold text-sm font-medium mb-6 animate-fade-in-down">
            Beyond the Classroom
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Student Life at SENK
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Beyond academics: sports, clubs, leadership, and meaningful experiences
          </p>
        </div>

        {/* Pennant-flag edge */}
        <svg
          aria-hidden
          className="absolute bottom-0 left-0 w-full text-background fill-current"
          style={{ height: '30px' }}
          viewBox="0 0 1440 46"
          preserveAspectRatio="none"
        >
          <path d={PENNANT_PATH} />
        </svg>
      </section>

      <StudentLifeSection />

      <Footer />
    </main>
  )
}