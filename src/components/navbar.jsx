import React from 'react';
import Logo from '../../public/assets/logoF.png';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../style/navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={`navbar navbar-expand-lg p-0 ${styles.navbar}`} data-bs-theme="dark">
      <div className={`container-fluid ${styles.navContainer}`}>
        <a className="navbar-brand pt-1" href="#">
          <Image src={Logo} alt="Logo" className={`logo img-fluid ${styles.logo}`} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse justify-content-center ${styles.navCenter}`} id="navbarNav">
          <ul className="navbar-nav ms-4" id={styles.navCenter}>
            <li className="nav-item">
              <a className="nav-link pt-3 mt-2" href="#">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link pt-3 mt-2" href="#">CV</a>
            </li>
            <li className="nav-item">
              <a className="nav-link pt-3 mt-2" href="#">About me</a>
            </li>
          </ul>
        </div>

        {/* Animated border wrapper */}
        <div className={`border-wrapper ${styles.borderWrapper}`}>
          <div className={`animated-border ${styles.animatedBorder}`}></div>
        </div>

        <div className={`ml-auto  ms-auto ${styles.iconsContainer}`}>
          <a className="nav-link" id={styles.mail} href="mailto:nicolej.basse123@gmail.com">
            <i className="bi bi-envelope fs-4"> <span id={styles.mail}>Nicolej.basse123@gmail.com</span></i>
          </a>
          <a id={styles.mail} href="https://github.com/Jelocin123" target='_blank'>
            <i className="bi bi-github me-2 fs-4"></i>
          </a>
          <a id={styles.mail} href="https://www.linkedin.com/in/nicolej-basse-782384268/" target='_blank'>
            <i className="bi bi-linkedin me-2 fs-4"></i>
          </a>
          <a id={styles.mail} href="https://www.facebook.com/nicolej.basse1/" target='_blank'>
            <i className="bi bi-facebook me-2 fs-4"></i>
          </a>
          <a id={styles.mail} href="https://twitter.com/N1co00" target='_blank'>
            <i className="bi bi-twitter me-2 fs-4"></i>
          </a>
          <a id={styles.mail} href="https://teams.microsoft.com/_#/conversations/48:notes?ctx=chat" target='_blank'>
            <i className="bi bi-microsoft-teams me-2 fs-4"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
