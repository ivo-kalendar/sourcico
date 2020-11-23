import React, { useContext, useEffect } from 'react';
import Context from '../context/context';
import Spiner from '../layout/Spinner';
import SeriesItem from './SeriesItem';
import SeriesProfile from './SeriesProfile';

const BookSeries = () => {
    const context = useContext(Context);

    const { loading, seriesObj, getFilteredSeries, loadBetweenGet } = context;

    let display = seriesObj.filter((series, i) => i < 90);

    let text = '';

    useEffect(() => {
        loadBetweenGet();
        getFilteredSeries(text);
        // eslint-disable-next-line
    }, [text]);

    if (loading) return <Spiner />;

    return (
        <>
            {seriesObj.length > 4000 ? (
                <p></p>
            ) : !seriesObj.length ? (
                <p style={{ color: 'rgba(0,0,0,.4)' }} className='text-right'>
                    There are no matching Results for your search :)
                </p>
            ) : seriesObj.length === 1 ? (
                <p style={{ color: 'rgba(0,0,0,.4)' }} className='text-right'>
                    ...you are seeing {display[0].series} series
                </p>
            ) : (
                <p style={{ color: 'rgba(0,0,0,.4)' }} className='text-right'>
                    ...you are seeing {display.length} Results
                    {display.length < seriesObj.length ? (
                        <span> from Total:{seriesObj.length}</span>
                    ) : (
                        ''
                    )}
                </p>
            )}

            {display.length === 1 ? (
                display.map((seriesObj, i) => (
                    <SeriesProfile key={`00${i}`} seriesObj={seriesObj} />
                ))
            ) : (
                <div className='grid-3'>
                    {display.map((seriesObj, i) => (
                        <SeriesItem key={`00${i}`} seriesObj={seriesObj} />
                    ))}
                </div>
            )}
        </>
    );
};

export default BookSeries;
