import React from 'react';
import styles from '../style/navbar.module.scss';
import Image from 'next/image';
import Profile from '../../public/assets/kylo.jpg';
import Link from 'next/link';

const navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth'});
    }
  };

  return (
    <header id={styles.header}>
      <div className='d-flex flex-column'>
        <div className={styles.profile}>
          <Image className='img-fluid rounded-circle mx-auto' src={Profile} alt="logo" />
          <h1 className='text-light'>
            <Link href="#">Nicolej Basse</Link>
          </h1>
          <div className={`${styles.social_links} mt-3 text-center`}>
            <Link className='twitter' href="#">
              <i className="bi bi-twitter"></i>
            </Link>
            <Link className='facebook' href="#">
              <i className="bi bi-facebook"></i>
            </Link>
            <Link className='instagram' href="#">
              <i className="bi bi-instagram"></i>
            </Link>
            <Link className='github' href="#">
              <i className="bi bi-github"></i>
            </Link>
            <Link className='linkedin' href="#">
              <i className="bi bi-linkedin"></i>
            </Link>
          </div>
        </div>
        <nav id="navbar" className={`${styles.nav_menu} navbar`}>
          <ul>
            <li>
              <a className='nav-link scrollto active' href="#" onClick={() => scrollToSection('hero')}>
                <i className="bi bi-house"></i>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a className='nav-link scrollto' href="#about" onClick={() => scrollToSection('about')}>
                <i className="bi bi-person"></i>
                <span>About</span>
              </a>
            </li>
            <li>
              <a className='nav-link scrollto' href="#kompetencer" onClick={() => scrollToSection('skills')}>
                <i className="bi bi-star"></i>
                <span>Kompetencer</span>
              </a>
            </li>
            <li>
              <a className='nav-link scrollto' href="#resume" onClick={() => scrollToSection('resume')}>
                <i className="bi bi-file-earmark"></i>
                <span>Resume</span>
              </a>
            </li>
            <li>
              <a className='nav-link scrollto' href="#portfolio" onClick={() => scrollToSection('portfolio')}>
                <i className="bi bi-journal-text"></i>
                <span>Portfolio</span>
              </a>
            </li>
            <li>
              <a className='nav-link scrollto' href="#contact" onClick={() => scrollToSection('contact')}>
                <i className="bi bi-envelope"></i>
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default navbar;
