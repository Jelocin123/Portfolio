import React, { useEffect } from 'react';
import Image from 'next/image';
import Kylo from '../../public/assets/kylo.jpg';
import styles from '../style/about.module.scss';

const About = () => {
    

    return (
        <section id='about' className="about">
            <div className='container' id={styles.me}>
                <div className={styles.section_title}>
                <h2>About</h2>
                <p>Her er lidt Information omkring mig</p>
                </div>
                <div className={`row ${styles.section_about}`}>
                    <div className='col-lg-4' data-aos='fade-right' data-aos-duration='900'  >
                        <Image src={Kylo} alt='KyloDog' className='img-fluid  ' />
                    </div>
                    <div className='col-lg-8 pt-4 pt-lg-0 content' data-aos="fade-left" data-aos-duration='900' >
                        <h3>Nicolej Basse</h3>
                        
                        <div className='row'>
                            <div className='col-lg-6'>
                                <ul>
                                    <li>
                                        <i className='bi bi-chevron-right'></i>
                                        <strong>Fødselsdag:</strong>
                                        <span>3 Marts 2001</span>
                                    </li>
                                    <hr />
                                    <li>
                                        <i className='bi bi-chevron-right'></i>
                                        <strong>Telefon:</strong>
                                        <span>+45 93893031</span>
                                    </li>
                                    <hr />
                                    <li>
                                        <i className='bi bi-chevron-right'></i>
                                        <strong>By:</strong>
                                        <span>Grenå</span>
                                    </li>
                                    <hr />
                                    <li>
                                        <i className='bi bi-chevron-right'></i>
                                        <strong>Skole:</strong>
                                        <span>VidenDjurs 3D</span>
                                    </li>
                                    <hr />
                                </ul>
                            </div>
                            <div className='col-lg-6'>
                            <ul>
                                    <li>
                                        <i className='bi bi-chevron-right'></i>
                                        <strong>Alder:</strong>
                                        <span>22</span>
                                    </li>
                                    <hr />
                                    <li>
                                        <i className='bi bi-chevron-right'></i>
                                        <strong>Uddannelse:</strong>
                                        <span>Igangværende</span>
                                    </li>
                                    <hr />
                                    <li>
                                        <i className='bi bi-chevron-right'></i>
                                        <strong>Email</strong>
                                        <span>Nicolej.basse123@gmail.com</span>
                                    </li>
                                    <hr />
                                    <li>
                                        <i className='bi bi-chevron-right'></i>
                                        <strong>Skole mail:</strong>
                                        <span>Nico997b@videndjurs.net</span>
                                    </li>
                                    <hr />
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
