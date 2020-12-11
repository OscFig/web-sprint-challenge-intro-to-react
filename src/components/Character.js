import React from 'react'
import styled from 'styled-components'

const CharacterCard = styled.div`
    margin: 5%;
`
const Imagestyle = styled.img`
    border-radius: 50%;
`
const H2style = styled.h2`
    font-family: 'Nerko One', cursive;
`
export default function Character(props) {
    const { character } = props;

    return (
        <CharacterCard className='CharacterDiv'>
            <H2style>{character.name}</H2style>
            <Imagestyle src={character.image} alt='' />
        </CharacterCard>
    )
}
