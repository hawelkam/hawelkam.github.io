import React from 'react'
import './Hero.scss'
import { Row, Col } from 'react-bootstrap'

const Hero = () => {
    return (
        <section className="hero" id="hero">
            <Row className="hero__introduction">
                <Col xs={12} md={6} className="hero__photo">
                </Col>
                <Col className="d-flex flex-column justify-content-center">
                    <h2>About me</h2>
                    <p>
                        I'm a frontend developer for BNY Mellon. I love creating visually interesting designs and user-friendly interfaces. UX is a very important topic for me. 
                    </p>
                    <div className="mh-button__wrapper">
                        <button className="mh-button">GET MY RESUME</button>
                    </div>
                </Col>
            </Row>
        </section>
    )
}

export default Hero
