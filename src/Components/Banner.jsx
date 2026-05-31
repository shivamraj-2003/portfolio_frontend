import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Link } from "react-scroll";
import { trackVisit } from "../utils/analytics";
import p1 from "../images/p1.jpg";
import b1 from "../images/banner_wallpaper.svg";
import { FaDiscord, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    trackVisit("home");
    const typed = new Typed(el.current, {
      strings: [
        "Full Stack Developer",
        "Freelance Developer",
        "React & Next.js Developer",
        "Backend Developer",
      ],
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      id="home"
      style={{ backgroundImage: `url(${b1})`, backgroundSize: "cover", backgroundPosition: "center" }}
      className="w-full min-h-screen flex flex-col md:flex-row items-center pt-28 pb-20 px-4 md:px-12 lg:px-32 relative overflow-hidden"
    >
      {/* Decorative overlay */}
      <div className="absolute inset-0 bg-black/40 md:bg-black/20 pointer-events-none"></div>

      <div className="relative z-10 text-white w-full md:w-3/5 flex flex-col justify-center">
        <div className="bg-black/30 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-medium text-orange-400">Hi, I am</h3>
          <h1 className="mt-3 text-5xl md:text-7xl font-black tracking-tight">Shivam Raj</h1>
          <h2 className="mt-5 text-2xl md:text-4xl font-semibold">
            And I am{" "}
            <span className="text-orange-500 font-bold underline decoration-orange-500/30" ref={el}></span>
          </h2>
          
          <div className="mt-8 space-y-4 text-gray-200 leading-relaxed text-lg">
            <p>
              I build <span className="text-white font-bold italic">scalable, production-ready web applications</span> with a strong focus on performance, security, and clean architecture.
            </p>
            <p className="hidden md:block">
              Specializing in <span className="text-orange-300 font-semibold">React, Next.js, and FastAPI</span>, I transform complex ideas into intuitive digital products that scale effortlessly.
            </p>
          </div>

          <div className="flex mt-10 space-x-4">
            {[
              { icon: <FaDiscord />, link: "https://discord.com/channels/@mev" },
              { icon: <FaTwitter />, link: "https://twitter.com/ShivamRaj_2003" },
              { icon: <FaGithub />, link: "https://github.com/shivamraj-2003" },
              { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/shivam-raj-b8a680230/" },
            ].map((social, idx) => (
              <a
                key={idx}
                className="w-12 h-12 rounded-xl flex justify-center items-center bg-white/10 hover:bg-orange-600 border border-white/20 transition-all duration-300 text-2xl"
                href={social.link}
                target="_blank"
                rel="noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link
              to="contact"
              smooth
              duration={500}
              className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-2xl shadow-xl shadow-orange-600/20 text-center transition-all duration-300 cursor-pointer"
            >
              Contact Me
            </Link>
            <Link
              to="project"
              smooth
              duration={500}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl border border-white/30 backdrop-blur-md text-center transition-all duration-300 cursor-pointer"
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex justify-center md:justify-end w-full md:w-2/5 mt-16 md:mt-0">
        <div className="relative">
          <div className="absolute inset-0 bg-orange-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <img
            className="relative rounded-3xl w-64 h-64 md:w-80 md:h-80 object-cover shadow-2xl border-4 border-white/10 grayscale hover:grayscale-0 transition-all duration-700"
            src={p1}
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
}
