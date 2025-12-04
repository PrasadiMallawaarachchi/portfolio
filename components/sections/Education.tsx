'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import { Education } from '@/types';

interface EducationProps {
  education: Education[];
}

export default function EducationSection({ education }: EducationProps) {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic journey and qualifications
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline line */}
              {index !== education.length - 1 && (
                <div className="absolute left-6 md:left-8 top-16 w-0.5 h-full bg-gradient-to-b from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400" />
              )}

              <div className="flex gap-6 md:gap-8">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 flex items-center justify-center shadow-lg">
                    <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-md hover:shadow-xl transition-shadow">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-purple-600 dark:text-purple-400 font-medium mb-1">
                        {edu.field}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 font-medium">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-700 px-4 py-2 rounded-lg">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.startDate} - {edu.endDate}</span>
                    </div>
                  </div>

                  {edu.gpa && (
                    <div className="mb-3">
                      <span className="inline-block bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                        GPA: {edu.gpa}
                      </span>
                    </div>
                  )}

                  {edu.description && (
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {edu.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
