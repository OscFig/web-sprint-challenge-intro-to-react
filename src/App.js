import React, { useState, useEffect } from 'react';
import CharacterList from './components/CharacterList'
import axios from 'axios';
import styled from 'styled-components'
import './App.css';

const Appstyle = styled.div`
  max-width: 95%;
`
const Header = styled.h1`
  font-size:3em;
  font-family: 'Nerko One', cursive;
`

const App = () => {
 
  const [ characters, setCharacters ] = useState([])

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
    .then(resolve => {
      // console.log(resolve.data.results,'Resolve')
      setCharacters(resolve.data.results)
    })
    .catch(err => {
      alert('axios failed')
    })
  }, [])

  return (
    <Appstyle className="App">
      <Header className="Header">Characters</Header>
      <CharacterList characters={characters}/>
    </Appstyle>
  );
}

export default App;
