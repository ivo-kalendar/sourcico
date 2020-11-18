import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/context';

const AuthorsItem = ({ author }) => {
    const context = useContext(Context);
    const { name, books, id } = author;

    let { getAuthorsById, authorId } = context;
    useEffect(() => {
        getAuthorsById(id);
        // eslint-disable-next-line
    }, []);

    console.log(authorId);

    return (
        <div className='card bg-light'>
            <h3 className='text-primary text-left'>
                {name}{' '}
                <span style={{ float: 'right' }} className='badge badge-light'>
                    author of {books} {books === 1 ? 'book' : 'books'}
                </span>
                <p>Heloo from author data</p>
                <p>{authorId.map((e) => e.name)}</p>
            </h3>
        </div>
    );
};

AuthorsItem.propTypes = {
    author: PropTypes.object.isRequired,
};

export default AuthorsItem;
