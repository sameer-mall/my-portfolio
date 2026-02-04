import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaDownload } from 'react-icons/fa';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'Corewell Health',
      location: 'Grand Rapids, MI',
      period: 'Apr 2024 – Present',
      points: [
        'Transformed a real-time monolithic Java application into a scalable, cloud-native microservices architecture on AWS (Python Lambdas, Redis, PostgreSQL, API Gateway), significantly reducing downtime and boosting system scalability to handle 1 million transactions daily.',
        'Migrated messaging infrastructure from ActiveMQ to Apache Kafka across 12 microservices, implementing standardized event schemas and achieving reliable processing of 80K+ messages per hour',
        'Led development of a real-time claim editing application using .NET and Oracle, driving a 35% improvement in claims payment accuracy.',
        'Designed and deployed an AI-powered search application using Snowflake Cortex Search, integrating vector embeddings, LLM grounding, and Retrieval-Augmented Generation (RAG) to deliver accurate, context-aware answers from internal documentation.',
        'Mentored junior engineers on technical design patterns and coding best practices through weekly 1 on 1s.',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'Corewell Health',
      location: 'Grand Rapids, MI',
      period: 'Nov 2021 – Apr 2024',
      points: [
        'Supported and added features to over 200 applications used across the organization (PERL, C#, Java, SQL)',
        'Repeatedly recognized as Employee of the Month for resolving the highest number of support tickets among a team of 9 developers, demonstrating exceptional problem-solving and commitment to customer satisfaction.',
        'Constructed CI/CD pipelines using GitHub Actions for .NET and Python applications reducing deployment times by 4 hours per sprint cycle',
        'Maintained and added features to Priority Health\'s EDI application responsible for processing 18 million claims and enrollment transactions a year',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'PEC Technologies',
      location: 'Grand Rapids, MI',
      period: 'May 2019 – Nov 2021',
      points: [
        'Developed a cloud-based (Azure) custom software solution for a trucking company using Angular, .NET and MySQL, enabling seamless management of invoices, parts inventory, and user accounts, improving operational efficiency and reducing manual workload.',
        'Designed and developed a scalable e-commerce platform using ASP.NET Blazor, enabling the client to reach their $2M monthly sales target by streamlining online transactions and integrating with payment and inventory systems.',
        'Actively work on and maintain 6 projects and mentor 2 software development interns',
      ],
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'Calvin University',
      location: 'Grand Rapids, MI',
      note: 'Minor in Business (Dean\'s List)',
    },
    {
      degree: 'Leadership Mastermind',
      school: 'Priority Health',
      location: 'Grand Rapids, MI',
      note: 'Prestigious 10-month leadership development program designed to cultivate individuals who drive systems-level change.',
    },
  ];

  const skills = {
    languages: ['C#', 'Python', 'PostgreSQL', 'TypeScript', 'HTML/CSS', '.NET', 'IaC', 'LLM', 'RAG', 'Snowflake'],
    technologies: ['AWS CDK', 'Jenkins', 'Angular', 'React', 'Azure', 'AMQ', 'Docker', 'Kubernetes', 'Kafka'],
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="px-6 py-12 max-w-5xl mx-auto"
    >
      {/* Experience Section */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-12"
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <h2 className="text-4xl font-bold text-blue-400 flex items-center gap-3">
            <FaBriefcase />
            Experience
          </h2>
          <a
            href="/resume.pdf"
            download="Sameer_Mall_Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-400/10 hover:bg-blue-400/20 text-blue-400 rounded-lg border border-blue-400/30 hover:border-blue-400/50 transition-all duration-300 group"
          >
            <FaDownload className="group-hover:translate-y-0.5 transition-transform duration-300" />
            <span className="font-semibold">Download Resume</span>
          </a>
        </div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="border-l-4 border-blue-400/30 pl-6 py-2"
            >
              <h3 className="text-2xl font-bold text-blue-300">{exp.title}</h3>
              <p className="text-xl text-gray-300 mt-1">{exp.company}</p>
              <p className="text-sm text-gray-400 mt-1">
                {exp.period} • {exp.location}
              </p>
              <ul className="mt-4 space-y-2">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="text-gray-300 leading-relaxed flex gap-2">
                    <span className="text-blue-400 mt-1.5">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Education Section */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-4xl font-bold text-blue-400 mb-8 flex items-center gap-3">
          <FaGraduationCap />
          Education
        </h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="border-l-4 border-blue-400/30 pl-6 py-2"
            >
              <h3 className="text-xl font-bold text-blue-300">{edu.degree}</h3>
              <p className="text-lg text-gray-300 mt-1">{edu.school}</p>
              <p className="text-sm text-gray-400 mt-1">{edu.location}</p>
              {edu.note && <p className="text-gray-300 mt-2 italic">{edu.note}</p>}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <h2 className="text-4xl font-bold text-blue-400 mb-6">Skills</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-blue-300 mb-3">Languages & Frameworks</h3>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 1.0 + index * 0.05 }}
                  className="px-4 py-2 bg-blue-400/10 border border-blue-400/30 rounded-lg text-gray-300 hover:bg-blue-400/20 transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-300 mb-3">Technologies & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {skills.technologies.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 1.2 + index * 0.05 }}
                  className="px-4 py-2 bg-blue-400/10 border border-blue-400/30 rounded-lg text-gray-300 hover:bg-blue-400/20 transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Experience;
