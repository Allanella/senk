'use client';

import Image from 'next/image';
import { useState } from 'react';
import { X } from 'lucide-react';

function galleryAsset(name: string) {
  return {
    imageSrc: `/${name}.webp`,
    thumbnailSrc: `/thumbs/${name}.webp`,
  }
}

const galleryItems = [
  {
    id: 1,
    category: 'campus',
    title: 'Campus View',
    ...galleryAsset('parade1'),
    description: 'A vibrant school parade captured on campus.',
  },
  {
    id: 2,
    category: 'classrooms',
    title: 'School Parade',
    ...galleryAsset('parade2'),
    description: 'Students and staff gathering with pride during a memorable event.',
  },
  {
    id: 2.5,
    category: 'classrooms',
    title: 'Classroom Learning',
    ...galleryAsset('class1'),
    description: 'A bright classroom environment where learning is actively taking place.',
  },
  {
    id: 3,
    category: 'laboratories',
    title: 'School Mass',
    ...galleryAsset('mass1'),
    description: 'Students participating in a joyful school mass celebration.',
  },
  {
    id: 4,
    category: 'sports',
    title: 'Mass Gathering',
    ...galleryAsset('mass2'),
    description: 'A meaningful gathering of students during a special school occasion.',
  },
  {
    id: 5,
    category: 'graduation',
    title: 'Community Worship',
    ...galleryAsset('mass3'),
    description: 'A peaceful moment of worship and fellowship at school.',
  },
  {
    id: 6,
    category: 'events',
    title: 'Choir Performance',
    ...galleryAsset('choir1'),
    description: 'The school choir performing with confidence and joy.',
  },
  {
    id: 7,
    category: 'boarding',
    title: 'Choir Celebration',
    ...galleryAsset('choir2'),
    description: 'A joyful choir moment celebrating music and togetherness.',
  },
  {
    id: 8,
    category: 'sports',
    title: 'Sportswear Display',
    ...galleryAsset('sportsWear1'),
    description: 'Students proudly showcasing their sportswear and team spirit.',
  },
  {
    id: 9,
    category: 'sports',
    title: 'Athletic Preparation',
    ...galleryAsset('sportsWear2'),
    description: 'A lively moment of preparation and energy before sports activities.',
  },
  {
    id: 10,
    category: 'classrooms',
    title: 'Focused Study Session',
    ...galleryAsset('class2'),
    description: 'Students engaged in focused study and academic concentration.',
  },
  {
    id: 11,
    category: 'classrooms',
    title: 'Interactive Classroom',
    ...galleryAsset('class3'),
    description: 'A lively classroom scene encouraging participation and curiosity.',
  },
  {
    id: 12,
    category: 'classrooms',
    title: 'Academic Excellence',
    ...galleryAsset('class4'),
    description: 'A classroom setting that reflects discipline, focus, and learning.',
  },
  {
    id: 13,
    category: 'campus',
    title: 'Cultural Celebration',
    ...galleryAsset('cullture1'),
    description: 'A vibrant cultural showcase celebrating heritage and creativity.',
  },
  {
    id: 14,
    category: 'campus',
    title: 'Traditional Festivity',
    ...galleryAsset('culture2'),
    description: 'Students celebrating culture with color, music, and tradition.',
  },
  {
    id: 15,
    category: 'campus',
    title: 'School Team 1',
    ...galleryAsset('team1'),
    description: 'A memorable team photo featuring students together on campus.',
  },
  {
    id: 16,
    category: 'campus',
    title: 'School Team 2',
    ...galleryAsset('team2'),
    description: 'A lively team moment captured during a school activity.',
  },
  {
    id: 17,
    category: 'campus',
    title: 'School Team 3',
    ...galleryAsset('team3'),
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

        {/* Responsive gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {filtered.map((item, index) => {
            const useImage = Boolean(item.imageSrc);
            const imageSrc = item.imageSrc ?? '';
            const isFeatured = index === 0 || index === 4;

            return (
              <div
                key={item.id}
                className={`relative group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in-up ${
                  isFeatured ? 'sm:col-span-2' : ''
                }`}
                style={{ animationDelay: `${(index % 3) * 0.08}s` }}
                onClick={() => setSelectedImage(item.id)}
              >
                <div
                  className={`relative bg-muted ${
                    isFeatured ? 'aspect-[16/10] sm:aspect-[21/9]' : 'aspect-[4/3]'
                  }`}
                >
                  {useImage ? (
                    <Image
                      src={item.thumbnailSrc ?? imageSrc}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={index === 0}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
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

                {/* Overlay — always faintly visible on touch, stronger on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="max-w-full">
                    <p className="text-white font-bold">{item.title}</p>
                    <p className="text-gold text-sm capitalize">{item.category}</p>
                    {item.description ? (
                      <p className="text-white/90 text-sm mt-1 line-clamp-2 hidden sm:block">{item.description}</p>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        {selectedItem && (
          <div
            className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-3 sm:p-6 animate-fade-in-down"
            onClick={() => setSelectedImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label={selectedItem.title}
          >
            <div
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full aspect-[4/3] max-h-[70vh] rounded-xl overflow-hidden border border-white/15 bg-black/40 shadow-2xl">
                <Image
                  src={selectedItem.imageSrc}
                  alt={selectedItem.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 900px"
                  priority
                  className="object-contain"
                />
              </div>
              <div className="mt-3 rounded-xl bg-card/95 backdrop-blur-sm px-4 py-3 border border-border">
                <p className="font-semibold text-foreground">{selectedItem.title}</p>
                <p className="text-sm text-secondary mt-1">{selectedItem.description}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute -top-2 -right-2 sm:top-3 sm:right-3 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center transition-colors border border-white/20"
                aria-label="Close gallery preview"
              >
                <X className="w-5 h-5 text-white" />
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