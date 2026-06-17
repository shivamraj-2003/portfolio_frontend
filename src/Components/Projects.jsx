import React, { useState, useEffect } from "react";
import { trackVisit } from "../utils/analytics";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaCode,
  FaCloud,
  FaCheckCircle,
  FaGlobe,
  FaServer,
  FaShieldAlt,
  FaHome,
  FaWpforms,
  FaFileAlt,
  FaDumbbell,
} from "react-icons/fa";

const projects = [
  {
    title: "Revomo Enterprise B2B SaaS Platform",
    description:
      "Scalable full-stack SaaS solution with AWS Cognito SSO, advanced data filtering, real-time alerts, and role-based access control.",
    technology: [
      "React.js",
      "TypeScript",
      "Redux",
      "Material UI",
      "AWS Cognito",
      "FastAPI",
      "Docker",
      "MongoDB",
    ],
    highlights: [
      "AWS Cognito SSO & RBAC",
      "Advanced server-side filtering",
      "Real-time alerting system",
      "Enterprise-grade performance",
    ],
    projectUrl: "https://revomo.app/",
    githubUrl: "#",
    category: "Enterprise",
    featured: true,
    metrics: [
      "1,000+ daily users",
      "40% reduced monitoring",
      "25% fewer UX issues",
    ],
    icon: <FaShieldAlt className="text-indigo-500" />,
  },
  {
    title: "Property Management Dashboard",
    description:
      "Full-featured property management web application with interactive dashboards, analytics, and role-based authentication system.",
    technology: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Tailwind CSS",
      "JWT Auth",
      "Chart.js",
    ],
    highlights: [
      "Role-based authentication (Admin/Tenant/Owner)",
      "Interactive analytics dashboards",
      "Real-time property metrics",
      "Secure PostgreSQL backend",
      "RESTful API with FastAPI",
    ],
    projectUrl: "https://erp.dxnorion.com/",
    githubUrl: "#",
    category: "Full Stack",
    featured: true,
    metrics: [
      "Multi-role access control",
      "Real-time analytics",
      "Database optimization",
      "Responsive dashboards",
    ],
    icon: <FaHome className="text-teal-500" />,
  },
  {
    title: "JSON Schema Form Generator",
    description:
      "Dynamic form generator that creates interactive web forms based on JSON schemas with support for multiple input types and validation.",
    technology: [
      "React.js",
      "JavaScript",
      "JSON Schema",
      "Form Validation",
      "Tailwind CSS",
    ],
    highlights: [
      "Generates forms dynamically from JSON",
      "Supports text, email, select, textarea, checkbox",
      "Built-in validation rules",
      "Real-time form preview",
      "Schema-based configuration",
    ],
    projectUrl: "https://dynamicformzigment.netlify.app/",
    githubUrl: "#",
    category: "Developer Tool",
    featured: true,
    metrics: [
      "Multiple field types",
      "Schema-driven forms",
      "Custom validation",
      "Dynamic rendering",
    ],
    icon: <FaWpforms className="text-amber-500" />,
  },
  {
    title: "NETMOS – Logistics Management Platform",
    description:
      "Logistics platform serving 1,000+ daily users with digitized workflows and secure E-KYC.",
    technology: ["React.js", "JavaScript", "HTML/CSS", "REST APIs", "SEO"],
    highlights: [
      "Reusable UI architecture",
      "Digitized paper-based workflows",
      "Secure E-KYC implementation",
    ],
    projectUrl: "https://netmos.com/",
    githubUrl: "#",
    category: "Professional",
    featured: true,
    metrics: ["1,000+ daily users", "20% revenue boost"],
    icon: <FaServer className="text-blue-500" />,
  },
  {
    title: "File Compress & Converter Tool",
    description:
      "Web-based utility for compressing image file sizes and converting images into PDF or Word document formats with adjustable settings.",
    technology: [
      "React.js",
      "Vite",
      "JavaScript",
      "HTML/CSS",
      "File Processing",
      "Netlify",
    ],
    highlights: [
      "Image compression with size/quality controls",
      "Convert images to PDF format",
      "Simple step workflow",
      "Client-side file processing",
    ],
    projectUrl: "https://file-compress.netlify.app/",
    githubUrl: "#", // Add your actual GitHub URL here
    category: "Utility Tool",
    metrics: [
      "Adjustable compression",
      "Multi-format output",
      "No server upload",
    ],
    icon: <FaFileAlt className="text-red-500" />,
  },
  {
    title: "Weather Forecast App",
    description:
      "Real-time weather app with location-based forecasting and responsive UI.",
    technology: ["React.js", "Tailwind CSS", "Fetch API"],
    highlights: ["Live API integration", "Location-based search"],
    projectUrl: "https://shivam-weather-forecast.netlify.app/",
    githubUrl: "#",
    category: "Web App",
    metrics: ["Real-time data", "Mobile responsive"],
    icon: <FaCloud className="text-sky-400" />,
  },
  {
    title: "Smart Todo Application",
    description:
      "Advanced task manager with due dates, filtering, and status tracking.",
    technology: ["React.js", "JavaScript", "Local Storage"],
    highlights: ["Task categorization", "Status tracking"],
    projectUrl: "https://shivamraj-todo.netlify.app",
    githubUrl: "https://github.com/shivamraj-2003/Todo-app",
    category: "Productivity",
    metrics: ["Task filtering", "Due dates"],
    icon: <FaCheckCircle className="text-green-500" />,
  },
  {
    title: "GymAI Fitness Website",
    description:
      "A modern, responsive fitness website built to attract and inform potential gym members with compelling messaging and clear business information.",
    technology: ["HTML", "CSS", "JavaScript", "Responsive Design", "Netlify"],
    highlights: [
      "Engaging 'hero' section with motivational copy",
      "Clean layout emphasizing core services",
      "Professional footer with contact info & hours",
      "Fully responsive for all devices",
    ],
    projectUrl: "https://gymai-website.netlify.app/",
    githubUrl: "#", // Remember to add your actual GitHub repo link here
    category: "Website",
    metrics: ["Fast load time", "Modern UI/UX", "Clear call-to-action"],
    icon: <FaDumbbell className="text-rose-600" />, // Or use FaHeartbeat
  },
  {
    title: "Currency Converter",
    description:
      "Real-time currency conversion with up-to-date exchange rates.",
    technology: ["HTML", "CSS", "JavaScript"],
    highlights: ["Live exchange rates", "Clean UI"],
    projectUrl: "https://shivamcurrency-convertor.netlify.app",
    githubUrl: "https://github.com/shivamraj-2003/currency_convertor",
    category: "Utility",
    metrics: ["Multiple currencies"],
    icon: <FaGlobe className="text-purple-500" />,
  },
];

function ProjectSection() {
  useEffect(() => {
    trackVisit("projects");
  }, []);

  return (
    <section
      id="project"
      className="py-24 bg-gradient-to-b from-white to-gray-100"
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold tracking-tight">
            Featured <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-500 mt-4 text-xl max-w-2xl mx-auto">
            A collection of production-ready applications and technical solutions I've built.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group"
            >
              <div className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-xl h-full border border-white/40 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10 flex flex-col">
                <div className="p-8 flex-grow">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-sm border border-orange-100">
                      {project.icon}
                    </div>
                    <span className="text-[10px] px-3 py-1 bg-white border border-gray-100 text-gray-500 rounded-full font-bold uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-orange-600 transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>
                  
                  {project.highlights && (
                    <ul className="space-y-3 mb-6">
                      {project.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="flex items-start text-sm text-gray-500 leading-tight"
                        >
                          <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="px-8 pb-8 pt-0">
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technology.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-50 border border-gray-100 rounded-lg text-xs font-semibold text-gray-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center gap-4">
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-grow bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2 font-bold shadow-lg shadow-orange-600/20 hover:shadow-orange-600/40 transition-all duration-300"
                    >
                      Live Demo <FaExternalLinkAlt size={12} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3.5 bg-gray-50 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300"
                    >
                      <FaGithub size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
