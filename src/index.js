import './i18n';
import './index.css';

import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { Drawer, Button, Group, Grid, Col } from '@mantine/core';
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
    <div className="mobile-header">
      <MobileLeftMenu />
      <MobileRightMenu />
    </div>
  )
}

function AppRouter() {
  const isLarge = useMediaQuery('(max-width: 1200px)');
  const isMobile = useMediaQuery('(max-width: 768px)');

  const contentSpan = isMobile ? 12 : isLarge ? 6 : 8;
  const menuSpan = isLarge ? 3 : 2;

  return (
    <div className="app">
      <Router>
        {isMobile &&
          <MobileHeader />
        }

        <Grid gutter={0}>
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
    </div>
  )
}

function Main() {
  return (
    <main>
      <AppRouter />
      <Footer />
    </main>
  )
}

function App() {
  return (
    <UserProvider>
      <Main />
    </UserProvider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));