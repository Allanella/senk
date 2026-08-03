'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navMenu } from '@/lib/data';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-card/95 shadow-lg shadow-black/5 backdrop-blur-lg border-b border-border/60'
          : 'bg-card/70 backdrop-blur-md border-b border-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            'flex justify-between items-center transition-all duration-300',
            isScrolled ? 'h-16' : 'h-16 md:h-20'
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gold/30 blur-md scale-0 group-hover:scale-125 transition-transform duration-300" />
              <Image
                src="/badge.JPG"
                alt="St. Elizabeth SEN. Secondary School Nkoowe Badge"
                width={48}
                height={48}
                className="relative w-11 h-11 md:w-12 md:h-12 rounded-full shadow-sm ring-2 ring-transparent group-hover:ring-gold/50 transition-all duration-300"
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-bold text-primary tracking-tight group-hover:text-primary-dark transition-colors">
                SENK
              </div>
              <div className="text-xs text-secondary">Education is Light</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navMenu.map((item) => {
              const hasDropdown = Boolean(item.submenu);

              if (!hasDropdown) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="relative px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 group/link"
                  >
                    {item.label}
                    <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-linear-to-r from-primary to-gold scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left" />
                  </Link>
                );
              }

              return (
                <div key={item.label} className="relative group">
                  <button
                    type="button"
                    className="relative px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 group/link"
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <div className="flex items-center gap-1">
                      {item.label}
                      <ChevronDown
                        className={cn(
                          'w-4 h-4 transition-transform duration-200',
                          openDropdown === item.label && 'rotate-180'
                        )}
                      />
                    </div>
                    <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-linear-to-r from-primary to-gold scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left" />
                  </button>

                  <div
                    className={cn(
                      'absolute left-0 top-full mt-2 w-52 bg-card/95 backdrop-blur-md rounded-xl shadow-xl opacity-0 invisible translate-y-1',
                      'group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-out',
                      'border border-border/60 py-2 overflow-hidden',
                      openDropdown === item.label && 'opacity-100 visible translate-y-0'
                    )}
                  >
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-primary via-gold to-primary" />
                    {item.submenu?.map((subitem) => (
                      <Link
                        key={subitem.label}
                        href={subitem.href}
                        className="flex items-center gap-2 px-4 py-2.5 text-sm text-foreground hover:text-primary hover:bg-muted transition-colors group/item"
                        onClick={() => setOpenDropdown(null)}
                      >
                        <span className="w-1 h-1 rounded-full bg-primary/40 group-hover/item:bg-gold group-hover/item:scale-150 transition-all" />
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex gap-2">
            <Link
              href="/admissions"
              className="group relative overflow-hidden px-6 py-2 rounded-lg font-medium bg-primary text-primary-foreground shadow-sm hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
            >
              <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
              <span className="relative">Apply Now</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative p-2 text-foreground hover:text-primary transition-colors z-10"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            <span className="relative w-6 h-6 grid place-items-center">
              <Menu
                className={cn(
                  'w-6 h-6 absolute transition-all duration-300',
                  isOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'
                )}
              />
              <X
                className={cn(
                  'w-6 h-6 absolute transition-all duration-300',
                  isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'
                )}
              />
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'lg:hidden overflow-hidden transition-all duration-300 ease-in-out',
            isOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <div className="py-4 border-t border-border/60">
            {navMenu.map((item, index) => (
              <div
                key={item.label}
                className="animate-fade-in-down"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <Link
                  href={item.href}
                  className="flex items-center justify-between px-4 py-2.5 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
                {item.submenu && (
                  <div className="pl-6 border-l-2 border-muted ml-4 my-1">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.label}
                        href={subitem.href}
                        className="block px-4 py-1.5 text-sm text-secondary hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="px-4 pt-4 mt-2 border-t border-border/60">
              <Link
                href="/admissions"
                className="block px-4 py-3 rounded-lg font-medium text-center bg-primary text-primary-foreground hover:bg-primary-dark shadow-sm hover:shadow-md transition-all"
                onClick={() => setIsOpen(false)}
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}