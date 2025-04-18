import React from "react";
import About from "./About";
import ContactMe from "./ContactMe";
import Footer from "./Footer";
import MySkills from "./MySkills";
import Projects from "./Projects";
import HeroSection from "./HeroSection";

const Home = () => {
    return (
        <>
            <HeroSection />
            <MySkills />
            <About />
            <MySkills />
            <Projects />
            <ContactMe />
            <Footer />
        </>
    );
};

export default Home;
