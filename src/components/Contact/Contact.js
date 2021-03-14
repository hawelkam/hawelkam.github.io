import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import './Contact.scss'
import SectionHeading from '../SectionHeading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons'
import ContactForm from './ContactForm'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default class Contact extends Component {
    render() {
        return (
            <section className="contact" id="contact">
                <SectionHeading text="Contact me"/>
                <Row className="contact__row">
                    <Col className="contact__content">
                        <p>Feel free to contact me on my email or through social media:</p>
                        <div>
                            <a href="mailto:m.hawelka@gmail.com" className="m-2"><FontAwesomeIcon icon={faEnvelope} size="2x"/></a>
                            <a href="https://github.com/hawelkam" rel="noopener noreferrer" target="_blank" className="m-2"><FontAwesomeIcon icon={faGithub} size="2x"/></a>
                            <a href="https://www.linkedin.com/in/michalhawelka/" rel="noopener noreferrer" target="_blank" className="m-2"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
                            <a href="https://medium.com/@michalhawelka" rel="noopener noreferrer" target="_blank" className="m-2"><FontAwesomeIcon icon={faMedium} size="2x" /></a>
                        </div>
                        <p>You can also use the form below.</p>
                        <ContactForm />
                    </Col>
                </Row>
            </section>
        )
    }
}