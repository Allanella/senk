'use client'

import { useState, useEffect } from 'react'
import { statistics } from '@/lib/data'

function AnimatedCounter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (!hasStarted) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / (duration * 1000), 1)
      setCount(Math.floor(end * progress))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [hasStarted, end, duration])

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasStarted) {
        setHasStarted(true)
      }
    })

    const element = document.getElementById(`counter-${end}`)
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [hasStarted, end])

  return <div id={`counter-${end}`}>{count}</div>
}

export function StatisticsSection() {
  return (
    <section className="section-padding bg-gradient-to-r from-primary via-primary-dark to-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            SENK by the Numbers
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Our impact and commitment to excellence reflected in these key metrics
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-primary-foreground/10 backdrop-blur hover:bg-primary-foreground/20 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${(index % 4) * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2">
                <AnimatedCounter end={stat.value} duration={2} />
                <span className="text-2xl md:text-3xl text-primary-foreground">{stat.suffix}</span>
              </div>
              <p className="text-primary-foreground/90 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Supporting Message */}
        <div className="mt-16 text-center animate-fade-in-up">
          <p className="text-lg text-primary-foreground/80 text-balance leading-relaxed">
            Since 1995, SENK has been committed to excellence, producing graduates who excel academically,
            live by Catholic values, and make meaningful contributions to society. Our dedication to quality
            education and holistic development continues to transform lives.
          </p>
        </div>
      </div>
    </section>
  )
}
