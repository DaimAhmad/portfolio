import "./portfolio.css";

import IMG1 from "../../assets/perfume.png";
// import IMG_PLACEHOLDER from "../../assets/placeholder.png"; // Example placeholder

import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "PERFUME STORE",
      img: IMG1,
      description: "A full-stack e-commerce website for perfumes.", // Slightly more descriptive
      technologies: "React.js | Node.js | Express | MongoDB", // Consistent casing
      link: "https://newproject-brown-two.vercel.app", // Added https://
      github: "https://github.com/DaimAhmad/YOUR_REPO_NAME", // Added GitHub link (replace with actual link)
    },

  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={`Screenshot of ${pro.title}`} /> {/* Improved alt text */}
            </div>
            {/* Removed intermediate content div - structure simplified */}
            <h3>{pro.title}</h3>
            <p>{pro.description}</p>
            <small className="portfolio__item-tech">{pro.technologies}</small> {/* Use small tag for tech? Optional */}

            <div className="portfolio__item-cta">
              {pro.github && ( // Conditionally render GitHub button
                 <a
                  href={pro.github}
                  target="_blank"
                  className="btn" // Using the standard button style
                  rel="noreferrer"
                 >
                  GitHub
                 </a>
              )}
              {pro.link && ( // Conditionally render Live Demo button
                <a
                  href={pro.link}
                  target="_blank"
                  className="btn btn-primary"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
