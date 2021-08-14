import React, { useContext } from 'react';
import { useTranslation } from "react-i18next";
import { Button, Menu, MenuItem, MenuLabel, Divider } from '@mantine/core';
import { IoPersonOutline, IoLogOutOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/User";
import LanguageSelector from './LanguageSelector';
import LoginModal from './LoginModal';
import { routes } from '../utils/constants';

const Dropdown = ({ userData, logOut }) => {
  const { email, name } = userData;
  return (
    <Menu
      style={{ width: "100%" }}
      control={
        <Button fullWidth>
          {name}
        </Button>
      }>
      <MenuItem icon={<IoPersonOutline />}>
        {email}
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
      {routes.map((route, idx) => {
        const { path, translateKey } = route;
        return (
          <Link
            key={idx}
            to={path}>
            {t(translateKey)}
          </Link>
        )
      })}
    </>
  )
}

export const RightMenu = ({ transparent }) => {
  const [userData, setUser] = useContext(UserContext);
  const { loggedIn } = userData;
  return (
    <nav
      className="menu right-menu"
      style={{ backgroundColor: transparent ? "transparent" : "#f2ffff" }}>

      <RouterLinks />

      <hr />

      <LanguageSelector />

      <hr />

      <div style={{ marginBottom: 24 }}>
        {loggedIn ?
          <LoggedInMenu />
          :
          <LoginModal />
        }
      </div>
    </nav>
  )
}

export default RightMenu;