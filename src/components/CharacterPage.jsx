import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const CharacterPage = () => {
  const [character, setCharacter] = useState()
  let { id } = useParams()

  useEffect(() => {
    const getCharacter = async () => {
      const response = await axios.get(`https://swapi.dev/api/people`)
      setCharacter(response.data.results[id])
    }
    getCharacter()
  }, [])


  return character ? (
    <div className="detail">
      <div className="card text-center">
        <div className="card-header">
          <h2>{character.name}</h2>
        </div>
        <div className="card-body">
          <p className="card-text">Height: {character.height}</p>
          <p className="card-text">Mass: {character.mass}</p>
          <p className="card-text">Birth Year: {character.birth_year}</p>
          <p className="card-text">Gender: {character.gender}</p>
        </div>
        <div className="card-footer text-body-secondary">
          <Link to="/characters"> Return to character list</Link>
        </div>
      </div>

    </div>
  ) : <div className="detail"><h3>Finding character...</h3></div>
}

export default CharacterPage