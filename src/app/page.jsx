"use client"
import styles from '../style/page.module.scss'
import Navbar from '@/components/navbar'
import Sec from '../components/sec'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons';



export default function Home() {
  return (
    <main className='bg_main'>

      <Navbar/>
      <Sec/>
      
    </main>
  )
}
