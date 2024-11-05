import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const StarshipPage = () => {
  const [starship, setStarship] = useState()
  let { id } = useParams()

  useEffect(() => {
    const getStarship = async () => {
      const response = await axios.get(`https://swapi.dev/api/starships/`)
      setStarship(response.data.results[id])
    }
    getStarship()
  }, [])


  return starship ? (
    <div className="detail">
      <div className="card text-center">
        <div className="card-header">
          <h2>{starship.name}</h2>
        </div>
        <div className="card-body">
          <p className="card-text">Class: {starship.starship_class}</p>
          <p className="card-text">Model: {starship.model}</p>
          <p className="card-text">Manufacturer: {starship.manufacturer}</p>
          <p className="card-text">Capacity: {starship.cargo_capacity}</p>
          <p className="card-text">Cost: {starship.cost_in_credits}</p>
        </div>
        <div className="card-footer text-body-secondary">
          <Link to="/starshipsList"> Return to starship list</Link>
        </div>
      </div>

    </div>
  ) : <div className="detail"><h3>Finding starship...</h3></div>
}

export default StarshipPage