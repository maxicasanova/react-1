import React, { useState, useEffect } from 'react'

function Prueba1() {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() =>{

        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        
        fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0", requestOptions)
            .then(response => response.json())
            .then(result => {
                setPokemon(result);
                console.log(pokemon);
            })
            .catch(error => console.log('error', error));
    },[])

    return (
        <>
            {pokemon.map(p => 
            <div>
                <p>{p.name}</p><img src={p.url}></img>
            </div>
            )}
        </>
    )
}

export default Prueba1