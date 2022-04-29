import React from 'react';
import CarouselContainer from '../Carousel/CarouselContainer';
import ItemListContainer from '../Items/ItemListContainer';

function Home() {
    return (
        <>
            <CarouselContainer  categoryId='Tapiz' />
            <ItemListContainer />
        </>
    )
}

export default Home