import { Link } from "react-router-dom";
import { useContextProvider } from "../providers";
import {
  Avatar,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
} from "@mui/material";
import "../Styles/nav.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
import { LogOut } from "lucide-react";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const {
    isAuthenticated,
    setIsAuthenticated,
    loading,
    setLoading,
    user,
    server,
    setServer,
  } = useContextProvider();

  const LogOutHandler = async () => {
    try {
      await axios.get(`${server}/logout`, {
        withCredentials: true,
      });
      setIsAuthenticated(false);
      setLoading(false);
      setServer("");
      toast.success("Logged Out Successfully");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      setIsAuthenticated(true);
      setLoading(false);
    }
  };
  console.log(isAuthenticated);
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
          {isAuthenticated ? (
            <li
              style={{
                display: "flex",
                alignItems: "center",
                paddingTop: "0",
                paddingBottom: "0",
              }}
            >
              <IconButton
                onClick={handleClick}
                size="small"
                style={{ padding: "0", margin: "0" }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar style={{ height: "32px", width: "32px" }}>
                  {user?.name?.charAt(0)?.toUpperCase() || "?"}
                </Avatar>
              </IconButton>
            </li>
          ) : (
            <li>
              <Link className="link" to={"/login"}>
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar />
          <Link className="link" style={{ color: "black" }} to={"/profile"}>
            Profile
          </Link>
        </MenuItem>
        <Divider />
        <MenuItem
          disabled={loading}
          style={{ cursor: loading ? "not-allowed" : "pointer", color: "red" }}
          onClick={async () => {
            handleClose();
            await LogOutHandler();
          }}
        >
          <ListItemIcon>
            <LogOut color="red" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </header>
  );
};

export default Header;
