import React, {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";
import {useParams} from 'react-router-dom';

const controler = [
    { id: 1, image: "https://shop.hercules.com/pub/media/catalog/product/cache/f32e6b920edcd12f3fe95d79cda907cf/m/o/monitor5_2000x2000_1.jpg", category: "audio", title: "Hercules Monitor 5"},
    { id: 2, image: "https://shop.hercules.com/pub/media/catalog/product/cache/f32e6b920edcd12f3fe95d79cda907cf/d/j/djspeaker32party_2_3.jpg" , category: "audio", title: "DJSpeaker 32 Party"},
    { id: 3, image: "https://shop.hercules.com/pub/media/catalog/product/cache/f32e6b920edcd12f3fe95d79cda907cf/d/j/dj32_face_arr_1.jpg" , category: "audio" , title: "DJMonitor 42"},
    { id: 4, image: "https://shop.hercules.com/pub/media/catalog/product/cache/f32e6b920edcd12f3fe95d79cda907cf/o/n/onlinecontent-djci500whiteedition_2000x2000-notext-3.jpg", category: "dj", title: "DJControl Inpulse 500 White Edition"},
    { id: 5, image: "https://shop.hercules.com/pub/media/catalog/product/cache/f32e6b920edcd12f3fe95d79cda907cf/d/j/djcontrolinpulse500_main1_v2.jpg" , category: "dj", title: "DJControl Inpulse 500"},
    { id: 6, image: "https://shop.hercules.com/pub/media/catalog/product/cache/f32e6b920edcd12f3fe95d79cda907cf/2/0/2000x2000-2_1.jpg" , category: "dj" , title: "DJControl Mix"},
]

export const ItemDetailContainer = () => {
    const [data, setData] = useState ({});

    const {detalleId} = useParams();

    useEffect (() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(controler);
            }, 2000);
        });

        getData.then(res => setData(res.find(audio => audio.id === parseInt(detalleId))));
    }, [])


    return (
        <ItemDetail data={data}/>
    );
}

export default ItemDetailContainer;