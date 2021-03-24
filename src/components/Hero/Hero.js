import React from 'react'
import './Hero.scss'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt, faUniversalAccess, faUserFriends } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
    return (
        <section className="hero" id="hero">
            <Row className="hero__introduction">
                <Col xs={12} md={6} className="hero__photo hero__about">
                </Col>
                <Col className="d-flex flex-column justify-content-center">
                    <h2>About me</h2>
                    <p>
                        I'm a frontend developer for BNY Mellon. I love creating visually interesting designs and user-friendly interfaces. I have a background in backend development as I started my IT journey in C++, then moved on to Java and eventually I found my place in frontend development. I worked with both Angular and React, but React is my technology of choice.
                    </p>
                    <div className="mh-button__wrapper">
                        <a href={process.env.PUBLIC_URL + '/mhawelka_cv.pdf'}target="_blank" rel="noreferrer noopener"><button className="mh-button">GET MY RESUME</button></a>
                    </div>
                </Col>
            </Row>
            <Row className="hero__introduction">
                <Col className="d-flex flex-column justify-content-center">
                    <h2>My key interests</h2>
                    <div className="hero__key-interests--list">
                        <Row>
                            <Col xs={3} className="d-flex align-items-center justify-content-center"><FontAwesomeIcon icon={faMobileAlt} size="5x"/></Col>
                            <Col xs={9} className="d-flex flex-column justify-content-center"><h4>Responsiveness</h4><p>Making sure the app/website works properly on a variety of devices.</p></Col>
                        </Row>
                        <Row>
                            <Col xs={3} className="d-flex align-items-center justify-content-center"><FontAwesomeIcon icon={faUserFriends} size="5x"/></Col>
                            <Col xs={9} className="d-flex flex-column justify-content-center"><h4>User Experience</h4><p>Creating easy-to-use, user-friendly designs. Focusing on customer's needs.</p></Col>
                        </Row>
                        <Row>
                            <Col xs={3} className="d-flex align-items-center justify-content-center"><FontAwesomeIcon icon={faUniversalAccess} size="5x"/></Col>
                            <Col xs={9} className="d-flex flex-column justify-content-center"><h4>Accessibility</h4><p>Making sure that users with disabilities can get the whole experience of the app/website.</p></Col>
                        </Row>
                    </div>
                </Col>
                <Col xs={12} md={6} className="hero__photo hero__key-interests">
                </Col>
            </Row>
            <Row className="hero__introduction">
                <Col xs={12} md={6} className="hero__photo">
                </Col>
                <Col className="d-flex flex-column justify-content-center">
                    <h2>On a personal note...</h2>
                    <p>
                        In my spare time I'm a runner (preparing for a marathon!), bass player, cat lover and professional (not really...) vegan food taster. I also volunteer in Otwarte Klatki where I do video editing work and act as a YouTube host.
                    </p>
                </Col>
            </Row>
        </section>
    )
}

export default Hero
