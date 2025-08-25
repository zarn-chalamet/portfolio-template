import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Database, Cloud, Sparkles } from 'lucide-react';

const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

const Introduction = ({ profile }) => {
  return (
    <section id="about" className="py-16 md:py-20 bg-gradient-to-br from-white via-blue-50/20 to-purple-50/20 dark:from-neutral-900 dark:via-blue-950/10 dark:to-purple-950/10">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center"
        >
          {/* Photo Section - More Compact */}
          <div className="flex-shrink-0 lg:w-2/5">
            <div className="relative">
              <div className="w-48 h-48 mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl ring-2 ring-white dark:ring-neutral-800">
                <img 
                  src={profile.photo} 
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20 -z-10"></div>
              <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-blue-500/10 rounded-full"></div>
              <div className="absolute -top-3 -left-3 w-14 h-14 bg-purple-500/10 rounded-full"></div>
              
              {/* Decorative element */}
              <div className="absolute -top-2 -right-2">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-full shadow-lg">
                  <Sparkles className="size-4 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Content Section - More Compact */}
          <div className="flex-grow lg:w-3/5 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4"
            >
              <Sparkles className="size-4 mr-1" />
              Available for opportunities
            </motion.div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Crafting Digital Excellence
            </h2>
            
            <div className="mb-6">
              <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
                
                I’m a Software Engineering student with a strong passion for developing innovative applications that transform ideas into real-world impact. With hands-on expertise in full-stack development — spanning Vue, React, Spring Boot, Node and cloud technologies — I build solutions that are both technically robust and user-friendly.


              </p>
              
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                My work blends engineering excellence with intuitive design, ensuring every product is not only powerful under the hood but also seamless to use. I thrive in collaborative environments and am eager to contribute my skills to forward-thinking teams building the next generation of digital experiences.
              </p>
            </div>

            {/* Tech Interests - More Compact */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
              <motion.div 
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="flex flex-col items-center p-3 bg-white dark:bg-neutral-800 rounded-xl shadow-sm hover:shadow-md border border-neutral-100 dark:border-neutral-700 transition-all"
              >
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mb-2">
                  <Code className="size-5 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">Frontend</span>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="flex flex-col items-center p-3 bg-white dark:bg-neutral-800 rounded-xl shadow-sm hover:shadow-md border border-neutral-100 dark:border-neutral-700 transition-all"
              >
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mb-2">
                  <Cpu className="size-5 text-purple-600 dark:text-purple-400" />
                </div>
                <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">AI/ML</span>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="flex flex-col items-center p-3 bg-white dark:bg-neutral-800 rounded-xl shadow-sm hover:shadow-md border border-neutral-100 dark:border-neutral-700 transition-all"
              >
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mb-2">
                  <Database className="size-5 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">Backend</span>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="flex flex-col items-center p-3 bg-white dark:bg-neutral-800 rounded-xl shadow-sm hover:shadow-md border border-neutral-100 dark:border-neutral-700 transition-all"
              >
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mb-2">
                  <Cloud className="size-5 text-purple-600 dark:text-purple-400" />
                </div>
                <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">Cloud</span>
              </motion.div>
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-shadow"
              >
                Let's Connect
              </a>
              <a
                href="#projects"
                className="px-5 py-2.5 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-lg text-sm font-medium hover:shadow-md transition-shadow"
              >
                View My Work
              </a>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Introduction;