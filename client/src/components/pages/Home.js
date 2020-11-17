import React from 'react';
import Authors from '../authors/Authors';
import FilterAuthors from '../authors/FilterAuthors';

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
