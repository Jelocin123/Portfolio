import React from 'react'
import Image from 'next/image'
import Next from '../../public/assets/next.png'
import Bootstrap from '../../public/assets/5968671.png'
import Scss from '../../public/assets/seal-black.png'
import Js from '../../public/assets/5968238.png'
import ReactImg from '../../public/assets/Layer 2.png'
import Json from '../../public/assets/pngtree-json-file-document-icon-png-image_937618.jpg'
import styles from '../style/skill.module.scss'




const skills = () => {
  return (
    <div id='skills' className='container'>

        <article className='row justify-content-center'  id={styles.comp}>

        <h3 className='text-center'>Kompetencer</h3>

        <section className='col-1 pt-4' data-aos='fade-right' data-aos-duration='900'>

        <Image className='img-fluid ' alt='Hej' src={Next}></Image>

        </section>

        <section className='col-1 pt-4' data-aos='fade-right' data-aos-duration='600' data-aos-easing="ease-in-sine">

        <Image className='img-fluid rounded-circle' alt='Hej' src={Bootstrap}></Image>

        </section>

        <section className='col-1 pt-4' data-aos='fade-right' data-aos-duration='300' data-aos-easing="ease-in-sine">

        <Image className='img-fluid ' alt='Hej' src={Scss}></Image>

        </section>

        <section className='col-1 pt-4' data-aos="fade-left" data-aos-duration='300' data-aos-easing="ease-in-sine">

        <Image className='img-fluid' alt='Hej' src={Js}></Image>

        </section>

        <section className='col-1 pt-4' data-aos="fade-left" data-aos-duration='600' data-aos-easing="ease-in-sine">

        <Image className='img-fluid' alt='Hej' src={ReactImg}></Image>

        </section>

        <section className='col-1 pt-4' data-aos="fade-left" data-aos-duration='900' data-aos-easing="ease-in-sine">

        <Image className='img-fluid'  alt='Hej' src={Json}></Image>

        </section>

        </article>



    </div>
  )
}

export default skills