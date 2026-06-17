import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

const VisitorPrompt = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    const savedName = localStorage.getItem("visitor_name");
    if (!savedName) {
      const timer = setTimeout(() => {
        setShow(true);
      }, 2000); // Show after 2 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      localStorage.setItem("visitor_name", name.trim());
      setShow(false);
      // Reload to trigger initial tracking with the name
      window.location.reload();
    }
  };

  const handleSkip = () => {
    localStorage.setItem("visitor_name", "Anonymous");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 transform transition-all animate-in fade-in zoom-in duration-300">
        <div className="text-center mb-6">
          <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-500 text-2xl">
            <FaUser />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Welcome to my Portfolio!</h2>
          <p className="text-gray-600 mt-2">May I know who's visiting?</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
          />
          <div className="flex space-x-3">
            <button
              type="button"
              onClick={handleSkip}
              className="flex-1 px-4 py-3 text-gray-500 font-semibold hover:bg-gray-100 rounded-xl transition"
            >
              Skip
            </button>
            <button
              type="submit"
              className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-3 rounded-xl shadow-lg shadow-orange-200 transition"
            >
              Let's Go
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VisitorPrompt;
