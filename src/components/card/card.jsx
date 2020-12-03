import React from 'react';

import './card.css';

// 裡面放 JSX
export const Card = props => (
    <div className='card-container'>
        <img src={`https://robohash.org/${props.monster.id}?set=set1&size=180x180`} alt="monster"/>
        <h2> { props.monster.name } </h2>
        <p> { props.monster.email } </p>
    </div>
)

