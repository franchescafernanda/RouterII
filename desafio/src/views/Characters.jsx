import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

const Characters = () => {
  const { charactersCategory } = useParams()
  const navigate = useNavigate()
  const [characters, setCharacters] = useState([])
  const [charactersCategoryState, setCharactersCategoryState] = useState(
    charactersCategory || "pokemon"
  )

  useEffect(() => {
    const fetchData = async () => {
      if (!charactersCategoryState) 
      return
      try {
        let url = ""
        if (charactersCategoryState === "pokemon") {
          url = "https://pokeapi.co/api/v2/pokemon?limit=151";
        } else {
          url = `https://pokeapi.co/api/v2/${charactersCategoryState}`
        }
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        if (Array.isArray(data.results)) {
          setCharacters(data.results.map((character) => character.name))
        } else {
          setCharacters([data.name])
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData();
  }, [charactersCategoryState])

  const handleSelectChange = (event) => {
    const newCharactersCategory = event.target.value
    setCharactersCategoryState(newCharactersCategory)
    navigate(`/characters/${newCharactersCategory}`)
  }

  const handleCharacterClick = (character) => {
    navigate(`/characters/${character}`)
  }

  return (
    <div className="personajes">
      <h1>Selecciona un pokemón:</h1>
      {characters.length > 0 && (
        <select value={charactersCategoryState} onChange={handleSelectChange}>
          <option value="pokemon">Pokemones</option>
          {characters.map((character) => (
            <option key={character} value={character}>
              {character}
            </option>
          ))}
        </select>
      )}
      <button onClick={() => handleCharacterClick(charactersCategoryState)}>
        Ver detalle
      </button>
    </div>
  )
}

export default Characters