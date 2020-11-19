import React from 'react';
import PropTypes from 'prop-types';

const TitlesItem = ({ obj }) => {
    const { author, book } = obj;

    return (
        <div className='card bg-light'>
            <h3 className='text-primary text-left'>
                {book.title}
                <span style={{ float: 'right' }} className='badge badge-light'>
                    author: {author}
                </span>
            </h3>
        </div>
    );
};

TitlesItem.propTypes = {
    obj: PropTypes.object.isRequired,
};

export default TitlesItem;
