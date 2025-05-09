import React, { useState } from 'react';
import '../Styles/Service.css';

function ServicesCard() {
  

  const [expandedSections, setExpandedSections] = useState({
    digitalContent: false,
    artDirection: false,
    digitalArtConsultancy: false
  });

  // Toggle function for expanding/collapsing sections
  const toggleSection = (section) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section]
    });
  };
  
  return (
    <div className="services-container">
      <h1 className="main-title">Our Service</h1>
      
      {/* Digital Content Production Section */}
      <div className="section">
        <div 
          className="section-header" 
          onClick={() => toggleSection('digitalContent')}
        >
          <h2 className="section-title">Digital Content Production</h2>
          <span className={`dropdown-indicator ${expandedSections.digitalContent ? 'active' : ''}`}>v</span>
        </div>
        <div 
          className={`section-content ${expandedSections.digitalContent ? 'active' : ''}`} 
          style={{ 
            maxHeight: expandedSections.digitalContent ? '500px' : '0' 
          }}
        >
          <p>Visual Content: Including 3d motion design, animations, virtual avatars, and AIGC(Artificial Intelligence Generated Content).</p>
          <p>Interactive Design: Encompassing Digital Game, Virtual Reality, Interactive Practice, and Physical Computing.</p>
        </div>
      </div>
      
      {/* Art Direction Section */}
      <div className="section">
        <div 
          className="section-header" 
          onClick={() => toggleSection('artDirection')}
        >
          <h2 className="section-title">Art Direction & Technical Implementation</h2>
          <span className={`dropdown-indicator ${expandedSections.artDirection ? 'active' : ''}`}>v</span>
        </div>
        <div 
          className={`section-content ${expandedSections.artDirection ? 'active' : ''}`}
          style={{ 
            maxHeight: expandedSections.artDirection ? '500px' : '0' 
          }}
        >
          <p>With a wealth of experience in industries related to the digital art market, we integrate art and technology to provide creative guidance and aesthetic control for projects, ensuring a perfect presentation from concept to landing.</p>
        </div>
      </div>
      
      {/* Digital Art Consultancy Section */}
      <div className="section">
        <div 
          className="section-header" 
          onClick={() => toggleSection('digitalArtConsultancy')}
        >
          <h2 className="section-title">Digital Art Consultancy</h2>
          <span className={`dropdown-indicator ${expandedSections.digitalArtConsultancy ? 'active' : ''}`}>v</span>
        </div>
        <div 
          className={`section-content ${expandedSections.digitalArtConsultancy ? 'active' : ''}`}
          style={{ 
            maxHeight: expandedSections.digitalArtConsultancy ? '500px' : '0' 
          }}
        >
          <p>In addition, we offer systematic and comprehensive educational content, bridging industry expertise with academic insight. Our consultancy covers the full journey from ideation to technical implementation. And, we provide consultancy services for global artist visa materials (GTV, O1).</p>
        </div>
      </div>
    </div>
  );
}

export default ServicesCard;