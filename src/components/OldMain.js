import React from 'react';
import { Container } from 'react-bootstrap'
import TopBar from './TopBar/TopBar'
import Hero from './Hero/Hero'
import Projects from './Projects/Projects';
import Companies from './Companies/Companies'
import Testimonials from './Testimonials/Testimonials';
import Contact from './Contact/Contact'
import Footer from './Footer/Footer';
import Experience from './Experience/Experience';
import { Link } from 'react-scroll';

const OldMain = () => {

    return (
    <Container fluid>
        <TopBar />
        <Hero />
        <Experience />
        <Projects />
        <Testimonials />
        <Companies />
        <Contact />
        <Link to="pageTop" spy={true} smooth={true} offset={-70} duration={500}><button>BACK TO TOP</button></Link>
        <Footer />
      </Container>
    )
}

export default OldMain
