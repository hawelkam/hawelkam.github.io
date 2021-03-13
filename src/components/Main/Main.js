import React from 'react';
import './Main.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div className="mh-main">
            <h1>
                Hello, I'm <span className="mh-name">Michał Hawełka</span>.<br />I'm a
            </h1>
            <div className="mh-main__buttons">
                <Link to="frontend-developer"><button className="mh-button">FRONTEND DEVELOPER&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowCircleRight} size="1x"/></button></Link>
                <Link to="video-editor"><button className="mh-button">VIDEO EDITOR&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowCircleRight} size="1x"/></button></Link>
            </div>
        </div>
    )
}

export default Main
