import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import MainProject from "../components/MainProject";
import ContactMe from "../components/ContactMe";
import styles from "../components/Skills.module.css";
import ParticlesComponent from "../components/ParticlesComponent";
// import Experience from "../components/Experience";

function Contact() {
  return (
    <div>
      <ParticlesComponent />
      <Header />
      <div className="min-h-screen w-screen text-white snap-y snap-mandatory overflow-x-hidden z-0">
        <section id="hero" className="h-screen snap-start">
          <Hero />
        </section>
        <section id="about" className="snap-center scroll-smooth">
          <About />
        </section>
        {/* <section id="experience" className="snap=center">
          <Experience />
        </section> */}
        <section
          id="skills"
          className={`${styles.skills_section} snap-center scroll-smooth`}
        >
          <Skills />
        </section>
        <section id="projects" className="snap-start scroll-smooth">
          <MainProject />
        </section>
        <section id="contactme" className="scroll-smooth">
          <ContactMe />
        </section>
        <section id="contactme" className="scroll-smooth">
          <Footer />
        </section>
      </div>
    </div>
  );
}

export default Contact;
