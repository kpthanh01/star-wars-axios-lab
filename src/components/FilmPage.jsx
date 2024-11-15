import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const FilmPage = () => {
  const [film, setFilm] = useState()
  let { id } = useParams()

  useEffect(() => {
    const getFilm = async () => {
      const response = await axios.get(`https://swapi.dev/api/films`)
      setFilm(response.data.results[id])
    }
    getFilm()
  }, [])


  return film ? (
    <div className="detail">
      <div className="card text-center">
        <div className="card-header">
          <h2>{film.title}</h2>
        </div>
        <div className="card-body">
          <p className="card-text">Director: {film.director}</p>
          <p className="card-text">Producer: {film.producer}</p>
          <p className="card-text">Release: {film.release_date}</p>
          <p className="card-text">Episode: {film.episode_id}</p>
        </div>
        <div className="card-footer text-body-secondary">
          <Link to="/films"> Return to film list</Link>
        </div>
      </div>

    </div>
  ) : <div className="detail"><h3>Finding film...</h3></div>
}

export default FilmPage