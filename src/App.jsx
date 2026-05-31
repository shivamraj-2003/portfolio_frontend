import React from "react";
import "./App.css";
import { SnackbarProvider } from "notistack";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Components/Banner";
import About from "./Components/About";
import Expertise from "./Components/Expertise";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import ProjectSection from "./Components/Projects";
import Experience from "./Components/Experience";
import Archieve from "./Components/Archieve";
import Certificate from "./Components/Certificate";
import AdminLogin from "./Components/AdminLogin";
import AdminDashboard from "./Components/AdminDashboard";

function Portfolio() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Expertise />
      <Archieve />
      <Experience />
      <ProjectSection />
      <Certificate />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <SnackbarProvider
      maxSnack={3}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </SnackbarProvider>
  );
}

export default App;
