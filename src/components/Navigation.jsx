import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav> 
            <ul>
                <li>
                    <NavLink exact to='/'>About Me</NavLink>
                </li>
                <li>
                    <NavLink exact to='/portfolio'>Portfolio</NavLink>
                </li>
                <li>
                    <NavLink exact to='/contact'>Contact</NavLink>
                </li>
                <li>
                    <NavLink exact to='/resume'>Resume</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;