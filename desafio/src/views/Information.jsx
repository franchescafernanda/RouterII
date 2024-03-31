
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Information = () => {
  const { characterName } = useParams()
  const [characterData, setCharacterData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/${characterName}`)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setCharacterData(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData();
  }, [characterName]);

  return (
    <div className="information">
      {characterData && (
        <>
          <h1>{characterData.name}</h1>
          <img src={characterData.sprites.front_default} alt={characterData.name} />
          <p>Height: {characterData.height}</p>
          <p>Weight: {characterData.weight}</p>
          <p>Abilities: {characterData.abilities.map((ability) => ability.ability.name).join(', ')}</p>
        </>
      )}
    </div>
  )
}

export default Information