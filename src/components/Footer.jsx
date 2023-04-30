import React from 'react';
import { FaGithub, FaLinkedin,  FaTwitter} from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <section className='Footer'>
                <div>
                    <ul>
                        <li><a href='https://github.com/smcgarr13'><FaGithub /></a></li>
                        <li><a href='https://www.linkedin.com/in/shannon-mcgarr-54b147b/'><FaLinkedin /></a></li>
                        <li><a href='https://twitter.com/'><FaTwitter /></a></li>
                    </ul>
                </div>
            </section>
        </footer>
    );
};

export default Footer; 