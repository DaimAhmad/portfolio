import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from "../../assets/Me.webp.jpg";

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Daim Ahmad - App & Web Developer" />
          </div>
          {/* Futuristic geometric shapes */}
          <div className="futuristic-shape top-left"></div>
          <div className="futuristic-shape top-right"></div>
          <div className="futuristic-shape bottom-left"></div>
          <div className="futuristic-shape bottom-right"></div>
          <div className="futuristic-shape mid-top"></div>
          <div className="futuristic-shape mid-bottom"></div>
          <div className="futuristic-shape mid-left"></div>
          <div className="futuristic-shape mid-right"></div>
          {/* Scanning line effect */}
          <div className="scan-line"></div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>4 MONTHS</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>
          </div>
          <p>
            I'm a passionate <strong>App & Web Developer</strong> with expertise in <strong>Flutter, Firebase, and the MERN stack</strong>. I create modern, responsive, and user-friendly applications for both mobile and web platforms.
          </p>
          <p>
            My experience spans from <strong>frontend UI design</strong> to <strong>backend integration</strong>, ensuring end-to-end solutions that are scalable and maintainable. I thrive in <strong>Agile environments</strong> and enjoy bringing creative ideas to life through clean and efficient code.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
