import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="Header">
            <h1>Shannon McGarr</h1>
            <nav>
                <ul>
                    <li>
                        <Link to='/AboutMe'>about me</Link>
                    </li>
                    <li>
                        <Link to='/Portfolio'>portfolio</Link>
                    </li>
                    <li>
                        <Link to='/assets/smcgarr_resume_1222-06.jpg'>resume</Link>
                    </li>
                    <li>
                        <Link to='/Contact'>contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;