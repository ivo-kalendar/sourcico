import React, { useContext, useRef } from 'react';
import Context from '../context/context';

const FilterTitles = () => {
    const context = useContext(Context);
    const text = useRef('');

    let { loadBetweenGet, getFilteredTitles } = context;

    const onChange = (e) => {
        loadBetweenGet();
        getFilteredTitles(e.target.value);
    };

    return (
        <form>
            <input
                ref={text}
                type='text'
                placeholder='Filter Titles...'
                onChange={onChange}
            />
        </form>
    );
};

export default FilterTitles;
