
import React, { useState, useEffect } from 'react';
import '../Styles/Header.css';
import { Link } from 'react-router-dom';


function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      
      // Determine if scrolling down and past threshold
      const isScrollingDown = currentScrollPos > prevScrollPos;
      const isPastThreshold = currentScrollPos > 50;
      
      setIsVisible(!isScrollingDown || !isPastThreshold);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);
  return (
    <header className={`header ${isVisible ? 'visible' : 'hidden'}`}>
     
      <div className="logo">
      <Link to="/">
        <img src = {process.env.PUBLIC_URL + "/images/psyche-logo.png" } alt="PSCYCHE LOGO"></img>
        </Link>

      </div>
      
      
      <nav className="header-nav">
      <Link to="/work" onClick={() => console.log('Link clicked!')}>Work</Link>
      <Link to="/info">Info</Link>
              <a href="https://instagram.com" aria-label ="INSTAGRAM">
          <img src={process.env.PUBLIC_URL + "/images/instagram-logo.png"}  alt="INSTAGRAM" class="instagram-icon" href="/"></img>
        </a>
      </nav>
      

    </header>

    
  );
}

export default Header;