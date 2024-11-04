import { useState, useEffect } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const StarshipList = () => {
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
    <div className="starship">
      <h2>List of Starships</h2>
      {
        starshipList.map((starship, key) => (
          <div key={key} onClick={() => showShip(key)} className="card">
            <h3>{starship.name}</h3>
          </div>
        ))
      }
    </div>
  ) : <h3>Finding starships list...</h3>
}

export default StarshipList