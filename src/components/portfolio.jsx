"use client"
import React, { useEffect, useState } from 'react'
import styles from '../style/portfolio.module.scss'
import Image from 'next/image'
import Kylo from '../../public/assets/kylo.jpg'
import PreView1 from '../../public/assets/PreView1.png'
import PreView2 from '../../public/assets/PreView2.png'
import PreView3 from '../../public/assets/PreView3.png'
import PreView4 from '../../public/assets/PreView4.png'
import PreView5 from '../../public/assets/PreView5.png'
import PreView6 from '../../public/assets/PreView6.png'
import Link from 'next/link'
// import GLightbox from 'glightbox';
// import 'glightbox/dist/css/glightbox.css';



const Portfolio = () => {

    const [activeFilter, setActiveFilter] = useState('*');

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
    };

    // useEffect(() => {
    //     const gallery = GLightbox({
    //         selector: '.portfolio-lightbox'
    //     });

    //     return () => {
    //         gallery.destroy();
    //     }
    // }, []);

    
    

  return (
    <section id='portfolio' className={`${styles.section_bg} ${styles.portfolio}`}>
        <div className='container' id={styles.me}>
                <div className={styles.section_title}>
                    <h2>Portfolio</h2>
                    <p>Her er nogle af de skole opgaver som jeg har fået lavet, der er mulighed for at vise nogle flere, hvor der er blevet arbejdet med MongoDB og Supabase.</p>
                </div>
                <div className='row' data-aos="fade-up">
                    <div className='col-lg-12 d-flex justify-content-center'>
                        <ul id={`${styles.portfolio_flters}`}>
                            <li
                                onClick={() => handleFilterClick('*')}
                                className={`${styles.filter_item} ${activeFilter === '*' ? styles.filter_active : ''}`}
                            >
                                All
                            </li>
                            
                            <li
                                onClick={() => handleFilterClick('filter-card')}
                                className={`${styles.filter_item} ${activeFilter === 'filter-card' ? styles.filter_active : ''}`}
                            >
                                Card
                            </li>
                            <li
                                onClick={() => handleFilterClick('.filter-web')}
                                className={`${styles.filter_item} ${activeFilter === 'filter-web' ? styles.filter_active : ''}`}
                            >
                                Web
                            </li>
                        </ul>
                    </div>
                </div>

            <div className={`row ${styles.portfolio_container}`} data-aos="fade-up" data-aos-delay="300" style={{position: 'relative', height: '810px'}}>
                <div className={`col-lg-4 col-md-6 ${styles.portfolio_item} filter-web`} key={1} >
                    <div className={styles.portfolio_wrap}>
                        <Image src={PreView1} alt='kylo' className={`img-fluid ${styles.img_border}`}></Image>
                        <div className={styles.portfolio_links}>
                            <Link href="/assets/PreView1.png" data-type="image" data-gallery="portfolioGallery" className='portfolio-lightbox' title='App 1 Done'>
                                <i className='bx bx-plus'></i>
                            </Link>
                            <Link href="https://portfolio-f216.vercel.app/" target='_blank' title='more Details' >
                                <i className='bx bx-link'></i>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={`col-lg-4 col-md-6 ${styles.portfolio_item} filter-card`} >
                    <div className={styles.portfolio_wrap}>
                        <Image src={PreView2} alt='kylo' className={`img-fluid ${styles.img_border}`}></Image>
                        <div className={styles.portfolio_links}>
                            <Link href="/assets/PreView2.png" data-type="image" data-gallery="portfolioGallery" className='portfolio-lightbox' title='App 2 Done'>
                                <i className='bx bx-plus'></i>
                            </Link>
                            <Link href="https://wedolight-nicolejbasse123-gmailcom.vercel.app/" target='_blank' title='more Details'>
                                <i className='bx bx-link'></i>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={`col-lg-4 col-md-6  ${styles.portfolio_item} filter-card`} >
                    <div className={styles.portfolio_wrap}>
                        <Image src={PreView3} alt='kylo' className={`img-fluid ${styles.img_border}`}></Image>
                        <div className={styles.portfolio_links}>
                            <Link href="/assets/PreView3.png" data-type="image" data-gallery="portfolioGallery" className='portfolio-lightbox' title='App 3 Done'>
                                <i className='bx bx-plus'></i>
                            </Link>
                            <Link href="https://64eefd1a10adb0575060ca24--gorgeous-alpaca-936ea1.netlify.app/" target='_blank' title='more Details'>
                                <i className='bx bx-link'></i>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={`col-lg-4 col-md-6 ${styles.portfolio_item} filter-web`}  >
                    <div className={styles.portfolio_wrap}>
                        <Image src={PreView4} alt='kylo' className={`img-fluid ${styles.img_border}`}></Image>
                        <div className={styles.portfolio_links}>
                            <Link href="/assets/PreView4.png" data-type="image" data-gallery="portfolioGallery" className='portfolio-lightbox' title='App 4 Done'>
                                <i className='bx bx-plus'></i>
                            </Link>
                            <Link href="https://remarkable-meerkat-fd3b76.netlify.app/" target='_blank' title='more Details' >
                                <i className='bx bx-link'></i>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={`col-lg-4 col-md-6 ${styles.portfolio_item} filter-card`}  >
                    <div className={styles.portfolio_wrap}>
                        <Image src={PreView5} alt='kylo' className={`img-fluid ${styles.img_border}`}></Image>
                        <div className={styles.portfolio_links}>
                            <Link href="/assets/PreView5.png" data-type="image" data-gallery="portfolioGallery" className='portfolio-lightbox' title='App 5 Done'>
                                <i className='bx bx-plus'></i>
                            </Link>
                            <Link href="https://fanciful-brioche-c8cbcf.netlify.app/" target='_blank' title='more Details' >
                                <i className='bx bx-link'></i>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={`col-lg-4 col-md-6 ${styles.portfolio_item} filter-web`}  >
                    <div className={styles.portfolio_wrap}>
                        <Image src={PreView6} alt='kylo' className={`img-fluid ${styles.img_border}`}></Image>
                        <div className={styles.portfolio_links}>
                            <Link href="/assets/PreView6.png" data-type="image" data-gallery="portfolioGallery" className='portfolio-lightbox' title='App 6 Done'>
                                <i className='bx bx-plus'></i>
                            </Link>
                            <Link href="https://react-typescript-card-nriz.vercel.app/" target='_blank' title='more Details' >
                                <i className='bx bx-link'></i>
                            </Link>
                        </div>
                    </div>
                </div>
                
            </div>

            

            
            
        </div>
    </section>
  )
}

export default Portfolio