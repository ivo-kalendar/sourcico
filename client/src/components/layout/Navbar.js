import React from 'react';
import { Link } from 'react-router-dom';
import { GiWhiteBook } from 'react-icons/gi';

const Navbar = () => {
    return (
        <div className='navbar bg-primary'>
            <h1>
                <GiWhiteBook /> Authors
            </h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
