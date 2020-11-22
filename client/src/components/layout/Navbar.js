import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    GiSherlockHolmes,
    GiWhiteBook,
    GiBookshelf,
    GiSecretBook,
} from 'react-icons/gi';

const Navbar = () => {
    return (
        <div className='navbar bg-primary'>
            <ul className='list'>
                <li>
                    <NavLink exact to='/' activeStyle={activeStyle}>
                        <span>
                            <GiSherlockHolmes />{' '}
                        </span>
                        Authors
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/titles' activeStyle={activeStyle}>
                        <span>
                            <GiWhiteBook />{' '}
                        </span>
                        Titles
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/series' activeStyle={activeStyle}>
                        <span>
                            <GiBookshelf />{' '}
                        </span>
                        Series
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/about' activeStyle={activeStyle}>
                        <span>
                            <GiSecretBook />{' '}
                        </span>
                        About
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

const activeStyle = {
    borderBottom: '1px solid rgba(255,255,255,.7)',
    animationName: 'activeLink',
    animationDuration: '300ms',
};

export default Navbar;
