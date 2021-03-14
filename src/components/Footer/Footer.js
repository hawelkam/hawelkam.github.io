import React from 'react'
import './Footer.scss';
import { Link } from 'react-scroll';


const Footer = () => {
    return (
        <footer>
            <Link to="pageTop" spy={true} smooth={true} offset={-70} duration={500}><button className="footer__back-to-top">BACK TO TOP</button></Link>
            <p>&copy; Michał Hawełka 2020, All rights reserved.</p>
            <p>Icons made by <a href="https://www.flaticon.com/authors/inipagistudio" title="inipagistudio">inipagistudio</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> | 
            Photo by <a href="https://unsplash.com/@nguyendqnhu?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Nhu Nguyen</a> on <a href="https://unsplash.com/s/photos/keyboard?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></p>
        </footer>
    )
}

export default Footer
