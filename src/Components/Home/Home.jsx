import React from 'react';
import CarouselContainer from '../Carousel/CarouselContainer';
import ItemListContainer from '../Items/ItemListContainer';
import Bienvenida from './Bienvenida';

function Home() {
    return (
        <>  
            <Bienvenida />
            <CarouselContainer  resaltar='destacado'/>
            <CarouselContainer  resaltar='oferta'/>
            <ItemListContainer />
        </>
    )
}

export default Home