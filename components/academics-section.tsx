'use client'

import { useState } from 'react'
import { BookOpen, Zap, Award } from 'lucide-react'
import { academicPrograms } from '@/lib/data'
import { cn } from '@/lib/utils'

export function AcademicsSection() {
  const [activeTab, setActiveTab] = useState('ordinary')

  return (
    <section className="section-padding bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-down">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Academic Excellence
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Rigorous Programs for Every Student
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Comprehensive curriculum from Ordinary Level through Advanced Level, designed for academic excellence and UNEB success
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-4 mb-12 justify-center flex-wrap">
          <button
            onClick={() => setActiveTab('ordinary')}
            className={cn(
              'px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2',
              activeTab === 'ordinary'
                ? 'bg-primary text-primary-foreground shadow-lg transform scale-105'
                : 'bg-background text-foreground border border-border hover:border-primary'
            )}
          >
            <BookOpen className="w-5 h-5" />
            Ordinary Level
          </button>
          <button
            onClick={() => setActiveTab('advanced')}
            className={cn(
              'px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2',
              activeTab === 'advanced'
                ? 'bg-primary text-primary-foreground shadow-lg transform scale-105'
                : 'bg-background text-foreground border border-border hover:border-primary'
            )}
          >
            <Award className="w-5 h-5" />
            Advanced Level
          </button>
        </div>

        {/* Ordinary Level Content */}
        {activeTab === 'ordinary' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-fade-in-up">
            {/* Subjects */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="w-1 h-8 bg-gradient-to-b from-primary to-gold rounded-full" />
                Subjects Offered
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {academicPrograms.oLevel.subjects.map((subject, index) => (
                  <div
                    key={index}
                    className="px-4 py-3 rounded-lg bg-primary/5 border border-primary/20 text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300"
                  >
                    <p className="font-medium text-sm">{subject}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="w-1 h-8 bg-gradient-to-b from-primary to-gold rounded-full" />
                Program Features
              </h3>
              <div className="space-y-3">
                {academicPrograms.oLevel.features.map((feature, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-background border border-border hover:border-gold hover:bg-gold/5 transition-all duration-300 flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <p className="text-foreground font-medium">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Advanced Level Content */}
        {activeTab === 'advanced' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-fade-in-up">
            {/* Sciences */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-1 h-8 bg-gradient-to-b from-primary to-gold rounded-full" />
                  {academicPrograms.aLevel.sciences.name} Stream
                </h3>
                <div className="space-y-2">
                  {academicPrograms.aLevel.sciences.subjects.map((subject, index) => (
                    <div
                      key={index}
                      className="px-4 py-3 rounded-lg bg-primary/5 border border-primary/20 text-foreground hover:bg-primary/10 transition-all"
                    >
                      <p className="font-medium text-sm">{subject}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Arts */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-1 h-8 bg-gradient-to-b from-gold to-primary rounded-full" />
                  {academicPrograms.aLevel.arts.name} Stream
                </h3>
                <div className="space-y-2">
                  {academicPrograms.aLevel.arts.subjects.map((subject, index) => (
                    <div
                      key={index}
                      className="px-4 py-3 rounded-lg bg-gold/5 border border-gold/20 text-foreground hover:bg-gold/10 transition-all"
                    >
                      <p className="font-medium text-sm">{subject}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: BookOpen,
              title: 'UNEB Focused',
              description: 'Curriculum aligned with UNEB standards for maximum success',
            },
            {
              icon: Zap,
              title: 'Practical Skills',
              description: 'Hands-on learning with modern teaching methods',
            },
            {
              icon: Award,
              title: '95%+ Pass Rate',
              description: 'Consistently excellent examination results',
            },
          ].map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="card-premium text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-secondary">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
