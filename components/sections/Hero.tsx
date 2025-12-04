'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Github, ArrowDown } from 'lucide-react';
import { Profile } from '@/types';

interface HeroProps {
  profile: Profile;
}

export default function Hero({ profile }: HeroProps) {
  const scrollToNextSection = () => {
    const educationSection = document.getElementById('education');
    if (educationSection) {
      const offset = 80;
      const elementPosition = educationSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900/20 pt-24 md:pt-32"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-purple-400 to-pink-600 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src="/profile.jpg" 
                    alt={profile.name}
                    className="w-full h-full object-cover scale-125"
                    style={{ objectPosition: 'center 30%' }}
                  />
                </div>
              </div>
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-20 blur-2xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 dark:from-purple-400 dark:via-pink-400 dark:to-purple-400 bg-clip-text text-transparent">
              {profile.name}
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-6">
              {profile.title}
            </p>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mb-8 px-4"
          >
            {profile.bio}
          </motion.p>

          {/* Contact Info */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-8"
          >
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105"
            >
              <Mail className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span className="text-sm text-gray-700 dark:text-gray-300">Email</span>
            </a>
            <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <MapPin className="w-4 h-4 text-pink-600 dark:text-pink-400" />
              <span className="text-sm text-gray-700 dark:text-gray-300">{profile.location}</span>
            </div>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105"
            >
              <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm text-gray-700 dark:text-gray-300">LinkedIn</span>
            </a>
            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105"
              >
                <Github className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                <span className="text-sm text-gray-700 dark:text-gray-300">GitHub</span>
              </a>
            )}
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.button
            onClick={scrollToNextSection}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-8 md:mt-12 mb-12 md:mb-16 flex flex-col items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors relative z-10"
          >
            <span className="text-sm font-medium">Explore More</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="w-6 h-6" />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
