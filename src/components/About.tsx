import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const personalInfo = [
    { label: "Full Name", value: "Quach Gia Bao" },
    // { label: "Position", value: "Backend Developer" },
    { label: "Email", value: "baoqg9104@gmail.com" },
    { label: "Phone", value: "0967508274" },
  ];

  const experiences = [
    {
      title: "Backend Developer Intern",
      company: "FPT Software",
      period: "01/2025 - 05/2025",
      description: ""
    },
  ];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const translateY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <motion.section
      id="about"
      className="py-20 bg-primary transition-colors duration-300 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      ref={ref}
    >
      <motion.div
        className="container mx-auto px-6 max-w-6xl"
        style={{ y: translateY }}
      >
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold mb-4 text-primary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-primary-500 to-pink-500 mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1 }}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Thông tin cá nhân */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-2xl font-semibold mb-6 text-primary"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Personal Information
            </motion.h3>
            <div className="space-y-4">
              {personalInfo.map((info, index) => (
                <motion.p
                  key={index}
                  className="text-lg text-secondary"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                    <span className="text-gray-700 dark:text-gray-300">{info.label}: </span>
                  <span className="font-medium">{info.value}</span>
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Kinh nghiệm làm việc */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-2xl font-semibold mb-6 text-primary"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Work Experience
            </motion.h3>
            <div className="space-y-8 border-l-4 border-primary-500 pl-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: false }}
                >
                  <motion.h4
                    className="text-xl font-semibold text-primary"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    {exp.title} @ {exp.company}
                  </motion.h4>
                  <motion.p
                    className="text-primary-600 dark:text-primary-400 mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.3 }}
                  >
                    {exp.period}
                  </motion.p>
                  <motion.p
                    className="text-secondary"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.4 }}
                  >
                    {exp.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;