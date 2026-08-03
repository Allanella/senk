'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { testimonials } from '@/lib/data'

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoPlay])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setAutoPlay(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setAutoPlay(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setAutoPlay(false)
  }

  return (
    <section className="section-padding bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-down">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Testimonials
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Hear from students, parents, teachers, and alumni about their SENK experience
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative bg-background rounded-2xl p-8 md:p-12 border border-border animate-fade-in-up">
          {/* Testimonial Content */}
          <div className="min-h-[300px] flex flex-col items-center justify-center text-center">
            {/* Stars */}
            <div className="flex gap-1 mb-6 justify-center">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-balance leading-tight">
              "{testimonials[currentIndex].content}"
            </p>

            {/* Avatar & Name */}
            <div className="flex flex-col items-center gap-4">
              <div className="relative w-16 h-16">
                <Image
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-lg text-foreground">{testimonials[currentIndex].name}</h4>
                <p className="text-sm text-secondary">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-8 flex items-center justify-between">
            <button
              onClick={goToPrevious}
              className="w-12 h-12 rounded-full border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 flex items-center justify-center group"
            >
              <ChevronLeft className="w-5 h-5 group-hover:scale-125 transition-transform" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-primary w-8' : 'bg-border hover:bg-secondary'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="w-12 h-12 rounded-full border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 flex items-center justify-center group"
            >
              <ChevronRight className="w-5 h-5 group-hover:scale-125 transition-transform" />
            </button>
          </div>

          {/* Pause on Hover Indicator */}
          <button
            onClick={() => setAutoPlay(!autoPlay)}
            className="mt-6 w-full py-2 text-sm text-secondary hover:text-primary transition-colors"
          >
            {autoPlay ? '⏸ Click to pause' : '▶ Click to auto-play'}
          </button>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-premium cursor-pointer hover:border-gold transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${(index % 2) * 0.1}s` }}
              onClick={() => goToSlide(index)}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground mb-4 line-clamp-2">{testimonial.content}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="relative w-10 h-10">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-sm text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-secondary">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
