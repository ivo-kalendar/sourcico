import React from 'react';
import { Link } from 'react-router-dom';
import { GiWhiteBook } from 'react-icons/gi';

const Navbar = () => {
    return (
        <div className='navbar bg-primary'>
            <h1>
                <GiWhiteBook /> Books
            </h1>
            <ul>
                <li>
                    <Link to='/'>Authors</Link>
                </li>
                <li>
                    <Link to='/titles'>Titles</Link>
                </li>
                <li>
                    <Link to='/series'>Series</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
