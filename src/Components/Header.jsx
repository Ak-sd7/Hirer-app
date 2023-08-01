import { Link } from 'react-router-dom'
import "../Styles/nav.css"
import { Link as ScrollLink} from 'react-scroll';
// import Additional from '../Components/additional';

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
                <Link to="/hire" className="link">Hire</Link>
            </li>
            <li>
                <Link to="/getHired" className="link">Get Hired</Link>
            </li>
            <li>
            <ScrollLink to="here" smooth={true} duration={500} className='link'>
                <Link to="/" className="link"> How it works ?</Link>
            </ScrollLink>
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