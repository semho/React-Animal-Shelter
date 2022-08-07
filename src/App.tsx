import React, { useEffect, useState } from 'react';
import './main.global.css';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { Layout } from './shared/Layout';
import { Header } from './shared/Header/Header';
import { Content } from './shared/Content';
import { CardAnimal } from './shared/CardAnimal';
import { PageAnimals } from './shared/Content/PageAnimals';
import { PrivateRoute } from './shared/PrivateRoute';

function AppComponent() {
  const [mounted, setMounted] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [getToken, setGetToken] = useState('');

  async function load() {
    const url = 'https://acits-test-back.herokuapp.com/api/login';
    const auth = {
      login: 'test_user',
      password: '123456',
    };
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };

    try {
      const res = await axios.post(url, auth, config);
      setGetToken(res.data.accessToken);
    } catch (error) {
      console.log(`Message: ${String(error)}`);
    }
  }

  useEffect(() => {
    setMounted(true);
    load();
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {mounted && (
        <BrowserRouter>
          <Layout>
            <Header />
            <Content>
              <Switch>
                <Route exact strict path="/">
                  <Redirect to="/today" />
                </Route>
                <Route path="/today">
                  <div>Назначения на сегодня </div>
                </Route>
                <PrivateRoute auth path="/animals" component={PageAnimals} />
                <Route>
                  <div style={{ textAlign: 'center' }}>
                    404 — страница не найдена
                  </div>
                </Route>
              </Switch>
              <Route path="/today/:id">
                <CardAnimal />
              </Route>
              <Route path="/animals/:id">
                <CardAnimal />
              </Route>
            </Content>
          </Layout>
        </BrowserRouter>
      )}
    </>
  );
}

export const App = hot(() => <AppComponent />);
