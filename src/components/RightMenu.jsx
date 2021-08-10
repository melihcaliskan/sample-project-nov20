import React, { useContext } from 'react';
import { useTranslation } from "react-i18next";
import { Button } from '@mantine/core';
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/User";
import LanguageSelector from './LanguageSelector';
import LoginModal from './LoginModal';

const LoggedInMenu = () => {
  const [userData, setUser] = useContext(UserContext);

  const logOut = () => {
    setUser({ type: "logout" })
  }

  return (
    <>
      <p style={{ wordBreak: 'break-all' }}>
        {JSON.stringify(userData)}
      </p>

      <hr />

      <Button
        onClick={logOut}
        fullWidth>
        Log Out
      </Button>
    </>
  )
}

const RouterLinks = () => {
  const { t } = useTranslation();
  return (
    <>
      <Link to="/">{t('home')}</Link>
      <Link to="/contact">{t('contact')}</Link>
    </>
  )
}

export const RightMenu = () => {
  const [userData, setUser] = useContext(UserContext);
  const { loggedIn } = userData;
  return (
    <nav className="menu right-menu">

      <div style={{ marginBottom: 24 }}>
        {loggedIn ?
          <LoggedInMenu />
          :
          <LoginModal />
        }
      </div>

      <hr />

      <LanguageSelector />

      <hr />

      <RouterLinks />
    </nav>
  )
}

export default RightMenu;