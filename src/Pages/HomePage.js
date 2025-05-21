import React from 'react';
import Hero from '../Components/HeroSection';
import Services from '../Components/ServiceCard';
import FeatureWork from '../Components/FeatureWork';
import About from '../Components/About';


function HomePage() {
    return (
        <div className="Homepage">
          <main className="main-content">
          <Hero />
          <About />
          <Services />
          <FeatureWork />
          </main>
        </div>
      );
    }
    
    export default HomePage;