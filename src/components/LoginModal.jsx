import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Modal, InputWrapper, Button, Input } from '@mantine/core';
import { IoPersonOutline, IoMailOutline } from "react-icons/io5";
import { LanguageSelector } from "../components/LanguageSelector";
import { PasswordInput } from '../components/PasswordInput';
import { UserContext } from "../contexts/User";
import { loginRequest } from '../utils/http';

export const LoginModal = () => {
  const { t } = useTranslation();
  const [userData, setUser] = useContext(UserContext);
  const [opened, setOpened] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const { email, name } = userData;
    setName(name);
    setEmail(email);
  }, [userData])

  const isDisabled = !(name && email && password) ? true : false;

  const login = () => {
    loginRequest("data")

    setUser({
      type: "login",
      payload: {
        name,
        email,
        password
      }
    })
  }

  return (
    <div>
      <Button onClick={() => setOpened(true)}>{t('login')}</Button>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={t('login')}>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <InputWrapper
            id="name"
            required>
            <Input
              id="name"
              icon={<IoPersonOutline />}
              placeholder={t('name')}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </InputWrapper>

          <InputWrapper
            id="email"
            required>
            <Input
              id="email"
              icon={<IoMailOutline />}
              placeholder={t('email')}
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
          </InputWrapper>

          <InputWrapper
            id="password"
            required>
            <PasswordInput
              onChange={(value) => setPassword(value)}
            />
          </InputWrapper>

          <Button
            fullWidth
            disabled={isDisabled}
            onClick={login}
            style={{ marginTop: 16 }}>
            {t('login')}
          </Button>

          <hr />

          <LanguageSelector />

        </div>
      </Modal>
    </div>
  )
}

export default LoginModal;