import React from 'react';
import Titles from '../books/Titles';
import FilterTitles from '../books/FilterTitles';

const BookTitles = () => {
    return (
        <div>
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
