"use client"
import React, { useState, useEffect } from 'react';
import styles from '../style/page.module.scss';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import About from '@/components/about';
import Skills from '@/components/skills';
import Resume from '@/components/resume';
import Portfolio from '@/components/portfolio';

import 'bootstrap-icons/font/bootstrap-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import GLightbox from 'glightbox';
// import 'boxicons';



export default function Home() {

//   useEffect(() => {
//     GLightbox();
//   }, []);

//   useEffect(() => {
//     AOS.init();
// }, []);

  
  return (
    <main id={styles.main}>
      <Navbar/> 
      <Hero/>
      <About/>
      <Skills/>
      <Resume/>
      <Portfolio/>
      <div></div>
     
    </main>
  );
}
