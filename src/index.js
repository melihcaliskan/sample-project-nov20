import './i18n';
import './index.css';

import React, { useState, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { Container, Drawer, Button, Group, Grid, Col } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import { UserProvider } from "./contexts/User";
import Home from './pages/Home';
import Contact from './pages/Contact';
import LeftMenu from './components/LeftMenu';
import RightMenu from './components/RightMenu';
import Footer from './components/Footer';

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
  <Suspense fallback={<p>Loading...</p>}>
    <App />
  </Suspense>,
  document.getElementById("root")
);