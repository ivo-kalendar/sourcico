import React from 'react';
import FilterSeries from '../series/FilterSeries';
import BookSeries from '../series/BookSeries';

const Series = () => {
    return (
        <div>
            <div>
                <FilterSeries />
            </div>
            <div>
                <BookSeries />
            </div>
        </div>
    );
};

export default Series;
