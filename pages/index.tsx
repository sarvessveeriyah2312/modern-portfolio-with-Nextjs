import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Experiences from '../components/Experiences'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Sarvess Veeriyah | Software Engineering Student</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

    {/* ... Header ... */}
    <Header />
    {/* ... Hero ... */}
    <section id='hero' className='snap-start'>
      <Hero />
    </section>
    {/* ... About ... */}
    <section id='about' className='snap-center'>
      <About />
    </section>
    {/* ... Experinces ... */}
    <section id='experiences' className='snap-center'> 
      <Experiences/>
    </section>
    {/* ... Skills ... */}
    <section id='skills'>
      <Skills/>
    </section>
    {/* ... Projects ... */}
    <section id='projects'>
      <Projects/>
    </section>
    {/* ... Contact ... */}


      
    </div>
  )
}

export default Home
