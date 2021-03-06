import React, { useContext, useEffect } from 'react';
import Context from '../context/context';
import Spiner from '../layout/Spinner';
import AuthorsItem from './AuthorsItem';
import AuthorProfile from './AuthorProfile';

const Authors = () => {
    const context = useContext(Context);

    const { loading, authors, getFilteredAuthors, loadBetweenGet } = context;

    let display = authors.filter((author, i) => i < 90);

    let text = '';

    useEffect(() => {
        loadBetweenGet();
        getFilteredAuthors(text);
        // eslint-disable-next-line
    }, [text]);

    if (loading) return <Spiner />;

    return (
        <>
            {authors.length > 5000 ? (
                <p></p>
            ) : !authors.length ? (
                <p style={{ color: 'rgba(0,0,0,.4)' }} className='text-right'>
                    There are no matching Results for your search :)
                </p>
            ) : authors.length === 1 ? (
                <p style={{ color: 'rgba(0,0,0,.4)' }} className='text-right'>
                    ...you are seeing {display[0].name}'s Profile rendered by
                    author's ID
                </p>
            ) : (
                <p style={{ color: 'rgba(0,0,0,.4)' }} className='text-right'>
                    ...you are seeing {display.length} Results
                    {display.length < authors.length ? (
                        <span> from Total:{authors.length}</span>
                    ) : (
                        ''
                    )}
                </p>
            )}

            <div>
                {display.length === 1 ? (
                    display.map((author) => (
                        <AuthorProfile key={author.id} author={author} />
                    ))
                ) : (
                    <div className='grid-3'>
                        {display.map((author) => (
                            <AuthorsItem key={author.id} author={author} />
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default Authors;
