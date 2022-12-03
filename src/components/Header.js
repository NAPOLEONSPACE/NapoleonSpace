import { NavLink } from "react-router-dom"
import { FiMenu } from "react-icons/fi"
import logo from "../starter-code/assets/shared/logo.svg"
import Button from '@mui/material/Button'
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined'
import { withStyles } from "@material-ui/core/styles"

export default function Header() {
  const CustomButton = withStyles({
    root: {
      background: "linear-gradient(45deg, #F299D3 30%, #C9A0F2 90%)",
      borderRadius: 3,
      border: 0,
      color: "white",
      height: 48,
      padding: "0 30px",
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      
    },
    label: {
      textTransform: "capitalize",
    }
  })(props => <Button {...props} />);

  const handleClick = () => {
    const navbar = document.getElementById("navbar")

    navbar.classList.toggle("open")
  }

  return (
    <>
      <header className="header px-5 flex items-center justify-between">
        <div className="py-5">
          <NavLink to="/">
            <img src={logo} alt="space" title="Travel to Space" />
          </NavLink>
        </div>

        {/* {isOpen && ( */}
        <nav id="navbar">
          <ul className="flex items-center">
            <li className="mx-2 py-5 text-gray-400 font-semibold">
              <NavLink
                to="/"
                exact
                activeClassName="text-white border-b-4 border-white pb-7"
              >
                <span>00</span> Home
              </NavLink>
            </li>
            <li className="mx-2 py-5 text-gray-400 font-semibold">
              <NavLink
                to="/destination"
                exact
                activeClassName="text-white border-b-4 border-white pb-7"
              >
                <span>01</span> Destination
              </NavLink>
            </li>
            <li className="mx-2 py-5 text-gray-400 font-semibold">
              <NavLink
                to="/crew"
                exact
                activeClassName="text-white border-b-4 border-white pb-7"
              >
                <span>02</span> Crew
              </NavLink>
            </li>
            <li className="mx-2 py-5 text-gray-400 font-semibold">
              <NavLink
                to="/technology"
                exact
                activeClassName="text-white border-b-4 border-white pb-7"
              >
                <span>03</span> Technology
              </NavLink>
            </li>
            <CustomButton> <NavLink to="/reservation">Reservation <RocketLaunchOutlinedIcon/></NavLink>  </CustomButton>
          </ul>
        </nav>
        {/* )} */}

        <div className="menu">
          <button id="menu" onClick={handleClick}>
            <FiMenu className="text-white text-4xl" />
          </button>
        </div>
      </header>
    </>
  )
}
