import React from 'react'
import styles from '../style/resume.module.scss'

const resume = () => {
  return (
    <section id="resume" className={styles.resume} data-aos="zoom-out-up">
        <div className="container" id={styles.me}>
            <div className={styles.section_title}>
                <h2>
                    Resume
                </h2>
                <p>Jeg er midt i min webudvikleruddannelse på VidenDjurs 3D College i Grenå. Efter at have udforsket forskellige muligheder <br /> fandt jeg denne uddannelse, og den føltes helt rigtig for mig. Jeg har altid nydt at bruge tid foran computeren, både til spil <br /> og til at dykke ned i emner, der interesserede mig på det tidspunkt.</p>
            </div>
            <div className='row'>
                <div className='col-lg-6 ' data-aos="fade-up">
                    <h3 className={styles.resume_title}>Oversigt</h3>
                    <div className={`${styles.resume_item} pb-0`}>
                        <h4>Nicolej Basse</h4>
                        <p><em>Jeg er en Ung gut som til dagligt bor i grenå, jeg kan godt lidt at sidde ved min Playstation og spille diverse spil, og ellers kan jeg godt lidt at sidde ved min computer og prøve at uddybe mig i nogle emner inde for kodning.</em></p>
                        <ul>
                            <li>Krattet 286, Grenå, ØST</li>
                            <li>+45 93893031</li>
                            <li>Nicolej.basse123@gmail.com</li>
                        </ul>
                    </div>
                    <h3 className={styles.resume_title}>Skole</h3>
                    <div className={styles.resume_item}>
                        <h4>Fisker (ErhvervsfiskerUddannelse)</h4>
                        <h5>2018-2019</h5>
                        <p>Jeg fik en elevplads på en lille trawlerbåd, der primært fiskede jomfruhummer. Arbejdet bestod i at opretholde bådens renlighed og altid være et skridt foran. Hurtigt etablerede jeg nogle roller som var isætning af vores net, kommunikation og fiskeafrensning samt styring af båden. Denne erfaring har lært mig en masse om mig selv og om at arbejde under pres. Jeg har indset vigtigheden af vedholdenhed i opgaveløsningen og betydningen af effektiv kommunikation og god kemi med mine medarbejdere.
                            
                        </p>
                    </div>
                    <div className={styles.resume_item}>
                        <h4>Gastronom (Kokkeuddannelse)</h4>
                        <h5>2020-2022</h5>
                        <p>
                        Efter at have afsluttet grundforløb 1 og 2 som gastronom fik jeg en praktikplads på Hotel Marina i Grenå. Kort tid efter fik jeg en elevplads på DFDS Crown Seaways, hvor jeg var ansvarlig for at tilberede måltider til personalet. Efter en kort periode blev jeg forfremmet til at have ansvaret for alle forretter og tildele opgaver.
                        </p>
                    </div>

                    <div className={styles.resume_item}>
                        <h4>Webudvikler (3D College)</h4>
                        <h5>2022-Nuværende</h5>
                        <p>
                        I august 2022 begyndte jeg på webudvikleruddannelsen i Grenå, og i løbet af sommeren 2022 har jeg bestået grundforløb 2. Jeg er nu i fuld gang med at gennemføre og afslutte uddannelsen.
                        </p>
                    </div>
                </div>
                <div className='col-lg-6' data-aos="fade-up">
                
                
                </div>
            </div>
        </div>
    </section>
  )
}

export default resume