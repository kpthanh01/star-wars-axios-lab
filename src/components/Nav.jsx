import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to='/'>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/starships'>Starships</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/films'>Films</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/planets'>Planets</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/characters'>Characters</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Nav