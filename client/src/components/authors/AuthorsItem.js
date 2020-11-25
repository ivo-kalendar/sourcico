import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/context';
import PropTypes from 'prop-types';

const AuthorsItem = ({ author }) => {
    const context = useContext(Context);

    const { name, books } = author;
    let { getFilteredAuthors } = context;

    const clickedName = () => {
        getFilteredAuthors(name);
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };

    return (
        <div className='card bg-light'>
            <h3 className='text-primary text-left'>
                <Link onClick={clickedName} to='/'>
                    {name}{' '}
                </Link>
                <span style={{ float: 'right' }} className='badge badge-light'>
                    author of {books} {books === 1 ? 'book' : 'books'}
                </span>
            </h3>
        </div>
    );
};

AuthorsItem.propTypes = {
    author: PropTypes.object.isRequired,
};

export default AuthorsItem;
