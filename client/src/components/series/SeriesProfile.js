import React from 'react';
import PropTypes from 'prop-types';

const SeriesProfile = ({ seriesObj }) => {
    const { series, author, titles } = seriesObj;

    return (
        <div className='card bg-light'>
            <h3 className='text-primary text-center p-1'>{series} </h3>
            <ul>
                {titles.map((title, i) => {
                    return (
                        <li className='text-success text-center' key={i}>
                            {i + 1}.{title}
                        </li>
                    );
                })}
            </ul>
            <p className='text-center badge badge-light'>
                series written by:{' '}
                <span className='text-primary'>{author}</span>
            </p>
        </div>
    );
};

SeriesProfile.propTypes = {
    seriesObj: PropTypes.object.isRequired,
};

export default SeriesProfile;
