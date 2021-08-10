import React, { useEffect, useContext, useState } from 'react';
import { useTranslation } from "react-i18next";
import { Button, Container, Textarea, TextInput, Select } from '@mantine/core';
import { UserContext } from "../contexts/User"
import { countryList } from '../utils/constants';
import { loginRequest } from '../utils/http';

export const Contact = () => {
  const { t } = useTranslation();
  const [userData, setUser] = useContext(UserContext);

  const [name, setName] = useState(userData?.name || "");
  const [email, setEmail] = useState(userData?.email || "");
  const [phonenumber, setPhoneNumber] = useState("");
  const [country_code, setCountryCode] = useState("");
  const [text, setText] = useState();

  const [emailValid, setEmailValid] = useState(true);
  const [phoneValid, setPhoneValid] = useState(true);

  const isDisabled = !(name && email && phonenumber && country_code && text & emailValid & phoneValid) ? true : false;

  const send = () => {

    loginRequest({
      name,
      email,
      phonenumber,
      country_code,
      text
    })

    setUser({
      type: "contact",
      payload: {
        name,
        email,
        phonenumber,
        country_code,
        text
      }
    })
  }

  useEffect(() => {
    var isContainString = /[a-zA-Z]/g;

    if (!phonenumber?.length) {
      return;
    }

    !isContainString.test(phonenumber)
      ? setPhoneValid(true)
      : setPhoneValid(false)
  }, [phonenumber])

  useEffect(() => {
    var isValidEmail = /\S+@\S+\.\S+/g;

    if (!email?.length) {
      return;
    }

    isValidEmail.test(email)
      ? setEmailValid(true)
      : setEmailValid(false)
  }, [email])

  return (
    <Container>
      <h1>{t('contact')}</h1>
      <TextInput
        placeholder="Name"
        label="Name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <TextInput
        label="E-mail"
        placeholder="example@example.com"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={!emailValid}
      />

      <TextInput
        label="Phone"
        placeholder="05555555555"
        type="tel"
        required
        value={phonenumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        error={!phoneValid}
      />

      <Select
        required
        searchable
        label="Country"
        placeholder="Pick one country"
        nothingFound="No country"
        data={countryList}
        value={country_code}
        onChange={(e) => setCountryCode(e)}
      />

      <Textarea
        placeholder="Text"
        label="Text"
        required
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p style={{ margin: '36px 0' }}>
        {JSON.stringify(userData)}
      </p>

      <Button
        fullWidth
        disabled={isDisabled}
        onClick={send}
        style={{ marginTop: 16 }}>
        {t('send')}
      </Button>
    </Container>
  )
}

export default Contact;