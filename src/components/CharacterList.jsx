import { useState, useEffect } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const CharacterList = () => {
  const [characters, setCharacters] = useState()
  let navigate = useNavigate()

  useEffect(() => {
    const getCharacters = async () => {
      let characterData = await axios.get('https://swapi.dev/api/people')
      setCharacters(characterData.data.results)
    }
    getCharacters()
  }, [])

  const showCharacter = (key) => {
    navigate(`${key}`)
  }

  return characters ? (
    <div className="container">
      <h2>List of Characters</h2>
      <div className="card">
        <ul className="list-group list-group-flush">
          {characters.map((character, key) => (
            <li key={key} onClick={() => showCharacter(key)} className="list-group-item">
              {character.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  ) : <div className="container"><h3>Finding characters list...</h3></div>
}

export default CharacterList