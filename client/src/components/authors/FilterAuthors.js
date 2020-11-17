import React, { useContext, useRef, useEffect } from 'react';
import Context from '../context/context';

const FilterAuthors = () => {
    const context = useContext(Context);
    const text = useRef('');

    let { filterAuthors, getFilteredAuthors, clearFilter, filtered } = context;

    useEffect(() => {
        if (filtered === null) {
            text.current.value = '';
        }
    });

    const onChange = (e) => {
        if (text.current.value !== '') {
            getFilteredAuthors(e.target.value);
            filterAuthors(e.target.value);
        } else {
            clearFilter();
        }
    };

    return (
        <form>
            <input
                ref={text}
                type='text'
                placeholder='Filter Authors...'
                onChange={onChange}
            />
        </form>
    );
};

export default FilterAuthors;
