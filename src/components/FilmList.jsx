import { useState, useEffect } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const FilmList = () => {
  const [films, setFilms] = useState()
  let navigate = useNavigate()

  useEffect(() => {
    const getFilms = async () => {
      let filmData = await axios.get('https://swapi.dev/api/films')
      setFilms(filmData.data.results)
    }
    getFilms()
  }, [])

  const showFilm = (key) => {
    navigate(`${key}`)
  }

  return films ? (
    <div className="container">
      <h2>List of Films</h2>
      <div className="card">
        <ul className="list-group list-group-flush">
          {films.map((film, key) => (
            <li key={key} onClick={() => showFilm(key)} className="list-group-item">
              {film.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  ) : <div className="container"><h3>Finding films list...</h3></div>
}

export default FilmList