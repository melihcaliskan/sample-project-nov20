import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Blockquote, Container } from '@mantine/core';

export const Home = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = "Sample Project - Home";
  });

  return (
    <Container>
      <h1>{t('home')}</h1>
      <Blockquote cite="– Marcus Tullius Cicero">
        {t('lorem')}
      </Blockquote>
    </Container>
  )
}

export default Home;