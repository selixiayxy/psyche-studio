import React from 'react';
import '../Styles/About.css';

function About() {
  return (
    <section className="about" id="about">
     
        <div className="about-content">
          <p className="about-text">
            At psyche, we specialize in leveraging cutting-edge
            creative technologies to deliver immersive visual
            narratives and digital experience.
          </p>
          </div>
          
          <div className="about-details">
            <p>
              Our work spanning around culture, merchandise,
              software and artforms, we pursue our vision
              forwards stroke with avant-garde aesthetic.
        
            </p>
            <p>
            Our work is driven by imagination, strengthened
              by experience, and inspired by curiosity.
              We aim to provide custom solutions that master
              creative and forward-thinking solutions.
             
            </p>
            <br></br>
            <a href="/work" className="learn-more">Learn More About Us →</a>
     
          </div>

        
  
   
    </section>
  );
}

export default About;