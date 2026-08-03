'use client'

import { Trophy, Users, Star } from 'lucide-react'
import { studentLife } from '@/lib/data'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export function StudentLifeSection() {
  const [activeTab, setActiveTab] = useState('sports')

  const tabs = [
    { id: 'sports', label: 'Sports', icon: Trophy, items: studentLife.sports },
    { id: 'clubs', label: 'Clubs', icon: Users, items: studentLife.clubs },
    { id: 'leadership', label: 'Leadership', icon: Star, items: studentLife.leadership },
  ]

  return (
    <section className="section-padding bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-down">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Extracurricular Excellence
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Beyond the Classroom
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Rich opportunities for students to explore interests, develop talents, and build lasting friendships
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-4 mb-12 justify-center flex-wrap">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  'px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2',
                  activeTab === tab.id
                    ? 'bg-primary text-primary-foreground shadow-lg transform scale-105'
                    : 'bg-background text-foreground border border-border hover:border-primary'
                )}
              >
                <Icon className="w-5 h-5" />
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {tabs
            .find((tab) => tab.id === activeTab)
            ?.items.map((item, index) => (
              <div
                key={index}
                className="card-premium text-center hover:border-gold hover:bg-gold/5 animate-fade-in-up transform transition-all duration-300 group cursor-pointer"
                style={{ animationDelay: `${(index % 4) * 0.08}s` }}
              >
                <div className="flex items-center justify-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-gold group-hover:scale-110 transition-transform" />
                </div>
                <h4 className="font-bold text-foreground group-hover:text-primary transition-colors mt-3">
                  {item}
                </h4>
              </div>
            ))}
        </div>

        {/* Highlighting Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              number: '25+',
              title: 'Activities',
              description: 'Sports, clubs, and leadership opportunities',
            },
            {
              number: '80%',
              title: 'Participation',
              description: 'Students actively engaged in extracurriculars',
            },
            {
              number: '100%',
              title: 'Inclusion',
              description: 'Everyone finds their passion and fit',
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-8 border border-border text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <h4 className="text-lg font-bold text-foreground mb-2">{stat.title}</h4>
              <p className="text-secondary text-sm">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 md:p-12 text-center text-white animate-fade-in-up">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Join Our Vibrant Community</h3>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            At SENK, students develop their talents, make lifelong friends, and discover their passions through diverse extracurricular activities.
          </p>
          <button className="px-8 py-3 rounded-lg bg-gold text-primary font-bold hover:bg-gold-light transition-all duration-300 transform hover:scale-105">
            Explore Opportunities
          </button>
        </div>
      </div>
    </section>
  )
}
