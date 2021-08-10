import { IoEaselOutline } from "react-icons/io5";
import { useLocation } from 'react-router-dom';
import { routes } from '../utils/constants';

const CurrentRoute = () => {
  const location = useLocation();
  const currentRoute = routes.filter(route => route.path === location.pathname)[0];

  return (
    <>
      <h3>
        Current page:
      </h3>

      <p>
        {currentRoute.name}
      </p>
    </>
  )
}

export const LeftMenu = () => {
  return (
    <nav className="menu left-menu">
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