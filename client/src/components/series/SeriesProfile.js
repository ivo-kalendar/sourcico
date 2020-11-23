import React from 'react';
import PropTypes from 'prop-types';

const SeriesProfile = ({ seriesObj }) => {
    const { series, titles } = seriesObj;

    return (
        <div className='card bg-light'>
            <h3 className='text-primary text-center p-1'>{series} </h3>
            <ul>
                {titles.map(({ id, title, author }, i) => {
                    return (
                        <li className='text-success text-center' key={i + id}>
                            {i > 0 && author === titles[i - 1].author ? (
                                <span></span>
                            ) : (
                                <p
                                    className='text-center badge badge-light'
                                    style={{
                                        marginTop: '2rem',
                                    }}>
                                    series written by:{' '}
                                    <span className='text-primary'>
                                        {author}
                                    </span>
                                </p>
                            )}
                            {i + 1}.{title}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

SeriesProfile.propTypes = {
    seriesObj: PropTypes.object.isRequired,
};

export default SeriesProfile;
