// FeatureWork.js
import React, { useState, useEffect } from 'react';
import '../Styles/FeatureWork.css';

const GalleryItem = ({ image, columns, title, subtitle }) => {
  // Determine column span class based on the columns prop
  const spanClass = `span-${columns}`;
  
  return (
    <div className={`gallery-item ${spanClass}`}>
      <div className="gallery-image-container">
        <img 
          src={image} 
          alt={title}
          className="gallery-image"
        />
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
      image: process.env.PUBLIC_URL + "/images/feature-1.png",
      title: "KitchenFM",
      subtitle: "3D Motion",
      columns: 4,
      featured: true
    },
    {
      id: 2,
      image: process.env.PUBLIC_URL + "/images/feature-2.png",
      title: "KitchenFM",
      subtitle: "3D Motion",
      columns: 2,
      featured: true
    },
    {
      id: 3,
      image: process.env.PUBLIC_URL + "/images/feature-3.png",
      title: "KitchenFM",
      subtitle: "3D Motion",
      columns: 3,
      featured: true
    },
    {
      id: 4,
      image: process.env.PUBLIC_URL + "/images/feature-4.png",
      title: "KitchenFM",
      subtitle: "3D Motion",
      columns: 3,
      featured: true
    },
    {
      id: 5,
      image: process.env.PUBLIC_URL + "/images/feature-5.png",
      title: "KitchenFM",
      subtitle: "3D Motion",
      columns: 4,
      featured: true
    },
    {
      id: 6,
      image: process.env.PUBLIC_URL + "/images/feature-6.png",
      title: "KitchenFM",
      subtitle: "3D Motion",
      columns: 2,
      featured: true
    },
    {
      id: 7,
      image: process.env.PUBLIC_URL + "/images/feature-1.png",
      title: "KitchenFM",
      subtitle: "3D Motion",
      columns: 4,
    },
    {
      id: 8,
      image: process.env.PUBLIC_URL + "/images/feature-2.png",
      title: "KitchenFM",
      subtitle: "3D Motion",
      columns: 2,
    },
    {
      id: 9,
      image: process.env.PUBLIC_URL + "/images/feature-3.png",
      title: "KitchenFM",
      subtitle: "3D Motion",
      columns: 3,
    },
    {
      id: 10,
      image: process.env.PUBLIC_URL + "/images/feature-4.png",
      title: "KitchenFM",
      subtitle: "3D Motion",
      columns: 3,
    },
    {
      id: 11,
      image: process.env.PUBLIC_URL + "/images/feature-5.png",
      title: "KitchenFM",
      subtitle: "3D Motion",
      columns: 4,
    },
    {
      id: 12,
      image: process.env.PUBLIC_URL + "/images/feature-6.png",
      title: "KitchenFM",
      subtitle: "3D Motion",
      columns: 2,
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
          <h2 className="gallery-title">Feature Work</h2>
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