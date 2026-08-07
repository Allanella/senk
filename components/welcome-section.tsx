'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function WelcomeSection() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in-up">
          {/* Left - Head teacher image */}
          <div className="relative animate-fade-in-up">
            <div className="relative h-[420px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg border border-border bg-white">
              <Image src="/hm.JPG" alt="Head Teacher" fill className="object-cover object-top" />
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
            <div className="pt-4">
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
