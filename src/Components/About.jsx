import React, { useEffect } from "react";
import { trackVisit } from "../utils/analytics";
import {
  FaCode,
  FaServer,
  FaCloud,
  FaDatabase,
  FaRocket,
  FaCheckCircle,
  FaGithub,
  FaUserTie,
  FaLightbulb,
  FaChartLine,
  FaShieldAlt,
  FaBriefcase,
  FaClock,
  FaBuilding,
  FaHandshake,
} from "react-icons/fa";

export default function About() {
  useEffect(() => {
    trackVisit("about");
  }, []);

  const experience = [
    {
      value: "15+",
      label: "Projects",
      suffix: "Completed",
      icon: <FaLightbulb className="text-yellow-500" />,
      gradient: "from-yellow-100 to-orange-100",
    },
    {
      value: "100%",
      label: "Project",
      suffix: "Success Rate",
      icon: <FaChartLine className="text-green-500" />,
      gradient: "from-green-100 to-emerald-100",
    },
    {
      value: "3+",
      label: "Satisfied",
      suffix: "Clients",
      icon: <FaUserTie className="text-blue-500" />,
      gradient: "from-blue-100 to-cyan-100",
    },
    {
      value: "24/7",
      label: "Dedicated",
      suffix: "Support",
      icon: <FaShieldAlt className="text-purple-500" />,
      gradient: "from-purple-100 to-pink-100",
    },
  ];

  const engagementOptions = [
    {
      title: "Full-Time",
      icon: <FaBuilding className="text-blue-600 text-2xl" />,
      description:
        "Permanent employment with dedicated focus on your organization's goals and long-term projects.",
      features: [
        "Salary + Benefits",
        "Long-term commitment",
        "Team integration",
        "Career growth",
      ],
      color: "from-blue-50 to-blue-100",
      border: "border-blue-200",
    },
    {
      title: "Contract Based",
      icon: <FaClock className="text-purple-600 text-2xl" />,
      description:
        "Fixed-term contracts for specific projects or periods with clear deliverables and timelines.",
      features: [
        "Project-based",
        "Fixed duration",
        "Clear milestones",
        "Flexible terms",
      ],
      color: "from-purple-50 to-purple-100",
      border: "border-purple-200",
    },
    {
      title: "Freelance",
      icon: <FaHandshake className="text-green-600 text-2xl" />,
      description:
        "On-demand services for specific tasks, short-term projects, or hourly consultation.",
      features: [
        "Hourly/Project rate",
        "Quick turnaround",
        "Multiple clients",
        "Remote work",
      ],
      color: "from-green-50 to-green-100",
      border: "border-green-200",
    },
  ];

  return (
    <section
      id="about"
      className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 py-20 px-4 md:px-8"
    >
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-md border border-gray-200">
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center">
                <FaBriefcase className="text-white text-sm" />
              </div>
            </div>
            <span className="text-gray-800 font-semibold text-lg">
              Full-Stack Developer
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
            Shivam Raj
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Building{" "}
            <span className="font-semibold text-blue-600">
              scalable web applications
            </span>{" "}
            with modern technologies. Open to{" "}
            <span className="font-semibold text-purple-600">
              full-time positions
            </span>
            ,{" "}
            <span className="font-semibold text-green-600">contract work</span>,
            and{" "}
            <span className="font-semibold text-cyan-600">
              freelance projects
            </span>
            .
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Column - Introduction */}
          <div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                  <FaUserTie className="text-2xl text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">About Me</h2>
                  <p className="text-gray-500">Developer & Problem Solver</p>
                </div>
              </div>

              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  Passionate about creating{" "}
                  <span className="font-medium text-blue-600">
                    elegant solutions to complex problems
                  </span>
                  , I specialize in full-stack development with a focus on
                  modern web technologies.
                </p>
                <p className="leading-relaxed">
                  My experience spans across various industries, helping
                  businesses{" "}
                  <span className="font-medium text-purple-600">
                    transform ideas into functional applications
                  </span>{" "}
                  that drive growth and efficiency.
                </p>
                <p className="leading-relaxed pt-4 font-medium">
                  Currently seeking new opportunities to contribute to
                  innovative projects and teams.
                </p>
              </div>
            </div>

            {/* Experience Stats */}
            <div className="grid grid-cols-2 gap-4">
              {experience.map((item, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${
                    item.gradient
                  } p-5 rounded-2xl shadow-sm border ${
                    index === 0
                      ? "border-yellow-200"
                      : index === 1
                      ? "border-green-200"
                      : index === 2
                      ? "border-blue-200"
                      : "border-purple-200"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 bg-white/50 rounded-lg">
                      {item.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-gray-900">
                        {item.value}
                      </div>
                    </div>
                  </div>
                  <div className="text-sm font-semibold text-gray-800">
                    {item.label}
                  </div>
                  <div className="text-xs text-gray-600">{item.suffix}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - GitHub & Current Focus */}
          <div className="space-y-8">
            {/* GitHub Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-gray-900 to-gray-700 rounded-xl">
                  <FaGithub className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">My Work</h3>
                  <p className="text-gray-500">Explore my projects and code</p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700 mb-6">
                  Check out my GitHub profile to see my latest projects,
                  contributions, and technical experiments.
                </p>

                <a
                  href="https://github.com/shivamraj-2003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 w-full px-6 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl font-semibold hover:from-gray-800 hover:to-gray-700 transition-all hover:shadow-lg"
                >
                  <FaGithub className="text-xl" />
                  View GitHub Profile
                  <span className="ml-2">→</span>
                </a>
              </div>
            </div>

            {/* Current Focus */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                  <FaRocket className="text-xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Current Focus
                  </h3>
                  <p className="text-gray-600">What I'm working on</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Modern Web Technologies
                    </h4>
                    <p className="text-gray-600 text-sm">
                      React, Next.js, TypeScript, and Node.js
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Cloud & DevOps
                    </h4>
                    <p className="text-gray-600 text-sm">AWS lambda,Cognito</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      API Development
                    </h4>
                    <p className="text-gray-600 text-sm">RESTful APIs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Engagement Options */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Open For Engagement
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Available for various types of work arrangements. Let's discuss
              how I can contribute to your team or project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {engagementOptions.map((option, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${option.color} p-6 rounded-2xl shadow-md border ${option.border} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm">
                    {option.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {option.title}
                  </h3>
                </div>

                <p className="text-gray-700 mb-6">{option.description}</p>

                <div className="space-y-2">
                  {option.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-500 text-sm flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 rounded-2xl shadow-xl text-center">
          <h3 className="text-2xl font-bold mb-4">
            Let's Build Something Amazing
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Whether you need a full-time developer, have a contract project, or
            need freelance help, I'm ready to bring your ideas to life with
            clean code and modern solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/shivamraj-2003"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-all border border-gray-300"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
