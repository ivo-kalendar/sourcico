import React, { useContext, useRef, useEffect } from 'react';
import Context from '../context/context';

const FilterAuthors = () => {
    const context = useContext(Context);
    const text = useRef('');

    const { filterAuthors, clearFilter, filtered } = context;

    useEffect(() => {
        if (filtered === null) {
            text.current.value = '';
        }
    });

    const onChange = (e) => {
        if (text.current.value !== '') {
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
