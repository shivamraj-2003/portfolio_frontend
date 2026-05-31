import React from "react";
import b1 from "../images/banner_wallpaper.svg";

export default function Expertise() {
  return (
    <section
      id="skills"
      className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Technical Expertise
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A comprehensive skill set combining modern web technologies with
            robust problem-solving capabilities
          </p>
        </div>

        {/* Content Container */}
        <div
          style={{ backgroundImage: `url(${b1})` }}
          className="bg-cover bg-center rounded-2xl shadow-xl overflow-hidden border border-gray-100"
        >
          <div className="backdrop-blur-sm bg-white/90 p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Left Column - Description */}
              <div className="lg:w-1/2">
                <div className="max-w-lg">
                  <h3 className="text-3xl font-bold text-gray-800 mb-6">
                    Building Exceptional Digital Experiences
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    As a front-end developer, I specialize in creating clean,
                    efficient code and pixel-perfect designs. I enhance user
                    engagement through interactive web animations and ensure
                    seamless accessibility across all devices with responsive
                    design principles.
                  </p>
                  <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                    Hire Me →
                  </button>
                </div>
              </div>

              {/* Right Column - Skills */}
              <div className="lg:w-1/2">
                <div className="bg-gray-50/50 p-6 rounded-xl border border-gray-200">
                  <h4 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-3 justify-center">
                    {skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-white text-gray-700 font-medium rounded-full border border-gray-300 shadow-sm hover:shadow-md hover:border-orange-400 hover:text-orange-600 transition-all duration-200 cursor-pointer"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 text-center">
                    <p className="text-gray-600 text-sm">
                      <span className="font-semibold text-orange-500">
                        {skills.length}+
                      </span>{" "}
                      technologies mastered
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Organized skills into categories for better readability
const skills = [
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Redux",
  "Context API",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Material UI",
  "Bootstrap",
  "Bulma CSS",
  "Python",
  "FastAPI",
  "REST APIs",
  "GraphQL",
  "AWS Lambda",
  "AWS Cognito",
  "MySQL",
  "MongoDB",
  "Git & GitHub",
  "Postman",
  "Figma",
  "VS Code",
  "Responsive Design",
  "Web Animation",
  "SSR/CSR",
  "Ag-Grid",
  "Axios",
  "Problem Solving",
  "System Design",
  "Performance Optimization",
];
