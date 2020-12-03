import React from 'react';
import './card-list.styles.css';

import { Card } from '../card/card';

// app.js 傳過來的monsters資料，放在props 供使用
export const CardList = props => (
    
    // { return <div className='card-list'>{props.children}</div> }

    <div className='card-list'>
    {props.monsters.map(mon => (
        // 導入 card： 個別顯示每隻怪獸資料
        <Card key={mon.id} monster={mon}/>
        // <h1 key={mon.id}> {mon.name} </h1>
    ))}
    </div>

)