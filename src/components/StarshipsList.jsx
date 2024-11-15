import { useState, useEffect } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const StarshipsList = () => {
  const [starshipList, setStarships] = useState()
  let navigate = useNavigate()

  useEffect(() => {
    const getStarship = async () => {
      let starshipsData = await axios.get('https://swapi.dev/api/starships')
      setStarships(starshipsData.data.results)
    }
    getStarship()
  }, [])

  const showShip = (key) => {
    navigate(`${key}`)
  }

  return starshipList ? (
    <div className="container">
      <h2>List of Starships</h2>
      <div className="card">
        <ul className="list-group list-group-flush">
          {starshipList.map((starship, key) => (
            <li key={key} onClick={() => showShip(key)} className="list-group-item">
              {starship.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  ) : <div className="container"><h3>Finding starships list...</h3></div>
}

export default StarshipsList