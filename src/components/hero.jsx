import React, { useEffect, useRef } from 'react';
import styles from '../style/hero.module.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typed from 'typed.js';

const Hero = () => {
  const typedRef = useRef(null); 

  useEffect(() => {
    AOS.init();

    const options = {
      strings: ["Designer", "Developer", "Freelancer", "Photographer"],
      typeSpeed: 150, // Adjust typing speed here
      backSpeed: 60, // Adjust erasing speed here
      backDelay: 1000, // Pause before erasing
      startDelay: 500, // Pause before typing the first text
      loop: true // Loop through the strings array
    };

    if (typedRef.current) {
      const typed = new Typed(typedRef.current, options);

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <section id={styles.hero} className='d-flex flex-column justify-content-center align-items-center'>
      <div className='hero-container' data-aos="fade-in">
        <h1>Nicolej Basse</h1>
        <p>
          Jeg er <span className={styles.hidden_quotes}>"</span>
          <span ref={typedRef} className='typed'></span>
          
        </p>
      </div>
    </section>
  );
};

export default Hero;
