import { Link } from "react-router-dom";
import { useContextProvider } from "../providers";
import "../Styles/nav.css";
import axios from "axios";
import toast from "react-hot-toast";

const Header = () => {
    const {
        isAuthenticated,
        setIsAuthenticated,
        loading,
        setLoading,
        user,
        server
      } = useContextProvider();

    const LogOutHandler = async()=>{
        try {
            await axios.get(`${server}/logout`, {
                withCredentials:true
            });
            setIsAuthenticated(false);
            setLoading(false);
            toast.success("Logged Out Successfully");
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
            setIsAuthenticated(true);
            setLoading(false);
        }
    }

      console.log(user?.name);
  return (
    <header>
      <nav className="nav">
        <div className="hirer">
          <Link className="link" to={"/"}>
            <h2 className="c">Hirer</h2>
          </Link>
        </div>
        <ul className="nav-items">
          <li>
            <Link to="/hire" className="link">
              Hire
            </Link>
          </li>
          <li>
            <Link to="/getHired" className="link">
              Get Hired
            </Link>
          </li>
          {isAuthenticated?<button disabled = {loading} onClick={LogOutHandler}>LogOut</button>:
          <li>
            <Link className="link" to={"/login"}>
              Login
            </Link>
          </li>
          }
        </ul>
      </nav>
    </header>
  );
};

export default Header;
