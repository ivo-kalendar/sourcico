import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Context from '../context/context';

const SeriesItem = ({ seriesObj }) => {
    const { series, titles } = seriesObj;
    const context = useContext(Context);

    const { getFilteredSeries } = context;

    const clickedSeries = () => getFilteredSeries(series);

    return (
        <div className='card bg-light'>
            <h3 className='text-primary '>
                <Link onClick={clickedSeries} to='/series'>
                    {series}{' '}
                </Link>
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
