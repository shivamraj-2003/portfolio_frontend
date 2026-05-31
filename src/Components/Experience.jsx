import React, { useEffect } from "react";
import { trackVisit } from "../utils/analytics";

const Experience = () => {
  useEffect(() => {
    trackVisit("experience");
  }, []);

  const experiences = [
    {
      role: "Frontend Developer",
      company: "Remote Bricks",
      period: "January 2025 - October 2025",
      location: "Remote",
      certificate: null,
      achievements: [
        "Engineered a scalable B2B SaaS platform with robust frontend architecture and implemented secure Single Sign-On (SSO) using AWS Cognito for seamless workspace access",
        "Architected advanced nested filters with dynamic AND/OR logic, enabling granular data exploration across complex datasets",
        "Implemented server-side sorting, filtering, searching, and pagination to efficiently manage large datasets, improving performance by 35%",
        "Built a real-time Alert Module to track system events and trigger notifications, reducing manual monitoring efforts by 40%",
        "Developed a workspace management system with role-based access control (RBAC), enhancing team collaboration and data security",
        "Led UX improvements and resolved critical frontend issues, reducing user-reported problems by 25%",
      ],
    },
    {
      role: "Frontend Developer Intern",
      company: "Floww Delivery APIs",
      period: "December 8, 2024 - January 8, 2025",
      location: "Virtual (Remote)",
      certificate: "/f2.png",
      achievements: [
        "Utilized pre-designed templates to ensure 100% functionality, 90% visual appeal, and 95% user-friendliness, accelerating website development by 30-40%",
        "Assisted in troubleshooting, testing, and optimizing existing solutions, increasing effectiveness by 20%",
        "Debugged and optimized code to ensure reliable application performance, improving efficiency by 15%",
      ],
    },
    {
      role: "Frontend Developer Intern",
      company: "Floww Delivery APIs",
      period: "July 1, 2024 - August 31, 2024",
      location: "Virtual (Remote)",
      certificate: "/f1.png",
      achievements: [
        "Developed NETMOS project focusing on cohesive UI across a website with 1,000+ daily active users",
        "Created a comprehensive solution for paper-based logistics, resulting in a 20% increase in delivery market revenue and logistics employment in Northeast states",
        "Designed and implemented a robust E-KYC process for user authentication, streamlining logistics delivery and reducing onboarding time by 30%",
      ],
    },
    {
      role: "Virtual Salesforce Developer Intern",
      company: "Salesforce",
      period: "December 1, 2023 - January 31, 2024",
      location: "Virtual (Remote)",
      certificate: "/sl.pdf",
      achievements: [
        "Developed Salesforce solutions using Apex code and Lightning components",
        "Customized Salesforce configurations and implemented APIs for extended functionality",
        "Established development environment with VS Code & CLI, organized workflows, and automated processes",
        "Implemented flows, managed security protocols, and conducted comprehensive testing and debugging",
      ],
    },
  ];

  return (
    <section
      name="experience"
      className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            A journey of growth and impact across diverse projects and
            technologies
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-400 via-orange-400 to-blue-400"></div>

          {experiences.map((experience, index) => (
            <div key={index} className="relative mb-12">
              {/* Timeline Indicator */}
              <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full border-4 border-white shadow-lg"></div>

              {/* Experience Card */}
              <div
                className={`lg:w-5/12 ${
                  index % 2 === 0
                    ? "lg:mr-auto lg:pr-16"
                    : "lg:ml-auto lg:pl-16"
                }`}
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group hover:border-blue-100">
                  {/* Card Header */}
                  <div className="bg-gradient-to-r from-gray-50 to-white p-6 border-b border-gray-100">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full"></div>
                          <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                            {experience.role}
                          </h3>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                            />
                          </svg>
                          <span className="font-medium">
                            {experience.company}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col items-start sm:items-end gap-2">
                        <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-50 to-orange-50 text-blue-700 text-sm font-semibold rounded-full border border-blue-100">
                          {experience.period}
                        </span>
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          {experience.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-orange-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Key Achievements
                    </h4>
                    <div className="space-y-3">
                      {experience.achievements.map((achievement, idx) => (
                        <div
                          key={idx}
                          className="text-gray-700 leading-relaxed pl-3 border-l-2 border-blue-100 hover:border-orange-300 transition-colors duration-200"
                        >
                          {achievement}
                        </div>
                      ))}
                    </div>

                    {/* Certificate Link */}
                    {experience.certificate && (
                      <div className="mt-6 pt-6 border-t border-gray-100">
                        <a
                          href={experience.certificate}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors group/link"
                        >
                          <svg
                            className="w-5 h-5 group-hover/link:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                            />
                          </svg>
                          View Certificate
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Accent Border */}
                  <div className="h-1 bg-gradient-to-r from-blue-500 via-orange-500 to-blue-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl border border-blue-100">
            <svg
              className="w-8 h-8 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <div className="text-left">
              <p className="font-semibold text-gray-800">
                Prepared to contribute to your team's success
              </p>
              <p className="text-sm text-gray-600">
                Available for full-time opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
