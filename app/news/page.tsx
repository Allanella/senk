import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Calendar, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'News & Events - SENK',
  description: 'Latest news, announcements, and upcoming events at St. Elizabeth Senior Secondary School.',
}

export default function NewsPage() {
  const news = [
    {
      id: 1,
      title: 'SENK Celebrates Outstanding UNEB Results',
      date: 'October 15, 2024',
      category: 'Achievements',
      excerpt: 'Our 2024 UNEB candidates achieved outstanding results with 95%+ pass rate in all subjects.',
      image: '/placeholder.jpg',
    },
    {
      id: 2,
      title: 'New Science Lab Inaugurated',
      date: 'October 10, 2024',
      category: 'Infrastructure',
      excerpt: 'State-of-the-art laboratory opens, equipped with latest scientific equipment and technology.',
      image: '/placeholder.jpg',
    },
    {
      id: 3,
      title: 'Annual Sports Day - Grand Success',
      date: 'October 5, 2024',
      category: 'Events',
      excerpt: 'Record attendance at this year\'s sports day with thrilling competitions and displays.',
      image: '/placeholder.jpg',
    },
    {
      id: 4,
      title: 'SENK Scholarship Program Expands',
      date: 'September 28, 2024',
      category: 'Admissions',
      excerpt: 'Increased scholarship opportunities for academically excellent but financially challenged students.',
      image: '/placeholder.jpg',
    },
  ]

  const events = [
    {
      title: 'Year-End Prize Giving',
      date: 'December 15, 2024',
      description: 'Celebration of student achievements and academic excellence',
    },
    {
      title: 'Staff Retreat',
      date: 'December 10, 2024',
      description: 'Professional development and planning session',
    },
    {
      title: 'New Year Orientation',
      date: 'January 5, 2025',
      description: 'Welcome program for new students',
    },
  ]

  return (
    <main className="w-full">
      <Navbar />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-primary to-primary-dark text-primary-foreground pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            News & Events
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Latest updates, announcements, and upcoming events at SENK
          </p>
        </div>
      </section>

      {/* News Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12">Latest News</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {news.map((article, index) => (
              <div key={article.id} className="card-premium overflow-hidden hover:border-gold group cursor-pointer">
                <div className="aspect-video bg-muted overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300">
                  {/* Image placeholder */}
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-gold/20 flex items-center justify-center">
                    <span className="text-secondary/50">Image</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary">
                      {article.category}
                    </span>
                    <span className="text-xs text-secondary flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-secondary text-sm">{article.excerpt}</p>

                  <div className="pt-2">
                    <a href="#" className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="section-padding bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Upcoming Events</h2>

          <div className="space-y-4">
            {events.map((event, index) => (
              <div key={index} className="card-premium p-6 hover:border-gold hover:bg-gold/5 transition-all duration-300 flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-foreground">{event.title}</h3>
                  <p className="text-sm text-gold font-medium">{event.date}</p>
                  <p className="text-secondary text-sm mt-1">{event.description}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-secondary flex-shrink-0 mt-2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg text-primary-foreground/80 mb-6">
            Subscribe to our newsletter for the latest news, events, and announcements.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/20 border border-primary-foreground/30 text-primary placeholder-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-gold text-primary font-bold hover:bg-gold-light transition-all transform hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  )
}
