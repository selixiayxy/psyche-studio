import React, { useState, useRef,useEffect } from 'react';

const InfoPage = () => {
  const [hoverImage, setHoverImage] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // Image mapping for each service and keyword
  const hoverableItems = {
    // Services
    '3D Motion Design': '/images/feature-1.png',
    'Art Direction': '/images/feature-3.png',
    'Installation': '/images/feature-7.png',
    'AR': '/images/feature-6.png',
    'VR': '/images/feature-4.png',
    'Artificial Intelligence Generated Content': '/images/feature-9.png',
    
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