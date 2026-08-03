'use client';

import Image from 'next/image';
import { facilities } from '@/lib/data';

export function FacilitiesSection() {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-down">
          <div className="inline-block px-4 py-2 rounded-full bg-gold/20 text-gold text-sm font-medium mb-4">
            World-Class Infrastructure
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Modern Facilities for Excellence
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            State-of-the-art infrastructure supporting academic achievement, personal growth, and
            student wellbeing
          </p>
        </div>

        {/* Facilities Grid - Alternating Layout */}
        <div className="space-y-16">
          {facilities.map((facility, index) => {
            const isEven = index % 2 === 0;
            const shouldShowImage = facility.name !== 'Dining Hall';

            return (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center animate-fade-in-up"
                style={{ animationDelay: `${(index % 3) * 0.1}s` }}
              >
                {/* Image - Left or Right */}
                {shouldShowImage ? (
                  <div
                    className={`relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg ${
                      isEven ? '' : 'md:order-2'
                    }`}
                  >
                    {facility.name === 'Computer Laboratory' ? (
                      <Image src="/lab1.JPG" alt={facility.name} fill className="object-cover" />
                    ) : facility.name === 'Science Laboratories' ? (
                      <Image
                        src="/scienceLab.JPG"
                        alt={facility.name}
                        fill
                        className="object-cover"
                      />
                    ) : facility.name === 'Digital Library' ? (
                      <Image src="/library.JPG" alt={facility.name} fill className="object-cover" />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-muted/40 border-2 border-dashed border-border">
                        <div className="text-center px-4">
                          <p className="text-sm font-semibold text-secondary">Image Placeholder</p>
                          <p className="text-xs text-secondary/80 mt-1">
                            Add a relevant photo later
                          </p>
                        </div>
                      </div>
                    )}
                    {/* Overlay Badge */}
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-gold text-white px-4 py-2 rounded-full text-sm font-bold">
                      {facility.capacity}
                    </div>
                  </div>
                ) : (
                  <div
                    className={`relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg border-4 border-dashed border-border bg-muted/40 ${
                      isEven ? '' : 'md:order-2'
                    }`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                      <div>
                        <p className="text-sm font-semibold text-secondary">Image Placeholder</p>
                        <p className="text-xs text-secondary/80 mt-2">Add a photo later</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Content - Right or Left */}
                <div className={`${isEven ? '' : 'md:order-1'}`}>
                  <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                    Facility {index + 1}
                  </div>

                  <h3 className="text-3xl font-bold text-foreground mb-3">{facility.name}</h3>

                  <p className="text-lg text-secondary mb-6 leading-relaxed">
                    {facility.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    {facility.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-3 p-3 rounded-lg bg-card border border-border hover:border-gold hover:bg-gold/5 transition-all duration-300"
                      >
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs font-bold">✓</span>
                        </div>
                        <span className="text-foreground font-medium text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="mt-8 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary-dark transition-all duration-300 transform hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { label: 'Labs', value: '3' },
            { label: 'Computer Labs', value: '100+' },
            { label: 'Dining Capacity', value: '600+' },
            { label: 'Boarding Students', value: '300+' },
            { label: 'Library Books', value: '5000+' },
            { label: 'Internet Speed', value: '24/7' },
          ].map((stat, index) => (
            <div
              key={index}
              className="card-premium text-center animate-fade-in-up"
              style={{ animationDelay: `${(index % 3) * 0.1}s` }}
            >
              <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-xs text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
