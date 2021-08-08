import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Modal, InputWrapper, Button, Progress, Text, Popover, Input, Group } from '@mantine/core';
import { IoPersonOutline, IoMailOutline } from "react-icons/io5";
import { PasswordInput } from '../components/PasswordInput'
export const LoginModal = () => {
  const { t } = useTranslation();
  const [opened, setOpened] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpened(true)}>{t('login')}</Button>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={t('login')}>

        <Group direction="column" grow>
          <InputWrapper
            id="name"
            required
            error={t('name_incorrect')}>
            <Input
              id="name"
              icon={<IoPersonOutline />}
              placeholder={t('name')} />
          </InputWrapper>

          <InputWrapper
            id="email"
            required
            error={t('email_incorrect')}>
            <Input
              id="email"
              icon={<IoMailOutline />}
              placeholder={t('email')} />
          </InputWrapper>

          <PasswordInput />
        </Group>
      </Modal>
    </div>
  )
}

export default LoginModal;