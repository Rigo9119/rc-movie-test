import React from 'react';
import PropTypes from 'prop-types';
// Styles
import {  SearchBarWrapper, SearchBarLabel, SearchBarInput } from './searchBar.styled';


const SearchBar = ({ value, onChange }) => {
    return (
        <SearchBarWrapper>
            <SearchBarLabel>
                Search movie: 
            </SearchBarLabel>
            <SearchBarInput 
                type="text" 
                placeholder="Search" 
                value={value} 
                onChange={onChange} 
            />
        </SearchBarWrapper>
    );
};


SearchBar.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
};


export default SearchBar;
