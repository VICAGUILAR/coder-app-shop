import React, {useState, useEffect} from "react";
import Title from './Title';
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import {useParams} from 'react-router-dom';

const controler = [
    { id: 1, image: "https://shop.hercules.com/pub/media/catalog/product/cache/f32e6b920edcd12f3fe95d79cda907cf/m/o/monitor5_2000x2000_1.jpg", category: "audio", title: "Hercules Monitor 5", price: "$5,000.00", description: "Optimizados para la producción musical, este atractivo par de altavoces de monitorización activos (2 x 80 W) mejorará el nivel de tu estudio doméstico con una reproducción de audio plena y potente." },
    { id: 2, image: "https://shop.hercules.com/pub/media/catalog/product/cache/f32e6b920edcd12f3fe95d79cda907cf/d/j/djspeaker32party_2_3.jpg" , category: "audio", title: "DJSpeaker 32 Party", price: "$6,000", description: "Los altavoces Hercules DJSpeaker 32 Party animan tus fiestas con sonido de calidad y un sistema de luces LED que crea un ambiente lleno de color. Cada altavoz incorpora una cúpula luminosa con efectos de llama y proyector que hacen que tu evento sea único. Los altavoces, que se controlan fácilmente por medio del mando a distancia por infrarrojos incluido, te permiten elegir entre 4 modos de iluminación distintos: ¡que no decaiga el ambiente en tu próxima fiesta de cumpleaños, juerga de Año Nuevo o cualquier reunión espontánea!"},
    { id: 3, image: "https://shop.hercules.com/pub/media/catalog/product/cache/f32e6b920edcd12f3fe95d79cda907cf/d/j/dj32_face_arr_1.jpg" , category: "audio" , title: "DJMonitor 42", price: "$4,500", description: "Crea mezclas y refínalas con altavoces de alta calidad para obtener una interpretación del audio clara y potente. Los altavoces Hercules DJMonitor 42 son idóneos para crear la atmósfera adecuada: ¡no son demasiado grandes ni pequeños, quedan perfectamente en cualquier entorno y proporcionan un ambiente increíble!"},
    { id: 4, image: "https://shop.hercules.com/pub/media/catalog/product/cache/f32e6b920edcd12f3fe95d79cda907cf/o/n/onlinecontent-djci500whiteedition_2000x2000-notext-3.jpg", category: "dj", title: "DJControl Inpulse 500 White Edition", price: "$5,000", description: "Controladora de DJ USB de 2 decks para Serato DJ Lite y DJUCED (incluidos) — interfaz de audio integrado, 16 pads RGB retroiluminados, jog wheels grandes, mezclador de entrada integrado en hardware y patas retráctiles."},
    { id: 5, image: "https://shop.hercules.com/pub/media/catalog/product/cache/f32e6b920edcd12f3fe95d79cda907cf/d/j/djcontrolinpulse500_main1_v2.jpg" , category: "dj", title: "DJControl Inpulse 500", price: "$6,000", description: "Controladora de DJ USB de 2 decks para Serato DJ Pro y DJUCED (incluidos)"},
    { id: 6, image: "https://shop.hercules.com/pub/media/catalog/product/cache/f32e6b920edcd12f3fe95d79cda907cf/2/0/2000x2000-2_1.jpg" , category: "dj" , title: "DJControl Mix", price: "$3,500", description: "Controladora de DJ Inalámbrica Bluetooth para Smartphones (iOS y Android)"},
]


export const ItemListContainer = ({texto}) => {
    const [data, setData] = useState ([])

    const {categoriaId} = useParams();

    useEffect (() => {
        const getData = new Promise(resolve => {
           setTimeout(() => {
                resolve(controler);
           }, 2000);
        });

        if(categoriaId) {
            getData.then(res => setData(res.filter(audio => audio.category === categoriaId)));
        }else {
            getData.then(res => setData(res));
        }

        

    }, [categoriaId])

    const onAdd = (quantity) => {
        alert(`Agregaste al carrito ${quantity} `);
    }

    return (
        <>
        <Title greeting = {texto}/>
        <ItemCount initial={1} stock={5} onAdd={onAdd}/>
        <ItemList data={data}/>
        </>
        
    );
}

export default ItemListContainer;