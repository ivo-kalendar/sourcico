import React from 'react';
import Titles from '../books/Titles';
import FilterTitles from '../books/FilterTitles';

const BookTitles = () => {
    return (
        <div className='grid-2'>
            <div>
                <FilterTitles />
            </div>
            <div>
                <Titles />
            </div>
        </div>
    );
};

export default BookTitles;
