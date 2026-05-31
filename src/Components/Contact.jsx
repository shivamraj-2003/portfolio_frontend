import React from "react";

export default function Contact() {
  const handleEmailClick = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("from_name");
    const email = formData.get("from_email");
    const message = formData.get("message");
    
    const mailtoLink = `mailto:rajshivam05012003@gmail.com?subject=Portfolio Contact from ${name}&body=From: ${name} (${email})%0D%0A%0D%0A${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div name="contact" className="bg-gradient-to-b from-gray-50 to-gray-200 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl text-center font-extrabold mb-16 text-gray-800 tracking-tight">
          Get In Touch
        </h1>

        <div className="max-w-2xl mx-auto bg-white/40 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/40">
          <p className="text-center text-gray-600 mb-10 text-lg">
            Feel free to reach out for collaborations or just a friendly hello!
          </p>
          
          <form
            onSubmit={handleEmailClick}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 ml-1">Name</label>
                <input
                  type="text"
                  name="from_name"
                  required
                  placeholder="Your Name"
                  className="w-full px-5 py-4 bg-white/50 border border-white/60 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all duration-300 outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 ml-1">Email</label>
                <input
                  type="email"
                  name="from_email"
                  required
                  placeholder="your@email.com"
                  className="w-full px-5 py-4 bg-white/50 border border-white/60 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all duration-300 outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700 ml-1">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                placeholder="How can I help you?"
                className="w-full px-5 py-4 bg-white/50 border border-white/60 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all duration-300 outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold py-4 rounded-2xl shadow-lg hover:shadow-orange-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-lg"
            >
              Send Message
            </button>
          </form>
          
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm">Direct Email</p>
            <a href="mailto:rajshivam05012003@gmail.com" className="text-orange-600 font-medium hover:underline">
              rajshivam05012003@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
