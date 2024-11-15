import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const PlanetPage = () => {
  const [planet, setPlanet] = useState()
  let { id } = useParams()

  useEffect(() => {
    const getPlanet = async () => {
      const response = await axios.get(`https://swapi.dev/api/planets`)
      setPlanet(response.data.results[id])
    }
    getPlanet()
  }, [])


  return planet ? (
    <div className="detail">
      <div className="card text-center">
        <div className="card-header">
          <h2>{planet.name}</h2>
        </div>
        <div className="card-body">
          <p className="card-text">Population: {planet.population}</p>
          <p className="card-text">Climate: {planet.climate}</p>
          <p className="card-text">Terrain: {planet.terrain}</p>
          <p className="card-text">Gravity: {planet.gravity}</p>
          <p className="card-text">Diameter: {planet.diameter}</p>
        </div>
        <div className="card-footer text-body-secondary">
          <Link to="/planets"> Return to planet list</Link>
        </div>
      </div>

    </div>
  ) : <div className="detail"><h3>Finding planet...</h3></div>
}

export default PlanetPage