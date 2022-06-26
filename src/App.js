import React, { useState, useEffect } from 'react';
import Card from './Cards';
import Navbar from './Cards'
import { getAllPokemon } from './pokemon';
import './App.css';


function App() {
    const [pokemonData, setPokemonData] = useState(null);
    const [nextUrl, setNextUrl] = useState('');
    const [prevUrl, setPrevUrl] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const initialUrl = 'https://pokeapi.co/api/v2/pokemon';

    useEffect(() => {
      async function fetchData() {
        let response = await getAllPokemon(initialUrl);
        console.log(response);
        setNextUrl (response.next);
        setPrevUrl (response.previous);
        await loadingPokemon(response.results);
        setIsLoading(false);
      }
      fetchData();
    }, []);

    const loadingPokemon = async data => {
      let _pokemonData = await Promise.all(data.map(async pokemon => {
        let pokemonRecord = await getPokemon(pokemon.url); 
        return pokemonRecord
      }));

      setPokemonData(_pokemonData);

    }
    return <div> {isLoading ? <h1>Loading...</h1> : 
          <h1>Data fetched successfully</h1>}</div>;
}

export default App;
