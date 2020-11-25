import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Context from '../context/context';
import { v4 as uuidv4 } from 'uuid';
import { RiArrowGoBackLine, RiArrowUpLine } from 'react-icons/ri';

const SeriesProfile = ({ seriesObj }) => {
    const context = useContext(Context);

    const { series, titles } = seriesObj;
    const { getFilteredSeries } = context;

    const backToTop = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };

    const clickedSeries = () => {
        getFilteredSeries('');
        backToTop();
    };

    return (
        <div className='card bg-light'>
            <h3 className='text-primary text-center p-1'>
                <a
                    target='_blank'
                    rel='noreferrer'
                    href={`//www.google.com/search?q=${series} Book Series`}>
                    {series}
                </a>
            </h3>
            <div className='grid-2' style={{ gridTemplateColumns: '1fr 1fr' }}>
                <p></p>
                <h3 className='text-right'>
                    <Link to='/series' onClick={clickedSeries}>
                        <RiArrowGoBackLine />
                    </Link>
                </h3>
            </div>
            <ul>
                {titles.map(({ id, title, author }, i) => {
                    return (
                        <li className='text-success text-center' key={uuidv4()}>
                            {i > 0 && author === titles[i - 1].author ? (
                                <span></span>
                            ) : (
                                <p
                                    className='text-center badge badge-light'
                                    style={
                                        i === 0 ? {} : { marginTop: '3rem' }
                                    }>
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
                <h2 className=' text-right' style={{ marginTop: '2rem' }}>
                    <Link to='/series' onClick={backToTop}>
                        <RiArrowUpLine />
                    </Link>
                </h2>
            </ul>
        </div>
    );
};

SeriesProfile.propTypes = {
    seriesObj: PropTypes.object.isRequired,
};

export default SeriesProfile;
