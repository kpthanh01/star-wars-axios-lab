import { Route, Routes } from 'react-router-dom'
import StarshipList from './StarshipList'
import StarshipPage from './StarshipPage'
import Home from './Home'

const Main = (props) => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/starshipsList' element={<StarshipList />} />
        <Route path='/starshipsList/:id' element={<StarshipPage />} />
        <Route path='*' element={<h2>Whoops, There was an Issue!</h2>
        } />
      </Routes>
    </div>
  )
}

export default Main