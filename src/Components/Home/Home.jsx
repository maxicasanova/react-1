import React from 'react';
import CarouselContainer from '../Carousel/CarouselContainer';
import ItemListContainer from '../Items/ItemListContainer';
import Bienvenida from './Bienvenida';

function Home() {
    return (
        <>  
            <Bienvenida />
            <CarouselContainer  resaltar='destacado'/>
            <ItemListContainer />
        </>
    )
}

export default Home