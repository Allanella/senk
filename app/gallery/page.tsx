import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { GallerySection } from '@/components/gallery-section'

export const metadata: Metadata = {
  title: 'Gallery - SENK | Campus Photos',
  description: 'Explore our campus through photos of classrooms, facilities, events, and student life.',
}

export default function GalleryPage() {
  return (
    <main className="w-full">
      <Navbar />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-primary to-primary-dark text-primary-foreground pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Photo Gallery
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            A visual journey through SENK campus life and achievements
          </p>
        </div>
      </section>

      <GallerySection />

      <Footer />
    </main>
  )
}
