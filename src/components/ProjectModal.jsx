import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X, Calendar, Code, Users, Shield, Zap, FileText, ArrowRight, ChevronRight, Link as LinkIcon, Image as ImageIcon, Lightbulb, BarChart3, Cog, Palette, } from 'lucide-react';
import { useState } from 'react';

export const ProjectModal = ({ project, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  
  if (!isOpen || !project) return null;

  // Helper function to render tech stack
  const renderTechStack = (techObj) => {
    return Object.entries(techObj).map(([category, technologies]) => (
      <div key={category} className="mb-4">
        <h4 className="font-medium text-sm text-neutral-700 dark:text-neutral-300 mb-2 capitalize">
          {category.replace(/([A-Z])/g, ' $1')}
        </h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2.5 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    ));
  };

  // Helper function to render flow steps
  const renderFlow = (flowObj) => {
    return Object.entries(flowObj).map(([flowName, steps]) => (
      <div key={flowName} className="mb-6">
        <h4 className="font-medium text-sm text-neutral-700 dark:text-neutral-300 mb-3 capitalize">
          {flowName.replace(/([A-Z])/g, ' $1')}
        </h4>
        <div className="space-y-2 pl-2 border-l-2 border-blue-200 dark:border-blue-800">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mt-0.5 mr-2">
                <span className="text-xs font-medium text-blue-600 dark:text-blue-400">{index + 1}</span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">{step}</p>
            </div>
          ))}
        </div>
      </div>
    ));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white dark:bg-neutral-900 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {project.image && (
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                >
                  <X className="size-5 text-white" />
                </button>
              </div>
            )}
            
            <div className="p-6 overflow-y-auto flex-1">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">{project.title}</h2>
                  <div className="flex items-center text-neutral-500 dark:text-neutral-400 mt-1">
                    <Calendar className="size-4 mr-1" />
                    <span>{project.period}</span>
                    {project.status && (
                      <>
                        <span className="mx-2">•</span>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${project.status === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400'}`}>
                          {project.status}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Tabs */}
              <div className="flex border-b border-neutral-200 dark:border-neutral-700 mb-6 overflow-x-auto">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${activeTab === 'overview' ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400' : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300'}`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('details')}
                  className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${activeTab === 'details' ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400' : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300'}`}
                >
                  Details
                </button>
                <button
                  onClick={() => setActiveTab('tech')}
                  className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${activeTab === 'tech' ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400' : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300'}`}
                >
                  Technology
                </button>
                {project.screenshots && project.screenshots.length > 0 && (
                  <button
                    onClick={() => setActiveTab('screenshots')}
                    className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${activeTab === 'screenshots' ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400' : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300'}`}
                  >
                    Screenshots
                  </button>
                )}
              </div>
              
              {/* Tab Content */}
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-3 flex items-center">
                      <FileText className="size-5 mr-2 text-blue-500" />
                      Description
                    </h3>
                    <p className="text-neutral-700 dark:text-neutral-300">{project.description || project.blurb}</p>
                  </div>
                  
                  {project.features && project.features.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-3 flex items-center">
                        <Zap className="size-5 mr-2 text-yellow-500" />
                        Key Features
                      </h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {project.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <ChevronRight className="size-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span className="text-sm text-neutral-700 dark:text-neutral-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {project.highlights && project.highlights.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-3 flex items-center">
                        <Lightbulb className="size-5 mr-2 text-purple-500" />
                        Highlights
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.highlights.map((highlight, index) => (
                          <span
                            key={index}
                            className="px-3 py-1.5 text-xs font-medium rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
              
              {activeTab === 'details' && (
                <div className="space-y-6">
                  {project.role && (
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-3 flex items-center">
                        <Users className="size-5 mr-2 text-blue-500" />
                        My Role
                      </h3>
                      <p className="text-neutral-700 dark:text-neutral-300">{project.role}</p>
                    </div>
                  )}
                  
                  {project.flows && Object.keys(project.flows).length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-3 flex items-center">
                        <BarChart3 className="size-5 mr-2 text-green-500" />
                        Workflow & Processes
                      </h3>
                      {renderFlow(project.flows)}
                    </div>
                  )}
                  
                  {project.futureImprovements && project.futureImprovements.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-3 flex items-center">
                        <Cog className="size-5 mr-2 text-amber-500" />
                        Future Improvements
                      </h3>
                      <ul className="space-y-2">
                        {project.futureImprovements.map((improvement, index) => (
                          <li key={index} className="flex items-start">
                            <ArrowRight className="size-4 text-amber-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span className="text-sm text-neutral-700 dark:text-neutral-300">{improvement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
              
              {activeTab === 'tech' && (
                <div className="space-y-6">
                  {project.tech && (
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-4 flex items-center">
                        <Code className="size-5 mr-2 text-blue-500" />
                        Technology Stack
                      </h3>
                      {renderTechStack(project.tech)}
                    </div>
                  )}
                  
                  {project.tags && project.tags.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-3 flex items-center">
                        <Palette className="size-5 mr-2 text-purple-500" />
                        Tags & Categories
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1.5 text-xs font-medium rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {project.license && (
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-2 flex items-center">
                        <Shield className="size-5 mr-2 text-green-500" />
                        License
                      </h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">{project.license}</p>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'screenshots' && project.screenshots && project.screenshots.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-4 flex items-center">
                    <ImageIcon className="size-5 mr-2 text-blue-500" />
                    Screenshots
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.screenshots.map((screenshot, index) => (
                      <div key={index} className="rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700">
                        <img 
                          src={screenshot} 
                          alt={`${project.title} screenshot ${index + 1}`}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="p-6 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row gap-4">
              {project.links?.repo && (
                <a
                  href={project.links.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                >
                  <Github className="size-5" />
                  <span>View Code</span>
                </a>
              )}
              {project.links?.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                >
                  <ExternalLink className="size-5" />
                  <span>Live Demo</span>
                </a>
              )}
              {project.links?.author && (
                <a
                  href={project.links.author}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors"
                >
                  <Users className="size-5" />
                  <span>About Author</span>
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};