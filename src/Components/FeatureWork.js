// FeatureWork.js
import React, { useState, useEffect } from 'react';
import '../Styles/FeatureWork.css';

const GalleryItem = ({ image, columns, title, subtitle }) => {
  // Determine column span class based on the columns prop
  const spanClass = `span-${columns}`;
  
  return (
    <div className={`gallery-item ${spanClass}`}>
      <div className="gallery-image-container">
       {image.endsWith('.mp4') ? (
          <video
            className="gallery-image"
            src={image}
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <img 
            src={image} 
            alt={title}
            className="gallery-image"
          />
        )}
      </div>
      <div className="gallery-caption">
        <h3 className="caption-title">{title}</h3>
        <p className="caption-subtitle">{subtitle}</p>
      </div>
    </div>
  );
};


  // Sample gallery items data
  const allGalleryItems = [
    {
      id: 1,
      image: process.env.PUBLIC_URL + "/images/mirro-psychedelic.png",
      title: "Mirror Psychedic",
      subtitle: "Real-Time Mocap Performance",
      columns: 4,
      featured: true
    },
    {
      id: 2,
      image: process.env.PUBLIC_URL + "/images/codename.png",
      title: "Codename",
      subtitle: "CG Rendering, Virtual Avatar",
      columns: 2,
      featured: true
    },
    {
      id: 3,
      image: process.env.PUBLIC_URL + "/images/psycho-pot.png",
      title: "Psycho Pot",
      subtitle: "Installation",
      columns: 3,
      featured: true
    },
    {
      id: 4,
      image: process.env.PUBLIC_URL + "/images/melisa.png",
      title: "Mellisa",
      subtitle: "Virtual Avatar",
      columns: 3,
      featured: true
    },
    {
      id: 5,
      image: process.env.PUBLIC_URL + "/images/jaskytasi.png",
      title: "JackyTsai Solo Exhibition",
      subtitle: "Exhibition Design",
      columns: 4,
      featured: true
    },
    {
      id: 6,
      image: process.env.PUBLIC_URL + "/images/zara.png",
      title: "Zara Red Pocket",
      subtitle: "Motion Design",
      columns: 2,
      featured: true
    },
    {
      id: 7,
      image: process.env.PUBLIC_URL + "/images/netrahex.png",
      title: "NetraHex",
      subtitle: "VR Experience",
      columns: 3,
    },
    {
      id: 8,
      image: process.env.PUBLIC_URL + "/images/dreamtravel.png",
      title: "Dream Travel",
      subtitle: "CG, Stylized Rendering",
      columns: 3,
    },
    {
      id: 9,
      image: process.env.PUBLIC_URL + "/images/echo.png",
      title: "Echo of Emotion",
      subtitle: "Interactive Website",
      columns: 3,
    },
    {
      id: 10,
      image: process.env.PUBLIC_URL + "/images/Rojo-AFA.png",
      title: "ROJO AFA",
      subtitle: "Projection Mapping",
      columns: 3,
    },
    {
      id: 11,
      image: process.env.PUBLIC_URL + "/images/feature-9.png",
      title: "KitchenFM",
      subtitle: "3D Motion",
      columns: 4,
    },
    {
      id: 12,
      image: process.env.PUBLIC_URL + "/images/feature-10.png",
      title: "KitchenFM",
      subtitle: "3D Motion",
      columns: 2,
    },
    {
      id: 13,
      image: process.env.PUBLIC_URL + "/images/The Way In Patterns.mp4",
      title: "The Way In Patterns",
      subtitle: "Motion Design",
      columns: 3,
    }

  
];

  const FeatureWork = ({ extended = false }) => {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
      // If extended is true, show all items (for work page)
      // Otherwise, only show featured items (for homepage)
      const filteredItems = extended 
        ? allGalleryItems 
        : allGalleryItems.filter(item => item.featured === true);
      
      setItems(filteredItems);
    }, [extended]);


 return (
    <div className="gallery-container">
      {!extended && (
        <div className="gallery-header">
          <h1 className="gallery-title">Feature Work</h1>
          <a href="/work" className="gallery-link">Explore More Projects</a>
        </div>
      )}
      
      <div className={`gallery-grid ${extended ? 'full-gallery' : ''}`}>
        {items.map((item) => (
          <GalleryItem
            key={item.id}
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
            columns={item.columns}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureWork;