import './index.css';

import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { IoMenu } from "react-icons/io5";
import { Container, Drawer, Button, Group, Grid, Col } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import { UserProvider } from "./contexts/User";
import Home from './pages/Home';
import Contact from './pages/Contact';
import LeftMenu from './components/LeftMenu';
import RightMenu from './components/RightMenu';
import Footer from './components/Footer';
// TODO: Dosyaya taşınacak.
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "home": "Home",
          "contact": "Contact",
          "hello": "Hello!",
          "lorem": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in convallis lectus, et feugiat velit. Curabitur et est tincidunt, tincidunt erat et, dictum sem. Aliquam mollis orci id congue blandit.",
          "login": "Login",
          "name": "Name",
          "email": "E-mail",
          "email_incorrect": "Your e-mail is incorrect",
          "password": "Şifre",
          "strong_password": "Strong password should include letters in lower and uppercase, at least 1 number, at least 1 special symbol",
          "send": "Send",
        }
      },
      tr: {
        translation: {
          "home": "Anasayfa",
          "contact": "İletişim",
          "hello": "Merhaba!",
          "lorem": "In pulvinar eros auctor orci rutrum, in egestas ante consequat. Vivamus non nisl eu odio viverra finibus et id enim. Proin sagittis turpis eu sodales porta.",
          "login": "Giriş Yap",
          "name": "İsim",
          "email": "E-posta",
          "email_incorrect": "Your e-mail is incorrect",
          "password": "Şifre",
          "strong_password": "Şifre küçük harf, büyük harf, en az 1 rakam, en az 1 özel sembol içermelidir.",
          "send": "Gönder",
        }
      }
    },
    lng: "en",
    fallbackLng: "en"
  });


const MobileLeftMenu = () => {
  return (
    <LeftMenu mobile />
  )
}

const MobileRightMenu = () => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Group position="center">
        <Button
          variant="outline"
          onClick={() => setOpened(true)}>
          <IoMenu />
        </Button>
      </Group>

      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        position="right"
        title="Right Menu"
        size="md"
      >
        <RightMenu transparent />
      </Drawer>
    </>
  )
}

const MobileHeader = () => {
  return (
    <Container className="mobile-header">
      <MobileLeftMenu />
      <MobileRightMenu />
    </Container>
  )
}


function AppRouter() {
  const isLarge = useMediaQuery('(max-width: 1200px)');
  const isMobile = useMediaQuery('(max-width: 768px)');

  const contentSpan = isMobile ? 12 : isLarge ? 6 : 8;
  const menuSpan = isLarge ? 3 : 2;

  return (
    <>
      <main>
        <Router>

          {isMobile &&
            <MobileHeader />
          }

          <Grid>
            {!isMobile &&
              <Col span={menuSpan}>
                <LeftMenu />
              </Col>
            }

            <Col span={contentSpan}>
              <Switch>
                <Route path="/contact">
                  <Contact />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </Col>

            {!isMobile &&
              <Col span={menuSpan}>
                <RightMenu />
              </Col>
            }
          </Grid>
        </Router>
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <UserProvider>
      <AppRouter />
    </UserProvider>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);