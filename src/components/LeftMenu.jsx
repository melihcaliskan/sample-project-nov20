import { IoEaselOutline } from "react-icons/io5";
import { useLocation } from 'react-router-dom';
import { routes } from '../utils/constants';

const CurrentRoute = () => {
  const location = useLocation();
  const currentRoute = routes.filter(route => route.path === location.pathname)[0];

  return (
    <div>
      <h3>
        Current page:
      </h3>

      <p>
        {currentRoute.name}
      </p>
    </div>
  )
}

export const LeftMenu = ({ transparent, mobile }) => {

  if (mobile) {
    return (
      <CurrentRoute />
    )
  }

  return (
    <nav
      className="menu"
      style={{ backgroundColor: transparent ? "transparent" : "#F6C6EA" }}>

      <IoEaselOutline
        size={36}
      />

      <h2>
        Sample Project
      </h2>

      <hr />

      <CurrentRoute />
    </nav>
  )
}

export default LeftMenu;