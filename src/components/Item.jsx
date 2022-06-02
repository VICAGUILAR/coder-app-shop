
import React from "react";
import {Link} from 'react-router-dom';

const Item = ({info}) => {
    return (
        <Link to={`/detalle/${info.id}`} className="controler">
            <img src={info.image}/>
            <p>{info.title}</p>

        </Link>

    );
}

export default Item;