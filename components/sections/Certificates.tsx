'use client';

import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { Certificate } from '@/types';

interface CertificatesProps {
  certificates: Certificate[];
}

export default function CertificatesSection({ certificates }: CertificatesProps) {
  return (
    <section id="certificates" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            Certificates
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional certifications and achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-800/50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600"
            >
              {/* Icon */}
              <div className="mb-4 flex items-center justify-between">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Award className="w-7 h-7 text-white" />
                </div>
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
                    aria-label="View certificate"
                  >
                    <ExternalLink className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </a>
                )}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {cert.name}
                </h3>
                <p className="text-purple-600 dark:text-purple-400 font-medium mb-3">
                  {cert.issuer}
                </p>

                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{cert.date}</span>
                </div>

                {cert.credentialId && (
                  <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Credential ID
                    </p>
                    <p className="text-xs text-gray-700 dark:text-gray-300 font-mono mt-1">
                      {cert.credentialId}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
