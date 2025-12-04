'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import EducationSection from '@/components/sections/Education';
import SkillsSection from '@/components/sections/Skills';
import CertificatesSection from '@/components/sections/Certificates';
import ProjectsSection from '@/components/sections/Projects';

import { profileData } from '@/data/profile';
import { educationData } from '@/data/education';
import { skillsData } from '@/data/skills';
import { certificatesData } from '@/data/certificates';
import { projectsData } from '@/data/projects';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <Hero profile={profileData} />
      <EducationSection education={educationData} />
      <SkillsSection skills={skillsData} />
      <CertificatesSection certificates={certificatesData} />
      <ProjectsSection projects={projectsData} />
      
      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} {profileData.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
