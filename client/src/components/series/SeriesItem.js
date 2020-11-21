import React from 'react';
import PropTypes from 'prop-types';

const SeriesItem = ({ seriesObj }) => {
    const { series, titles } = seriesObj;

    return (
        <div className='card bg-light'>
            <h3 className='text-primary '>
                {series}{' '}
                <span style={{ float: 'right' }} className='badge badge-light'>
                    {titles.length} titles
                </span>
            </h3>
        </div>
    );
};

SeriesItem.propTypes = {
    seriesObj: PropTypes.object.isRequired,
};

export default SeriesItem;
