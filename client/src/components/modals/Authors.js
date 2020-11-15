import React, { useContext, useEffect } from 'react';
import Context from '../context/context';
import AuthorsItem from './AuthorsItem';

const Authors = () => {
    const context = useContext(Context);

    const { authors, filtered, getAuthors, loading } = context;

    useEffect(() => {
        getAuthors();
        // eslint-disasble-next-line
    }, []);

    if (authors.length === 0) {
        return <h4>No Authors</h4>;
    }

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
