import Link from 'next/link';
import { Mail, Phone, MapPin, Share2, MessageCircle, Heart, Play } from 'lucide-react';
import { schoolInfo, footerLinks } from '@/lib/data';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gold flex items-center justify-center">
                <span className="text-primary font-bold">S</span>
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
                <MapPin className="w-4 h-4 mt-1 shrink-0" />
                <span>{schoolInfo.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href={`tel:${schoolInfo.phone}`} className="hover:text-gold transition-colors">
                  {schoolInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
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
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h4 className="font-bold text-lg mb-4">Academics</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/academics#ordinary"
                  className="text-primary-foreground/80 hover:text-gold transition-colors"
                >
                  Ordinary Level
                </Link>
              </li>
              <li>
                <Link
                  href="/academics#advanced"
                  className="text-primary-foreground/80 hover:text-gold transition-colors"
                >
                  Advanced Level
                </Link>
              </li>
              <li>
                <Link
                  href="/academics#skills"
                  className="text-primary-foreground/80 hover:text-gold transition-colors"
                >
                  Skills Development
                </Link>
              </li>
              <li>
                <Link
                  href="/admissions"
                  className="text-primary-foreground/80 hover:text-gold transition-colors"
                >
                  Admissions
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-4">Stay Updated</h4>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Subscribe to our newsletter for updates and announcements.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-lg bg-primary-dark/30 border border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/50 focus:outline-none focus:border-gold transition-colors text-sm"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 rounded-lg bg-gold text-primary font-medium hover:bg-gold-light transition-colors text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-sm text-primary-foreground/80">
            © {new Date().getFullYear()} {schoolInfo.name}. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {footerLinks.social.map((social) => {
              const iconMap: Record<string, React.ReactNode> = {
                Facebook: <Share2 className="w-5 h-5" />,
                Twitter: <MessageCircle className="w-5 h-5" />,
                Instagram: <Heart className="w-5 h-5" />,
                YouTube: <Play className="w-5 h-5" />,
              };

              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-gold hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  {iconMap[social.name]}
                </a>
              );
            })}
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
