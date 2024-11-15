import { Route, Routes } from 'react-router-dom'
import StarshipsList from './StarshipsList'
import StarshipPage from './StarshipPage'
import Home from './Home'
import Error from './Error'
import FilmList from './FilmList'
import PlanetList from './PlanetList'
import CharacterList from './CharacterList'
import FilmPage from './FilmPage'
import PlanetPage from './PlanetPage'
import CharacterPage from './CharacterPage'

const Main = (props) => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/starships' element={<StarshipsList />} />
        <Route path='/starships/:id' element={<StarshipPage />} />
        <Route path='/films' element={<FilmList />} />
        <Route path='/films/:id' element={<FilmPage />} />
        <Route path='/planets' element={<PlanetList />} />
        <Route path='/planets/:id' element={<PlanetPage />} />
        <Route path='/characters' element={<CharacterList />} />
        <Route path='/characters/:id' element={<CharacterPage />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  )
}

export default Main