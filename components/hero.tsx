'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, GraduationCap } from 'lucide-react';
import { quickStats } from '@/lib/data';

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Floating particles animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = 700;

    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      opacity: number;
      pulse: number;
    }> = [];

    for (let i = 0; i < 55; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2.2 + 0.8,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        opacity: Math.random() * 0.5 + 0.25,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.pulse += 0.02;

        if (particle.x - particle.radius < 0 || particle.x + particle.radius > canvas.width) {
          particle.vx = -particle.vx;
        }
        if (particle.y - particle.radius < 0 || particle.y + particle.radius > canvas.height) {
          particle.vy = -particle.vy;
        }

        particle.x = Math.max(
          particle.radius,
          Math.min(canvas.width - particle.radius, particle.x)
        );
        particle.y = Math.max(
          particle.radius,
          Math.min(canvas.height - particle.radius, particle.y)
        );

        const pulseOpacity = particle.opacity * (0.7 + 0.3 * Math.sin(particle.pulse));

        const glow = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.radius * 4
        );
        glow.addColorStop(0, `rgba(212, 175, 55, ${pulseOpacity * 0.35})`);
        glow.addColorStop(1, 'rgba(212, 175, 55, 0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius * 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(13, 71, 161, ${pulseOpacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();

        particles.forEach((otherParticle, otherIndex) => {
          if (index >= otherIndex) return;
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 110) {
            ctx.strokeStyle = `rgba(212, 175, 55, ${0.22 * (1 - distance / 110)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative w-full min-h-screen pt-20 flex items-center justify-center overflow-hidden bg-[#0a1a33]">
      {/* Decorative blurred orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/30 blur-[100px] z-0 animate-pulse-slow" />
      <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-[#d4af37]/25 blur-[110px] z-0 animate-pulse-slow" />

      {/* Hero Background Image — treated for mood + contrast */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/eliza.JPG"
          alt="St. Eliza Nkoowe campus"
          fill
          priority
          className="object-cover scale-105 animate-ken-burns [filter:saturate(1.15)_contrast(1.08)_brightness(0.85)]"
        />
        {/* Duotone brand-color wash, multiplied over the photo */}
        <div className="absolute inset-0 bg-linear-to-br from-[#0d47a1]/60 via-[#0a1a33]/30 to-[#0a1a33]/70 mix-blend-multiply" />
        {/* Faint gold kiss in the corner for warmth */}
        <div className="absolute inset-0 bg-linear-to-tr from-transparent via-transparent to-[#d4af37]/15" />
      </div>

      {/* Canvas Background (particles sit above the image treatment) */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-40 z-[1]" />

      {/* Vignette — darkens edges so content pops, keeps center clearer */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, transparent 40%, rgba(10,26,51,0.55) 100%)',
        }}
      />

      {/* Strong readability scrim directly behind the text column */}
      <div className="absolute inset-x-0 top-0 z-[1] h-full bg-linear-to-b from-[#0a1a33]/20 via-[#0a1a33]/55 to-[#0a1a33]/85" />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* School Badge */}
        <div className="inline-block mb-8 animate-fade-in-down">
          <div className="relative mx-auto w-fit">
            <div className="absolute inset-0 rounded-full bg-[#d4af37]/50 blur-xl scale-110 animate-pulse-slow" />
            <Image
              src="/badge.JPG"
              alt="St. Elizabeth SEN. Secondary School Nkoowe Badge"
              width={120}
              height={120}
              className="relative w-24 h-24 md:w-32 md:h-32 rounded-full shadow-2xl mx-auto ring-4 ring-white/80 ring-offset-2 ring-offset-transparent drop-shadow-lg"
            />
          </div>
        </div>

        {/* Certification Badge */}
        <div className="inline-block mb-6 animate-fade-in-down">
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/95 backdrop-blur-md border border-white/40 text-primary-dark text-sm font-semibold shadow-lg">
            <GraduationCap className="w-4 h-4 text-[#c9a227]" />
            <span>UNEB Registered Centre U0856</span>
            <span className="w-1 h-1 rounded-full bg-primary/40" />
            <span>Premium Education Since 1995</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-6 animate-fade-in-down leading-tight tracking-tight">
          <span className="text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.5)]">
            Educating Future Leaders Through
          </span>
          <br />
          <span className="bg-linear-to-r from-[#e8c547] via-[#fff3c4] to-[#e8c547] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift [filter:drop-shadow(0_2px_12px_rgba(0,0,0,0.35))]">
            Excellence, Faith &amp; Discipline
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-white/90 text-balance mb-10 animate-fade-in-up max-w-2xl mx-auto leading-relaxed [text-shadow:0_1px_12px_rgba(0,0,0,0.4)]">
          St. Elizabeth Senior Secondary School Nkoowe (SENK) provides quality, affordable Catholic
          education with rigorous academics, spiritual growth, and student success since 1995.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up">
          <Link
            href="/admissions"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#d4af37] text-[#0a1a33] font-semibold overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-lg shadow-black/30 hover:shadow-xl"
          >
            <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
            <span className="relative">Apply Now</span>
            <ArrowRight className="relative w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/#about"
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border-2 border-white/70 text-white font-medium bg-white/10 backdrop-blur-sm hover:bg-white hover:text-primary-dark hover:border-white transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            Explore Our School
            <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </Link>
        </div>

        {/* Quick Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-16 animate-fade-in-up">
          {quickStats.map((stat, index) => (
            <div
              key={index}
              className="group relative text-center overflow-hidden rounded-xl p-5 bg-white/95 backdrop-blur-md border border-white/40 shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="absolute inset-0 bg-linear-to-br from-primary/0 via-primary/0 to-[#d4af37]/0 group-hover:from-primary/5 group-hover:to-[#d4af37]/10 transition-all duration-300" />
              <div className="relative text-xs text-secondary mb-2 font-medium tracking-wide">{stat.label}</div>
              <div className="relative text-xl md:text-2xl font-bold bg-linear-to-br from-primary to-primary-dark bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-linear-to-r from-primary to-[#d4af37] group-hover:w-3/4 transition-all duration-300 rounded-full" />
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-white/80 tracking-wider uppercase [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]">
            Scroll to discover
          </span>
          <div className="w-8 h-8 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm flex items-center justify-center">
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}