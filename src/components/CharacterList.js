// Write your Character component here
import React from 'react'
import Character from './Character'
import styled from 'styled-components'

const FlexDiv = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
    justify-content: center;
`

export default function CharacterList(props) {

    const { characters } = props;
    
    return (
        <FlexDiv className='CharacterListDiv'>
            {characters.map(character => {
                return <Character key={character.id} character={character} />
            })}
        </FlexDiv>
    )
}
