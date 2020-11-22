import React from 'react';
import Authors from '../authors/Authors';
import FilterAuthors from '../authors/FilterAuthors';

const Home = () => {
    return (
        <div>
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
