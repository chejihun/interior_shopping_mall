import React, { useState, useEffect } from 'react';
import './NavFadein.css';

function NavBackFadeIN() {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`showback-div ${showBackground ? 'showback-fadein' : ''}`}>
      
    </div>
  );
}

export default NavBackFadeIN;