import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {

    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/AboutMe' className='nav-link'>about me</NavLink>
                </li>
                <li>
                    <NavLink to='/Portfolio' className='nav-link'>portfolio</NavLink>
                </li>
                <li>
                    <NavLink to='/resume' className='nav-link'>resume</NavLink>
                </li>
                <li>
                    <NavLink to='/Contact' className='nav-link'>contact</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;