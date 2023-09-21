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
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero minima tenetur quibusdam doloremque, quae, perspiciatis iusto architecto voluptatibus veritatis voluptatem consequatur unde, autem doloribus omnis ex expedita! Amet perferendis exercitationem excepturi.</p>
                </div>
                <div className={`row ${styles.section_about}`}>
                    <div className='col-lg-4' data-aos='fade-right' data-aos-duration='900'  >
                        <Image src={Kylo} alt='KyloDog' className='img-fluid  ' />
                    </div>
                    <div className='col-lg-8 pt-4 pt-lg-0 content' data-aos="fade-left" data-aos-duration='900' >
                        <h3> UI Lorem ipsum dolor sit amet. Lorem, ipsum.</h3>
                        <p className='fst-italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores necessitatibus quo qui. Numquam, non ad quibusdam blanditiis vitae in?</p>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <ul>
                                    <li>
                                        <i className='bi bi-chevron-right'></i>
                                        <strong>Fødselsdag:</strong>
                                        <span>3 Marts 2001</span>
                                    </li>
                                    <li>
                                        <i className='bi bi-chevron-right'></i>
                                        <strong>Telefon:</strong>
                                        <span>+45 93893031</span>
                                    </li>
                                    <li>
                                        <i className='bi bi-chevron-right'></i>
                                        <strong>By:</strong>
                                        <span>Grenå</span>
                                    </li>
                                    <li>
                                        <i className='bi bi-chevron-right'></i>
                                        <strong>Skole:</strong>
                                        <span>VidenDjurs 3D</span>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-lg-6'>
                            <ul>
                                    <li>
                                        <i className='bi bi-chevron-right'></i>
                                        <strong>Alder:</strong>
                                        <span>22</span>
                                    </li>
                                    <li>
                                        <i className='bi bi-chevron-right'></i>
                                        <strong>Uddannelse:</strong>
                                        <span>Igangværende</span>
                                    </li>
                                    <li>
                                        <i className='bi bi-chevron-right'></i>
                                        <strong>Email</strong>
                                        <span>Nicolej.basse123@gmail.com</span>
                                    </li>
                                    <li>
                                        <i className='bi bi-chevron-right'></i>
                                        <strong>Skole mail:</strong>
                                        <span>Nico997b@videndjurs.net</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae id odio ad pariatur eum, qui reprehenderit, quibusdam sit corporis eligendi nulla nam veritatis praesentium? Aspernatur repellat quos repellendus</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
