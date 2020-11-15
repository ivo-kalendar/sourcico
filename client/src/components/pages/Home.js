import React from 'react';
import Authors from '../modals/Authors';
import FilterAuthors from '../modals/FilterAuthors';

const Home = () => {
    return (
        <div className='grid-2'>
            <div>
                <FilterAuthors />
            </div>
            <div>
                <Authors />
            </div>
        </div>
    );
};

export default Home;
