import React from 'react';
import Navigation from './Navigation';

const Header = () => {
    return (
        <header className='Header'>
            <h1>Shannon McGarr</h1>
            <Navigation />
        </header>
    );
};

export default Header;

// import React from 'react';
// import { NavLink, useLocation } from 'react-router-dom';

// const Header = () => {
//     const location = useLocation();

//     const isActive = (path) => {
//         return location.pathname === path;
//     };

//     return (
//         <header className="Header">
//             <h1>Shannon McGarr</h1>
//             <nav>
//                 <ul>
//                     {/* <li>
//                         <NavLink to='/AboutMe' className={`nav-link ${isActive('/AboutMe') ? 'active' : ''} `}>about me</NavLink>
//                     </li> */}
//                       <li>
//                         <NavLink to='/AboutMe' className='nav-link'>about me</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to='/Portfolio' className='nav-link'>portfolio</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to='/resume' className='nav-link'>resume</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to='/Contact' className='nav-link'>contact</NavLink>
//                     </li>
//                 </ul>
//             </nav>
//         </header>
//     );
// };

// export default Header;