import React from 'react';
import PropTypes from 'prop-types';

const AuthorsItem = ({ author }) => {
    const { name, books } = author;

    return (
        <div className='card bg-light'>
            <h3 className='text-primary text-left'>
                {name}{' '}
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
