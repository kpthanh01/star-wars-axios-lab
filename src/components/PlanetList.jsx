import { useState, useEffect } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const PlanetList = () => {
  const [planets, setPlanets] = useState()
  let navigate = useNavigate()

  useEffect(() => {
    const getPlanets = async () => {
      let planetsData = await axios.get('https://swapi.dev/api/planets')
      setPlanets(planetsData.data.results)
    }
    getPlanets()
  }, [])

  const showPlanet = (key) => {
    navigate(`${key}`)
  }

  return planets ? (
    <div className="container">
      <h2>List of Planets</h2>
      <div className="card">
        <ul className="list-group list-group-flush">
          {planets.map((planet, key) => (
            <li key={key} onClick={() => showPlanet(key)} className="list-group-item">
              {planet.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  ) : <div className="container"><h3>Finding planet list...</h3></div>
}

export default PlanetList