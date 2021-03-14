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
        <Footer />
      </Container>
    )
}

export default OldMain
