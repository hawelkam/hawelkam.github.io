import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './Experience.scss';
import SectionHeading from '../SectionHeading';

const Experience = () => {
    return (
        <section className="skills" id="skills">
            <SectionHeading text="Skills" />
            <Row>
                <Col>
                    <ul className="skills__list">
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>ES6</li>
                        <li>Angular</li>
                        <li>React</li>
                        <li>SASS</li>
                        <li>Bootstrap 4</li>
                        <li>AngularJS</li>
                        <li>REST</li>
                        <li>BEM</li>
                        <li>Postman</li>
                        <li>Adobe Photoshop</li>
                        <li>Git</li>
                        <li>Agile</li>
                        <li>Scrum</li>
                        <li>Adobe XD</li>
                    </ul>
                </Col>
            </Row>
            {/* <Tab.Container id="skills_tabs" defaultActiveKey="frontend">
                <Row className="skills__cards flex-column text-center">
                    <Nav variant="pills" className="skills__nav">
                        <Nav.Item className="skills__nav--wide">
                            <Nav.Link eventKey="frontend" className="skills__nav-link">
                                <FontAwesomeIcon icon={faLaptopCode}/>
                                &nbsp;&nbsp;Frontend Developer
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="skills__nav--wide">
                            <Nav.Link eventKey="editor" className="skills__nav-link">
                                <FontAwesomeIcon icon={faVideo}/>
                                &nbsp;&nbsp;Video Editor
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="skills__nav--wide">
                            <Nav.Link eventKey="journalist" className="skills__nav-link">
                                <FontAwesomeIcon icon={faGamepad}/>
                                &nbsp;&nbsp;Video Games Journalist
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content className="skills__content">
                        {Object.values(skillsTabData).map(tab => (
                            <ExperienceTab key={tab.key} data={tab} />
                        ))}
                    </Tab.Content>
                </Row>
            </Tab.Container> */}
        </section>
    )
}

export default Experience
