import Item from './Item';
import React from 'react';

const ItemList = ({data = []}) => {
    return (
        data.map(controler => <Item key={controler.id} info={controler}/>)
    );
}

export default ItemList;