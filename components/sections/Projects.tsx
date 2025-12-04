'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import { Project } from '@/types';

interface ProjectsProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            Projects & Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Some of the projects I've worked on
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 flex items-center justify-center shadow-lg flex-shrink-0">
                    <Briefcase className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">
                      {project.role}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{project.startDate} - {project.endDate}</span>
                    </div>
                  </div>
                </div>

                {/* Links */}
                {project.links && (
                  <div className="flex gap-2">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        aria-label="View GitHub repository"
                      >
                        <Github className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                      </a>
                    )}
                    {(project.links.live || project.links.demo) && (
                      <a
                        href={project.links.live || project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        aria-label="View live demo"
                      >
                        <ExternalLink className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                      </a>
                    )}
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              {project.achievements && project.achievements.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 dark:text-gray-400 text-sm">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
