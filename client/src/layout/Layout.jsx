import React from "react";
// Sections
import TopNavbar from "../components/nav/TopNavbar";
import Header from "../components/sections/Header";
import Services from "../components/sections/Services";
import Projects from "../components/sections/Projects";
import Blog from "../components/sections/Blog";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer"

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Services />
      <Projects />
      <Blog />
      {/*<Pricing />*/}
      <Contact />
      <Footer />
    </>
  );
}


