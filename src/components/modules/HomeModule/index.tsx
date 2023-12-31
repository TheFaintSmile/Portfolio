import React from 'react'
import {
  AboutMeSection,
  ContactSection,
  HeroSection,
  ProjectSection,
  SkillSection,
} from './v2'

export const HomeModule: React.FC = () => (
  <div className="flex flex-col gap-y-20 py-16 relative">
    <HeroSection />
    <ProjectSection />
    <SkillSection />
    <AboutMeSection />
    <ContactSection />
  </div>
)
