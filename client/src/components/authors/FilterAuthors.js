import React, { useContext, useRef } from 'react';
import Context from '../context/context';

const FilterAuthors = () => {
    const context = useContext(Context);
    const text = useRef('');

    let { loadBetweenGet, getFilteredAuthors } = context;

    const onChange = (e) => {
        loadBetweenGet();
        getFilteredAuthors(e.target.value);
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
