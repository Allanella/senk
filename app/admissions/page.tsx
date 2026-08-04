import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import {
  CheckCircle,
  FileText,
  Users,
  GraduationCap,
  Package,
  Backpack,
  Coins,
  Shirt,
  Landmark,
  Phone,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Admissions - SENK | Apply Now',
  description: 'How to apply to SENK. 2026 admission requirements, fees, application process, and important deadlines.',
}

const applicationSteps = [
  {
    step: 1,
    title: 'Obtain Form',
    description: 'Get the application form from our office or download online',
    icon: FileText,
  },
  {
    step: 2,
    title: 'Complete Form',
    description: 'Fill in all required information and attach supporting documents',
    icon: CheckCircle,
  },
  {
    step: 3,
    title: 'Submit Application',
    description: 'Submit with required documents and application fee',
    icon: Users,
  },
  {
    step: 4,
    title: 'Interview',
    description: 'Attend entrance interview and receive admission decision',
    icon: CheckCircle,
  },
]

const tuitionFees = [
  {
    title: 'Boarding Students',
    rows: [
      { label: 'S.1, S.2 & S.3', value: 'UGX 1,000,000', note: 'One Million Shillings Only' },
      { label: 'S.5', value: 'UGX 1,100,000', note: 'One Million One Hundred Thousand Shillings Only' },
    ],
  },
  {
    title: 'Day Students',
    rows: [
      { label: 'S.1, S.2 & S.3', value: 'UGX 400,000', note: 'Four Hundred Thousand Shillings Only' },
      { label: 'S.5', value: 'UGX 450,000', note: 'Four Hundred Fifty Thousand Shillings Only' },
    ],
  },
]

const functionalFees = [
  { item: 'Hair', amount: '10,000/=', frequency: 'Termly' },
  { item: 'Library fees', amount: '70,000/=', frequency: 'Once' },
  { item: 'Development fees', amount: '100,000/=', frequency: 'Once' },
  { item: 'ICT', amount: '20,000/=', frequency: 'Termly' },
  { item: 'Identity Card', amount: '20,000/=', frequency: 'Once' },
  { item: 'Project Fee (S.1 – S.3)', amount: '50,000/=', frequency: 'Termly' },
  { item: 'DIT', amount: '50,000/=', frequency: 'Termly' },
  { item: 'Other requirements', amount: '60,000/=', frequency: 'Termly' },
]

const uniformItems = [
  '2 shirts',
  '2 skirts / pairs of trousers',
  '1 necktie',
  '1 sweater',
  '1 jumper',
  '1 class t-shirt',
  '1 house t-shirt',
  '1 short',
]

const providedByschool = ['Mattress', 'Note Books (16)']

const personalItemsToBring = [
  'Art book, graph book, bible',
  'Calculator, mathematical set',
  'Hand watch',
  'School shoes, open shoes',
  'Pens and pencils',
  'Bucket and jerrycan',
  '2 long round black skirts or 2 pairs of trousers (out-of-class wear)',
  'Washing soap',
  'Beddings: 2 pairs of bedsheets, a blanket, and a mosquito net',
]

const contacts = [
  { office: "Academics Office", numbers: ['0752838370', '0704348606'] },
  { office: "Bursar's Office", numbers: ['0772405523', '0706542605'] },
]

export default function AdmissionsPage() {
  return (
    <main className="w-full">
      <Navbar />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-primary to-primary-dark text-primary-foreground pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-gold/20 text-gold text-sm font-medium mb-4">
            2026 Admissions Open
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Apply to SENK
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Join our community of achievers. Affordable, quality Catholic education awaits.
          </p>
        </div>
      </section>

      {/* Application Steps */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">How to Apply</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applicationSteps.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="card-premium text-center relative overflow-visible">
                  <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-gold text-primary font-bold flex items-center justify-center text-lg shadow-md">
                    {item.step}
                  </div>
                  <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-secondary">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="section-padding bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">2026 Admission Requirements</h2>
            <p className="text-lg text-secondary">Everything you need to bring, at a glance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Admission Document */}
            <div className="card-premium p-6">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-primary to-gold rounded-full" />
                Admission Requirements
              </h3>
              <div className="flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-secondary">
                  Certificate of PLE/UCE results or a report card from your former school.
                </span>
              </div>
            </div>

            {/* Provided by the School */}
            <div className="card-premium p-6">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-primary to-gold rounded-full" />
                Provided by the School
              </h3>
              <ul className="space-y-3">
                {providedByschool.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Package className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Personal Items to Bring */}
            <div className="card-premium p-6">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-primary to-gold rounded-full" />
                Personal Items to Bring
              </h3>
              <ul className="space-y-3">
                {personalItemsToBring.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Backpack className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-secondary text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fees */}
      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">2026 Fees Structure</h2>
            <p className="text-lg text-secondary">Affordable quality education for all</p>
          </div>

          {/* Tuition */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {tuitionFees.map((section, index) => (
              <div key={index} className="card-premium p-8">
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                  <Coins className="w-6 h-6" />
                  {section.title}
                </h3>
                <div className="space-y-4">
                  {section.rows.map((row, i) => (
                    <div key={i} className="pb-3 border-b border-border">
                      <div className="flex justify-between items-center">
                        <span className="text-foreground font-medium">{row.label}</span>
                        <span className="font-bold text-primary">{row.value}</span>
                      </div>
                      <p className="text-xs text-secondary/80 mt-1">{row.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Admission Fee highlight */}
          <div className="card-premium p-6 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gold/10 border border-gold/20">
            <div className="flex items-center gap-3">
              <FileText className="w-6 h-6 text-primary" />
              <span className="text-lg font-medium text-foreground">Admission Fee (one-time)</span>
            </div>
            <span className="text-2xl font-bold text-primary">50,000/=</span>
          </div>

          {/* Functional Fees */}
          <div className="card-premium p-6 md:p-8 mb-8 overflow-x-auto">
            <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
              <Landmark className="w-6 h-6 text-primary" />
              Other Functional Fees
            </h3>
            <p className="text-sm text-secondary mb-6">
              Payable to Equity Bank, Account No. 1012200328542
            </p>
            <table className="w-full text-left min-w-[420px]">
              <thead>
                <tr className="border-b border-border text-sm text-secondary">
                  <th className="py-2 font-medium">Item</th>
                  <th className="py-2 font-medium">Amount</th>
                  <th className="py-2 font-medium">Frequency</th>
                </tr>
              </thead>
              <tbody>
                {functionalFees.map((fee, i) => (
                  <tr key={i} className="border-b border-border/60">
                    <td className="py-2.5 text-foreground">{fee.item}</td>
                    <td className="py-2.5 text-primary font-medium">{fee.amount}</td>
                    <td className="py-2.5 text-secondary text-sm">{fee.frequency}</td>
                  </tr>
                ))}
                <tr>
                  <td className="py-3 font-bold text-foreground">Total</td>
                  <td colSpan={2} className="py-3 font-bold text-primary">
                    380,000/= for S.1 – S.3, or 330,000/= for S.5
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Uniforms */}
          <div className="card-premium p-6 md:p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Shirt className="w-6 h-6 text-primary" />
              School Uniform Requirements
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {uniformItems.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-secondary text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-border">
              <span className="text-foreground font-medium">Total Uniform Cost</span>
              <span className="text-xl font-bold text-primary">350,000/=</span>
            </div>
          </div>

          <div className="mt-8 p-6 rounded-xl bg-gold/10 border border-gold/20 text-center">
            <p className="text-foreground mb-4">
              Scholarships and payment plans available for eligible students. Contact admissions for more information.
            </p>
            <a href="/contact" className="inline-block px-6 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary-dark transition-all">
              Inquire About Scholarships
            </a>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section className="section-padding bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Admissions Contacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contacts.map((contact, index) => (
              <div key={index} className="card-premium text-center py-8 px-6">
                <div className="w-14 h-14 rounded-full bg-gold/15 flex items-center justify-center text-gold mx-auto mb-4">
                  <Phone className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{contact.office}</h3>
                <div className="flex flex-col gap-1">
                  {contact.numbers.map((number) => (
                    <a
                      key={number}
                      href={`tel:${number}`}
                      className="text-secondary hover:text-primary transition-colors"
                    >
                      {number}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Motto Banner */}
      <section className="py-10 bg-background text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-secondary mb-2">Our Motto</p>
        <p className="text-2xl md:text-3xl font-bold text-primary italic">&ldquo;Education is Light&rdquo;</p>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Ready to Apply?</h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Take the first step toward academic excellence and a transformative educational experience.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 rounded-lg bg-gold text-primary font-bold hover:bg-gold-light transition-all transform hover:scale-105"
          >
            Contact Admissions Today
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}