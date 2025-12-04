'use client';

import { motion } from 'framer-motion';
import { Code, Database, Server, Wrench } from 'lucide-react';
import { Skill } from '@/types';

interface SkillsProps {
  skills: Skill[];
}

const categoryInfo = {
  frontend: { name: 'Frontend', icon: Code, color: 'from-blue-600 to-cyan-600' },
  backend: { name: 'Backend', icon: Server, color: 'from-green-600 to-emerald-600' },
  database: { name: 'Database', icon: Database, color: 'from-orange-600 to-red-600' },
  tools: { name: 'Tools', icon: Wrench, color: 'from-purple-600 to-pink-600' },
  other: { name: 'Other', icon: Code, color: 'from-gray-600 to-gray-800' },
};

export default function SkillsSection({ skills }: SkillsProps) {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {Object.entries(groupedSkills).map(([category, categorySkills], catIndex) => {
            const info = categoryInfo[category as keyof typeof categoryInfo];
            const Icon = info.icon;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {info.name}
                  </h3>
                </div>

                <div className="space-y-4">
                  {categorySkills.map((skill, index) => (
                    <motion.div
                      key={skill.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: catIndex * 0.1 + index * 0.05 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        {skill.level && (
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        )}
                      </div>
                      {skill.level && (
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: catIndex * 0.1 + index * 0.05 + 0.2 }}
                            className={`h-full bg-gradient-to-r ${info.color} rounded-full`}
                          />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
