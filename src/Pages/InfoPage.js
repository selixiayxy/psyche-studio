import React, { useState, useRef,useEffect } from 'react';

const InfoPage = () => {
  const [hoverImage, setHoverImage] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // Image mapping for each service and keyword
  const hoverableItems = {
    // Services
    '3D Motion Design': 'http://localhost:3000/images/feature-1.png',
    'Art Direction': '/path/to/art-direction-image.jpg',
    'Installation': '/path/to/installation-image.jpg',
    'AR': '/path/to/ar-image.jpg',
    'VR': '/path/to/vr-image.jpg',
    'Artificial Intelligence Generated Content': '/path/to/ai-content-image.jpg',
    
    // Additional keywords in the description
    'technologies': '/path/to/technologies-image.jpg',
    'culture': '/path/to/culture-image.jpg',
    'merchandise': '/path/to/merchandise-image.jpg',
    'social media': '/path/to/social-media-image.jpg'
  };

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  // Function to create hoverable text
  const makeHoverable = (text, isService = false) => {
    if (hoverableItems[text]) {
      return (
        <span
          className={`hoverable-item ${isService ? 'service-item' : 'keyword-item'}`}
          onMouseEnter={() => setHoverImage(hoverableItems[text])}
          onMouseLeave={() => setHoverImage(null)}
        >
          {text}
        </span>
      );
    }
    return text;
  };

  // Function to render services with hover effect
  const renderServicesWithHover = () => {
    const services = [
      '3D Motion Design',
      'Art Direction',
      'Installation',
      'AR',
      'VR',
      'Artificial Intelligence Generated Content (AIGC)'
    ];
    
    return (
      <p className="services-list">
        {services.map((service, index) => (
          <React.Fragment key={service}>
            {makeHoverable(service, true)}
            {index < services.length - 1 && (
              index === services.length - 2 ?
              <span> and </span> :
              <span>, </span>
            )}
          </React.Fragment>
        ))}
      </p>
    );
  };

  return (
    <div className="info-page" ref={containerRef}>
      <section className="studio-description">
        <p>We are an all-female creative tech studio based on London/Shenzhen.
          At Psyche, we leverages cutting edge creative {makeHoverable('technologies')} to deliver immersive visual narratives and digital experience.
          Our work spinning around {makeHoverable('culture')}, {makeHoverable('merchandise')}, {makeHoverable('social media')}, and technology shape future-forwards stories.
        </p>
      </section>
      
      <section className="work-description">
        <p>We Work On     </p>
        {renderServicesWithHover()}
   
      </section>
      
     
        <p>Contact us at</p>
        <p className="email">psychestudio@outlook.com</p>
   
      
      {hoverImage && (
        <div
          className="hover-image"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <img src={hoverImage} alt="Hover preview" />
        </div>
      )}
    </div>
  );
};

export default InfoPage;