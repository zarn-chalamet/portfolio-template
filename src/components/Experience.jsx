import React from "react";
import { motion } from "framer-motion";
import be1Logo from "../assets/be1-logo.png";

const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-16 md:py-20 bg-white dark:bg-neutral-950"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Experience
          </h2>

          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-8 shadow-sm">

            <div className="flex gap-4 items-start">

              <img
                src={be1Logo}
                alt="Be1 Digital"
                className="w-12 h-12 object-contain rounded-lg"
              />

              <div>
                <h3 className="text-lg font-semibold">
                  Software Engineering Intern
                </h3>

                <p className="text-sm text-neutral-500 mb-4">
                  Be1 Digital Co., Ltd. — Thailand • 2026
                </p>

                <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                  <li>
                    Developed backend API endpoints using Java and Spring Boot
                    for enterprise web applications.
                  </li>

                  <li>
                    Implemented database queries and business logic for system
                    features.
                  </li>

                  <li>
                    Integrated frontend components using Angular to connect
                    with backend services.
                  </li>

                  <li>
                    Participated in debugging, testing, and improving system
                    functionality.
                  </li>

                  <li>
                    Collaborated with senior developers using Git and modern
                    development workflows.
                  </li>
                </ul>

                <p className="mt-4 text-sm text-neutral-500">
                  Technologies: Java • Spring Boot • Angular • REST API • Git
                </p>

              </div>

            </div>

          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Experience;