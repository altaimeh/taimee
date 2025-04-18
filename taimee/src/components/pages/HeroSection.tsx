import React from "react";
import professionalPicture from "../../assets/professionalPictureNoBackground.png";


const HeroSection = () => {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hi, I'm Taimee</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section-title--color">Full Stack</span>{" "}
                        <br />
                        Developer
                    </h1>
                    <p className="hero--section-description">
                        Continuous Learner • Problem Solver • Tech Enthusiast

                    </p>
                </div>
                <button className="btn btn-primary">Get In Touch</button>
            </div>
            <div className="hero--section--img">
                <img src={professionalPicture} alt="Hero Section" />
            </div>
        </section>
    );
};

export default HeroSection;
