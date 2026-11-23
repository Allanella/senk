'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function WelcomeSection() {
  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-primary/5 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-16 h-64 w-64 rounded-full bg-gold/10 blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center animate-fade-in-up">
          {/* Left - Head teacher image */}
          <div className="relative animate-fade-in-up max-w-md mx-auto lg:max-w-none w-full">
            <div className="absolute -inset-3 rounded-[1.75rem] bg-linear-to-br from-primary/15 via-transparent to-gold/20 -z-10" />
            <div className="relative aspect-3/4 max-h-[520px] rounded-2xl overflow-hidden shadow-xl border border-border/80 bg-muted">
              <Image
                src="/hm.webp"
                alt="Head Teacher"
                fill
                sizes="(max-width: 1024px) 90vw, 420px"
                className="object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-[#0a1a33]/85 via-[#0a1a33]/35 to-transparent p-5 pt-16">
                <p className="text-white font-semibold text-lg leading-tight">Mr. Mugerwa John Bosco</p>
                <p className="text-gold-light text-sm mt-0.5">Head Teacher</p>
              </div>
            </div>
          </div>

          {/* Right - Welcome Message */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div>
              <div className="inline-block px-4 py-2 rounded-full bg-gold/20 text-gold text-sm font-medium mb-4">
                Welcome to SENK
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
                A Message from Our Head Teacher
              </h2>
            </div>

            <p className="text-lg text-secondary leading-relaxed">
              Dear Parents, Students, and Guardians,
            </p>

            <p className="text-base text-foreground/90 leading-relaxed">
              St. Elizabeth Senior Secondary School Nkoowe stands as a beacon of academic excellence
              and moral formation in Uganda. For nearly three decades, we have been committed to
              nurturing young minds through rigorous academics, Catholic values, and spiritual
              guidance. Our holistic approach ensures that students not only excel in the UNEB
              examinations but also develop into responsible, compassionate leaders of tomorrow.
            </p>

            <p className="text-base text-foreground/90 leading-relaxed">
              With state-of-the-art facilities, a dedicated faculty of experienced educators, and a
              supportive community, SENK provides the ideal environment for student success. We
              believe in the power of education to transform lives and communities.
            </p>

            {/* Signature Placeholder */}
            <div className="pt-4 border-l-4 border-gold pl-4">
              <div className="text-xl font-bold text-primary">Mr. Mugerwa John Bosco</div>
              <p className="text-sm text-secondary">
                Head Teacher, St. Elizabeth Senior Secondary School Nkoowe
              </p>
            </div>

            {/* CTA Button */}
            <div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-primary text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
              >
                Read More About SENK
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
