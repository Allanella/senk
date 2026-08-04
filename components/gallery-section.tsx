'use client';

import Image from 'next/image';
import { useState } from 'react';
import { X } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    category: 'campus',
    title: 'Campus View',
    imageSrc: '/parade1.JPG',
    thumbnailSrc: '/thumbs/parade1.JPG',
    description: 'A vibrant school parade captured on campus.',
  },
  {
    id: 2,
    category: 'classrooms',
    title: 'School Parade',
    imageSrc: '/parade2.JPG',
    thumbnailSrc: '/thumbs/parade2.JPG',
    description: 'Students and staff gathering with pride during a memorable event.',
  },
  {
    id: 2.5,
    category: 'classrooms',
    title: 'Classroom Learning',
    imageSrc: '/class1.JPG',
    thumbnailSrc: '/thumbs/class1.JPG',
    description: 'A bright classroom environment where learning is actively taking place.',
  },
  {
    id: 3,
    category: 'laboratories',
    title: 'School Mass',
    imageSrc: '/mass1.JPG',
    thumbnailSrc: '/thumbs/mass1.JPG',
    description: 'Students participating in a joyful school mass celebration.',
  },
  {
    id: 4,
    category: 'sports',
    title: 'Mass Gathering',
    imageSrc: '/mass2.JPG',
    thumbnailSrc: '/thumbs/mass2.JPG',
    description: 'A meaningful gathering of students during a special school occasion.',
  },
  {
    id: 5,
    category: 'graduation',
    title: 'Community Worship',
    imageSrc: '/mass3.JPG',
    thumbnailSrc: '/thumbs/mass3.JPG',
    description: 'A peaceful moment of worship and fellowship at school.',
  },
  {
    id: 6,
    category: 'events',
    title: 'Choir Performance',
    imageSrc: '/choir1.JPG',
    thumbnailSrc: '/thumbs/choir1.JPG',
    description: 'The school choir performing with confidence and joy.',
  },
  {
    id: 7,
    category: 'boarding',
    title: 'Choir Celebration',
    imageSrc: '/choir2.JPG',
    thumbnailSrc: '/thumbs/choir2.JPG',
    description: 'A joyful choir moment celebrating music and togetherness.',
  },
  {
    id: 8,
    category: 'sports',
    title: 'Sportswear Display',
    imageSrc: '/sportsWear1.JPG',
    thumbnailSrc: '/thumbs/sportsWear1.JPG',
    description: 'Students proudly showcasing their sportswear and team spirit.',
  },
  {
    id: 9,
    category: 'sports',
    title: 'Athletic Preparation',
    imageSrc: '/sportsWear2.JPG',
    thumbnailSrc: '/thumbs/sportsWear2.JPG',
    description: 'A lively moment of preparation and energy before sports activities.',
  },
  {
    id: 10,
    category: 'classrooms',
    title: 'Focused Study Session',
    imageSrc: '/class2.JPG',
    thumbnailSrc: '/thumbs/class2.JPG',
    description: 'Students engaged in focused study and academic concentration.',
  },
  {
    id: 11,
    category: 'classrooms',
    title: 'Interactive Classroom',
    imageSrc: '/class3.JPG',
    thumbnailSrc: '/thumbs/class3.JPG',
    description: 'A lively classroom scene encouraging participation and curiosity.',
  },
  {
    id: 12,
    category: 'classrooms',
    title: 'Academic Excellence',
    imageSrc: '/class4.JPG',
    thumbnailSrc: '/thumbs/class4.JPG',
    description: 'A classroom setting that reflects discipline, focus, and learning.',
  },
  {
    id: 13,
    category: 'campus',
    title: 'Cultural Celebration',
    imageSrc: '/cullture1.JPG',
    thumbnailSrc: '/thumbs/cullture1.JPG',
    description: 'A vibrant cultural showcase celebrating heritage and creativity.',
  },
  {
    id: 14,
    category: 'campus',
    title: 'Traditional Festivity',
    imageSrc: '/culture2.JPG',
    thumbnailSrc: '/thumbs/culture2.JPG',
    description: 'Students celebrating culture with color, music, and tradition.',
  },
  {
    id: 15,
    category: 'campus',
    title: 'School Team 1',
    imageSrc: '/team1.JPG',
    thumbnailSrc: '/thumbs/team1.JPG',
    description: 'A memorable team photo featuring students together on campus.',
  },
  {
    id: 16,
    category: 'campus',
    title: 'School Team 2',
    imageSrc: '/team2.JPG',
    thumbnailSrc: '/thumbs/team2.JPG',
    description: 'A lively team moment captured during a school activity.',
  },
  {
    id: 17,
    category: 'campus',
    title: 'School Team 3',
    imageSrc: '/team3.JPG',
    thumbnailSrc: '/thumbs/team3.JPG',
    description: 'Students proudly sharing a special team memory.',
  },
];

const categories = [
  'all',
  'campus',
  'classrooms',
  'laboratories',
  'sports',
  'graduation',
  'events',
  'boarding',
  'church',
];

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filtered =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);
  const selectedItem = galleryItems.find((item) => item.id === selectedImage) ?? null;

  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-down">
          <div className="inline-block px-4 py-2 rounded-full bg-gold/20 text-gold text-sm font-medium mb-4">
            Visual Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Gallery</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Explore the vibrant campus life and facilities at SENK through our photo gallery
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex gap-3 mb-12 justify-center flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm ${
                activeCategory === cat
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card border border-border text-foreground hover:border-gold'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Masonry Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-max">
          {filtered.map((item, index) => {
            const useImage = Boolean(item.imageSrc);
            const imageSrc = item.imageSrc ?? '';

            return (
              <div
                key={item.id}
                className={`relative group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in-up ${
                  index === 0 || index === 4 ? 'lg:col-span-2 lg:row-span-2' : ''
                }`}
                style={{ animationDelay: `${(index % 3) * 0.1}s` }}
                onClick={() => setSelectedImage(item.id)}
              >
                <div
                  className={`relative ${index === 0 || index === 4 ? 'h-[400px]' : 'h-[250px]'}`}
                >
                  {useImage ? (
                    <Image
                      src={item.thumbnailSrc ?? imageSrc}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index === 0}
                      quality={60}
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-muted/40 border-2 border-dashed border-border">
                      <div className="text-center px-4">
                        <p className="text-sm font-semibold text-secondary">Image Placeholder</p>
                        <p className="text-xs text-secondary/80 mt-1">Add more photos soon</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="max-w-full">
                    <p className="text-white font-bold">{item.title}</p>
                    <p className="text-gold text-sm capitalize">{item.category}</p>
                    {item.description ? (
                      <p className="text-white/90 text-sm mt-1 line-clamp-2">{item.description}</p>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in-down">
            <div className="relative max-w-3xl w-full">
              <div className="relative w-full h-[500px] rounded-lg overflow-hidden border-4 border-border bg-muted/40">
                <Image
                  src={selectedItem.imageSrc}
                  alt={selectedItem.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 75vw"
                  priority
                  className="object-contain"
                />
              </div>
              <div className="mt-4 rounded-lg bg-background/90 px-4 py-3 text-white">
                <p className="font-semibold text-foreground">{selectedItem.title}</p>
                <p className="text-sm text-secondary mt-1">{selectedItem.description}</p>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg text-secondary mb-6">Want to share your SENK moments?</p>
          <button className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary-dark transition-all duration-300 transform hover:scale-105">
            Share Your Photos
          </button>
        </div>
      </div>
    </section>
  );
}