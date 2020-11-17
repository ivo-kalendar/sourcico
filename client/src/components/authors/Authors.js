import React, { useContext, useEffect } from 'react';
import Context from '../context/context';
import Spiner from '../layout/Spinner';
import AuthorsItem from './AuthorsItem';

const Authors = () => {
    const context = useContext(Context);

    const { authors, filtered, loading, getAllAuthors } = context;

    useEffect(() => {
        getAllAuthors();
        // eslint-disasble-next-line
    }, []);

    if (loading) return <Spiner />;

    return (
        <>
            {filtered !== null
                ? filtered.map((author) => (
                      <AuthorsItem key={author.id} author={author} />
                  ))
                : authors.map((author) => (
                      <AuthorsItem key={author.id} author={author} />
                  ))}
        </>
    );
};

export default Authors;
