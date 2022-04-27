import React from 'react';
import '../App.css';
import { Button } from '../components/Button';
import '../components/HeroSection.css';
import { Link } from 'react-router-dom';


function HeroSection() {

  return (
    <>
    <div className='hero-container'>
      <h1>REPORTING IS IMPORTANT!</h1>
      <p>Never fail to report accidents, defective equipment and or unsafe conditions.</p>
      <div className='hero-butns'>

      <a href="/products" target="_parent">
        <Button
          className='butns'
          buttonStyle='butn--outline'
          buttonSize='butn--large'
          component={Link} to="/products"       >
          REPORT
        </Button>
        </a>
        </div>
        </div>
    </>
  );
}

export default HeroSection;