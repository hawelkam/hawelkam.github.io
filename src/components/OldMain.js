import React from 'react';
import { Container } from 'react-bootstrap'
import TopBar from './TopBar/TopBar'
import Hero from './Hero/Hero'
import About from './About/About'
import Projects from './Projects/Projects';
import Companies from './Companies/Companies'
// import Testimonials from './components/Testimonials/Testimonials';
import Contact from './Contact/Contact'
import Footer from './Footer/Footer';
import Experience from './Experience/Experience';
import useSticky from '../hooks/useSticky'

const OldMain = () => {
    const { isSticky, element } = useSticky()

    return (
    <Container fluid>
        <TopBar sticky={isSticky}/>
        <Hero />
        <About element={element}/>
        <Experience />
        <Projects />
        {/* <Testimonials /> */}
        <Companies />
        <Contact />
        <Footer />
      </Container>
    )
}

export default OldMain
