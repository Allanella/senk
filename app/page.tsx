import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { WelcomeSection } from '@/components/welcome-section'
import { VisionMissionSection } from '@/components/vision-mission-section'
import { PillarsSection } from '@/components/pillars-section'
import { WhyChooseSection } from '@/components/why-choose-section'
import { AcademicsSection } from '@/components/academics-section'
import { SkillsSection } from '@/components/skills-section'
import { DepartmentsSection } from '@/components/departments-section'
import { FacilitiesSection } from '@/components/facilities-section'
import { StudentLifeSection } from '@/components/student-life-section'
import { GallerySection } from '@/components/gallery-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { StatisticsSection } from '@/components/statistics-section'
import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="w-full">
      <Navbar />
      <Hero />
      <WelcomeSection />
      <VisionMissionSection />
      <PillarsSection />
      <WhyChooseSection />
      <AcademicsSection />
      <SkillsSection />
      <DepartmentsSection />
      <FacilitiesSection />
      <StudentLifeSection />
      <GallerySection />
      <TestimonialsSection />
      <StatisticsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
