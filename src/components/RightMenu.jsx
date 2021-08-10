import React, { useContext } from 'react';
import { useTranslation } from "react-i18next";
import { Button, Menu, MenuItem, MenuLabel, Divider, Text } from '@mantine/core';
import { IoPersonOutline, IoLogOutOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/User";
import LanguageSelector from './LanguageSelector';
import LoginModal from './LoginModal';

const Dropdown = ({ userData, logOut }) => {
  const { name } = userData;
  return (
    <Menu
      style={{ width: "100%" }}
      control={
        <Button fullWidth>
          Menu
        </Button>
      }>
      <MenuItem icon={<IoPersonOutline />}>
        {name}
      </MenuItem>

      <Divider />

      <MenuLabel>Other</MenuLabel>
      <MenuItem
        onClick={logOut}
        color="red"
        icon={<IoLogOutOutline />}>
        Log Out
      </MenuItem>
    </Menu>
  )
}

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

      <Dropdown
        userData={userData}
        logOut={logOut}
      />
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