import React from 'react';
import { GraduationCap, Award, Calendar, BookOpen, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

const EDUCATION = [
  {
    school: "Mae Fah Luang University",
    degree: "B.Eng. in Software Engineering",
    start: "2021",
    end: "2025",
    info: ["GPA: 3.83/4.0", "Relevant: DSA, Distributed Systems, Cloud"],
    location: "Chiang Rai, Thailand",
    participations: ["Hackathon 2023", "Code Camp 2022"],
  },
];

const Education = () => {
  return (
    <section id="education" className="min-h-screen flex items-center justify-center py-12 bg-gradient-to-b from-white to-blue-50/30 dark:from-neutral-900 dark:to-blue-950/20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center justify-center p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-3">
            <GraduationCap className="size-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Education
          </h2>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            My academic journey in software engineering
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Main Education Card */}
          <div className="relative bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-lg border border-neutral-100 dark:border-neutral-700 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/5 rounded-full -translate-y-10 translate-x-10"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/5 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row gap-6">
                {/* University Logo/Badge - Now with transparent background */}
                <div className="flex-shrink-0 flex justify-center md:justify-start">
                  <div className="w-16 h-16 rounded-xl bg-transparent flex items-center justify-center p-1">
                    <img 
                      src="src/assets/logo_mfu.jpg" 
                      alt="Mae Fah Luang University Logo" 
                      className="w-full h-full object-contain rounded-md"
                    />
                  </div>
                </div>
                
                {/* Education Details */}
                <div className="flex-grow">
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">{EDUCATION[0].school}</h3>
                    <div className="flex items-center text-neutral-600 dark:text-neutral-400 mt-1 text-xs">
                      <MapPin className="size-3 mr-1" />
                      <span>{EDUCATION[0].location}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-blue-600 dark:text-blue-400 font-medium">{EDUCATION[0].degree}</p>
                    <div className="flex items-center text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                      <Calendar className="size-3 mr-1" />
                      <span>{EDUCATION[0].start} – {EDUCATION[0].end}</span>
                    </div>
                  </div>
                  
                  {/* Information */}
                  <div className="mb-4">
                    <div className="flex items-center text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      <BookOpen className="size-3 mr-1" />
                      Academic Information
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {EDUCATION[0].info.map((i) => (
                        <div key={i} className="flex items-center bg-blue-50 dark:bg-blue-900/20 rounded-md px-3 py-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
                          <span className="text-xs text-neutral-700 dark:text-neutral-300">{i}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Participations */}
                  {EDUCATION[0].participations && EDUCATION[0].participations.length > 0 && (
                    <div>
                      <div className="flex items-center text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                        <Award className="size-3 mr-1" />
                        Participations
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {EDUCATION[0].participations.map((participation) => (
                          <span
                            key={participation}
                            className="px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                          >
                            {participation}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Progress bar - more compact */}
              <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-700">
                <div className="flex justify-between text-xs text-neutral-600 dark:text-neutral-400 mb-1.5">
                  <span>Progress</span>
                  <span>87.5%</span>
                </div>
                <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-1.5">
                  <div 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-1.5 rounded-full" 
                    style={{ width: '87.5%' }}
                  ></div>
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                  Expected graduation in 2025
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional space at the bottom to ensure it's centered */}
        <div className="h-8"></div>
      </Container>
    </section>
  );
};

export default Education;