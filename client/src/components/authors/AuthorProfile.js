import React, { useContext, useEffect } from 'react';
import Context from '../context/context';
import PropTypes from 'prop-types';

const AuthorProfile = ({ author }) => {
    const context = useContext(Context);

    let { authorId, getAuthorsById } = context;

    useEffect(() => {
        getAuthorsById(author.id);
        // eslint-disable-next-line
    }, [author.id]);

    return (
        <div className='card bg-light'>
            {authorId ? (
                authorId.map(({ name, id, books }) => (
                    <div key={id}>
                        <div
                            className='grid-2'
                            style={{
                                gridTemplateColumns: 'auto auto',
                            }}>
                            {/* <h3 className='text-primary text-left'>{name}</h3> */}
                            <div className='text-primary large'>{name}</div>
                            <div className='text-right'>
                                Profile Id:{' '}
                                <span className='text-primary'>{id}</span>
                            </div>
                        </div>
                        <p className='text-left'>Author of:</p>
                        {books.map((book) => (
                            <div key={book.id} className='card'>
                                <div
                                    className='grid-2'
                                    style={{
                                        gridTemplateColumns: '3fr auto',
                                    }}>
                                    {book.series ? (
                                        <div>
                                            <h3>{book.series}</h3>
                                            {book.seriesIndex ? (
                                                <h4 className='text-primary text-center'>
                                                    <span
                                                        style={{
                                                            color:
                                                                'rgba(255,0,0,.7)',
                                                        }}>
                                                        (part:{book.seriesIndex}
                                                        ){' '}
                                                    </span>
                                                    {book.title}
                                                </h4>
                                            ) : (
                                                <h4
                                                    className='text-center'
                                                    style={{
                                                        color:
                                                            'rgba(0,155,0,.7)',
                                                    }}>
                                                    {book.title}
                                                </h4>
                                            )}
                                        </div>
                                    ) : (
                                        <h3>{book.title}</h3>
                                    )}

                                    <div className='text-right'>
                                        <p>Book Id: {book.id}</p>
                                        <p>Year: {book.year}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))
            ) : (
                <p>Nothing to display :)</p>
            )}
        </div>
    );
};

AuthorProfile.propTypes = {
    author: PropTypes.object.isRequired,
};

export default AuthorProfile;
