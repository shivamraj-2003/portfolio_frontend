import React from "react";
import {
  FaAward,
  FaTrophy,
  FaGoogle,
  FaGithub,
  FaLightbulb,
  FaMedal,
  FaRocket,
} from "react-icons/fa";

const AchievementCard = ({ title, description, icon, date, category }) => {
  return (
    <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-gray-100">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-bl-full"></div>

      {/* Icon */}
      <div className="relative mb-4">
        <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white">
          {icon}
        </div>
        <span className="ml-3 px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 rounded-full">
          {category}
        </span>
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>

      {/* Date */}
      <div className="flex items-center text-sm text-gray-500">
        <svg
          className="w-4 h-4 mr-2 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        {date}
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 rounded-xl pointer-events-none transition-all duration-300"></div>
    </div>
  );
};

const Achievements = () => {
  const achievements = [
    {
      title: "Google Cloud Bootcamp Completion",
      description:
        "Successfully completed intensive Google Cloud bootcamp organized by Google and GeeksforGeeks, mastering cloud infrastructure and deployment strategies.",
      icon: <FaGoogle className="text-xl" />,
      date: "2023",
      category: "Certification",
    },
    {
      title: "Hacktoberfest 2023 Contributor",
      description:
        "Awarded Digital Reward Kit for significant open-source contributions during Hacktoberfest 2023, enhancing 15+ public repositories.",
      icon: <FaGithub className="text-xl" />,
      date: "Oct 2023",
      category: "Open Source",
    },
    {
      title: "Smart India Hackathon Winner",
      description:
        "Led team to victory in Internal College Hackathon with 'Street Light Fault Detection System' project, recognized for innovative IoT solution.",
      icon: <FaTrophy className="text-xl" />,
      date: "2022",
      category: "Hackathon",
    },
  ];

  return (
    <section
      id="achievements"
      className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 transform -skew-y-3"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-200/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-purple-200/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full text-sm font-semibold">
            <FaAward className="text-blue-600" />
            Recognition & Milestones
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Awards &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Achievements
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional recognition and significant milestones in my
            development journey
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              title={achievement.title}
              description={achievement.description}
              icon={achievement.icon}
              date={achievement.date}
              category={achievement.category}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
            <div className="text-sm font-semibold text-gray-700">
              Certifications
            </div>
            <div className="text-xs text-gray-500">Professional</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-purple-600 mb-2">2+</div>
            <div className="text-sm font-semibold text-gray-700">
              Contributions
            </div>
            <div className="text-xs text-gray-500">Open Source</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-green-600 mb-2">5+</div>
            <div className="text-sm font-semibold text-gray-700">
              Hackathons
            </div>
            <div className="text-xs text-gray-500">Participated</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Looking for a developer with a proven track record?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105"
          >
            <FaAward className="mr-3" />
            Let's Achieve Together
          </a>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
