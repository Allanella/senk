import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { schoolInfo, footerLinks } from '@/lib/data';

/** lucide-react dropped brand/logo icons; these recreate them locally in the same stroke style. */
function FacebookIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" stroke="none">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TwitterIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    </svg>
  );
}

function InstagramIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.5" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

const iconMap: Record<string, React.ReactNode> = {
  Facebook: <FacebookIcon className="w-5 h-5" />,
  Twitter: <TwitterIcon className="w-5 h-5" />,
  Instagram: <InstagramIcon className="w-5 h-5" />,
  YouTube: <YoutubeIcon className="w-5 h-5" />,
};

export function Footer() {
  return (
    <footer className="relative bg-primary text-primary-foreground py-16 md:py-24 overflow-hidden">
      {/* Top accent line, fading at the edges rather than a hard border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      {/* Faint ambient glow, echoing the rest of the site's hero treatment */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 w-96 h-96 rounded-full bg-gold/10 blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-gold/30 ring-offset-2 ring-offset-primary shadow-md bg-white">
                <Image
                  src="/badge.JPG"
                  alt={`${schoolInfo.shortName} Badge`}
                  fill
                  sizes="48px"
                  className="object-contain p-0.5"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">{schoolInfo.shortName}</h3>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              {schoolInfo.name} - Providing quality Catholic education since{' '}
              {schoolInfo.established}.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 shrink-0 text-gold" />
                <span>{schoolInfo.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold" />
                <a href="tel:+256701939452" className="hover:text-gold transition-colors">
                  +256 701 939452
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold" />
                <a
                  href={`mailto:${schoolInfo.email}`}
                  className="hover:text-gold transition-colors"
                >
                  {schoolInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 relative inline-block after:absolute after:-bottom-1.5 after:left-0 after:w-6 after:h-0.5 after:bg-gold">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm mt-5">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-gold hover:translate-x-0.5 inline-block transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h4 className="font-bold text-lg mb-4 relative inline-block after:absolute after:-bottom-1.5 after:left-0 after:w-6 after:h-0.5 after:bg-gold">
              Academics
            </h4>
            <ul className="space-y-2 text-sm mt-5">
              <li>
                <Link
                  href="/academics#ordinary"
                  className="text-primary-foreground/80 hover:text-gold hover:translate-x-0.5 inline-block transition-all"
                >
                  Ordinary Level
                </Link>
              </li>
              <li>
                <Link
                  href="/academics#advanced"
                  className="text-primary-foreground/80 hover:text-gold hover:translate-x-0.5 inline-block transition-all"
                >
                  Advanced Level
                </Link>
              </li>
              <li>
                <Link
                  href="/academics#skills"
                  className="text-primary-foreground/80 hover:text-gold hover:translate-x-0.5 inline-block transition-all"
                >
                  Skills Development
                </Link>
              </li>
              <li>
                <Link
                  href="/admissions"
                  className="text-primary-foreground/80 hover:text-gold hover:translate-x-0.5 inline-block transition-all"
                >
                  Admissions
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-4 relative inline-block after:absolute after:-bottom-1.5 after:left-0 after:w-6 after:h-0.5 after:bg-gold">
              Stay Updated
            </h4>
            <p className="text-sm text-primary-foreground/80 mb-4 mt-5">
              Subscribe to our newsletter for updates and announcements.
            </p>
            <form className="space-y-2">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-foreground/50" />
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-primary-dark/30 border border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-colors text-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gold text-primary font-medium hover:bg-gold-light transition-colors text-sm"
              >
                Subscribe
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright & Developer Credit */}
          <div className="text-sm text-primary-foreground/80 text-center md:text-left space-y-1">
            <div>
              © {new Date().getFullYear()} {schoolInfo.name}. All rights reserved.
            </div>
            <div className="text-xs text-primary-foreground/60">
              Developed by{' '}
              <a
                href="https://wa.me/256700966715?text=Hello%20Allan,%20I%20got%20your%20contact%20from%20the%20SENK%20website."
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline font-medium"
              >
                Baliddawa Allan
              </a>{' '}
              (
              <a
                href="https://wa.me/256700966715?text=Hello%20Allan,%20I%20got%20your%20contact%20from%20the%20SENK%20website."
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                +256 700 966715
              </a>
              {' / '}
              <a
                href="tel:+256785639406"
                className="hover:text-gold transition-colors"
              >
                +256 785 639406
              </a>
              )
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {footerLinks.social.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-gold hover:text-primary hover:-translate-y-0.5 transition-all"
                aria-label={social.name}
              >
                {iconMap[social.name]}
              </a>
            ))}
          </div>

          {/* Policies */}
          <div className="flex gap-4 text-sm">
            {footerLinks.policies.map((policy) => (
              <Link
                key={policy.label}
                href={policy.href}
                className="text-primary-foreground/80 hover:text-gold transition-colors"
              >
                {policy.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}