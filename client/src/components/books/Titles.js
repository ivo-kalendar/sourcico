import React, { useContext, useEffect } from 'react';
import Context from '../context/context';
import Spiner from '../layout/Spinner';
import TitlesItem from './TitlesItem';

const Titles = () => {
    const context = useContext(Context);

    const { loading, books, getFilteredTitles } = context;

    let display = books.filter((author, i) => i < 80);

    let text = '';

    useEffect(() => {
        getFilteredTitles(text);
        // eslint-disable-next-line
    }, [text]);

    if (loading) return <Spiner />;

    // return <div>Hello from Titles.js</div>;

    return (
        <>
            {books.length > 33000 ? (
                <p></p>
            ) : !books.length ? (
                <p style={{ color: 'rgba(0,0,0,.4)' }} className='text-right'>
                    There are no matching Results for your search :)
                </p>
            ) : (
                <p style={{ color: 'rgba(0,0,0,.4)' }} className='text-right'>
                    ...you are seeing {display.length} Results
                    {display.length < books.length ? (
                        <span> from Total:{books.length}</span>
                    ) : (
                        ''
                    )}
                </p>
            )}

            {display.map((obj, index) => (
                <TitlesItem key={index} obj={obj} />
            ))}
        </>
    );
};

export default Titles;
