import { Link } from 'react-router-dom'
import "../Styles/nav.css"

const Header = () => {
  return (
    <header>
        <nav className='nav'>
        <div className='hirer'><Link className='link' to={"/"}><h2 className='c'>Hirer</h2></Link></div>
        <ul className="nav-items">
            <li>
                <Link to="/" className="link">Home</Link>
            </li>
            <li>
                <Link to="/mentor" className="link">Hire</Link>
            </li>
            <li>
                <Link to="/getHired" className="link">Get Hired</Link>
            </li>
            <li>
                <Link className='link' to={"/login"}>Login</Link>
            </li>
        </ul>
    </nav>
    </header>
  )
}

export default Header