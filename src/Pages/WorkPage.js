import React, { useState } from 'react';
import Header from '../Components/Header';
import FeatureWork from '../Components/FeatureWork';
import Footer from '../Components/Footer';


function WorkPage() {
  
  const [selectedCategory, setSelectedCategory] = useState(null);
  
    
  return (
    <div className="work-page">
      <Header />
      
      <section className="page-title">
        <p>We Work On</p>
        <p>3D Motion Design, Art Direction, Installation, AR, VR and Artificial Intelligence Generated Content</p>
      </section>
      
      <section className="work-showcase">
        {/* The extended prop tells FeatureWork to show all projects */}
        <FeatureWork extended={true} />
      </section>
      
      <Footer />
    </div>
  );
}

export default WorkPage;