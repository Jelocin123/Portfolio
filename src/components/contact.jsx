import React from 'react'
import styles from '../style/contact.module.scss'
const contact = () => {
  return (
    <section id='contact' className={`${styles.contact}`}>
        <div className='container' id={styles.me}>
            <div className={styles.section_title}>
                <h2>
                    Kontakt
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque possimus enim distinctio illum accusamus omnis fuga beatae et? Est nulla illo minus quis et repellat delectus, assumenda repudiandae ipsam nostrum iste eum quia ullam ea ab. Consequuntur molestias odit atque quod nesciunt itaque perspiciatis sint quia natus asperiores. Sequi, tempore?</p>
            </div>
            <div className="row" data-aos="fade-in">
                <div className='col-lg-5 d-flex align-items-stretch'>
                    <div className={styles.info}>
                        <div className='address'>
                            <i className='bi bi-geo-alt'></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default contact