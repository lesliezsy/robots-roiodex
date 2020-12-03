import React from 'react';

import './search-box.css';

// 從app.js傳來 placeholder and handleChange 兩個參數
export const SearchBox = ({ placeholder, handleChange }) => (
    <input 
    className='search'
    type='search'
    placeholder={ placeholder }
    onChange={ handleChange } 
    />
);