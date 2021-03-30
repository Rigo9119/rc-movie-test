import React from 'react';
import PropTypes from 'prop-types';
import BeautyStars from 'beauty-stars';
// styles
import { RatingWrapper, RatingLabel } from './rating.styled';


const Rating = ({value, onChange}) => {

    return (
        <RatingWrapper>
            <RatingLabel>
                Search by popularity: 
            </RatingLabel>
            <BeautyStars 
                editable={true}
                inactiveColor={'#8a8a8a'}
                maxStars={5}
                onChange={onChange}
                size={'16px'}
                gap={12}
                value={value}
            />
        </RatingWrapper>
    );
};


Rating.propTypes = {
    value: PropTypes.number,
    onChange: PropTypes.func
};


export default Rating;
