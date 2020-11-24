import React, { useContext, useRef } from 'react';
import Context from '../context/context';

const FilterSeries = () => {
    const context = useContext(Context);
    const text = useRef('');

    let { loadBetweenGet, getFilteredSeries } = context;

    const onChange = (e) => {
        loadBetweenGet();
        getFilteredSeries(e.target.value);
    };

    return (
        <input
            autoFocus={true}
            ref={text}
            type='text'
            placeholder='Filter Series...'
            onChange={onChange}
        />
    );
};

export default FilterSeries;
