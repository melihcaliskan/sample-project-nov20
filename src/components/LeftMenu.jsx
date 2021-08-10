import { IoEaselOutline } from "react-icons/io5";
import { useLocation } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { routes } from '../utils/constants';

const CurrentRoute = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const currentRoute = routes.filter(route => route.path === location.pathname)[0];

  return (
    <div>
      <h3>
        {t('current_page')}
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
      style={{ backgroundColor: transparent ? "transparent" : "#fefff2" }}>

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