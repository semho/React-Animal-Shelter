import React, { useEffect, useState } from 'react';
import './main.global.css';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Layout } from './shared/Layout';
import { Header } from './shared/Header/Header';
import { Content } from './shared/Content';
import { CardAnimal } from './shared/CardAnimal';
import { PageAnimals } from './shared/Content/PageAnimals';
import { PrivateRoute } from './shared/PrivateRoute';
import { Login } from './shared/Login';
import { PageToday } from './shared/Content/PageToday';
import { Page404 } from './shared/Content/Page404';

function AppComponent() {
  const [mounted, setMounted] = useState(false);
  // // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [getToken, setGetToken] = useState('');

  // async function load() {
  //   const url = 'https://acits-test-back.herokuapp.com/api/login';
  //   const auth = {
  //     login: 'test_user',
  //     password: '123456',
  //   };
  //   const config = {
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //   };

  //   try {
  //     const res = await axios.post(url, auth, config);
  //     setGetToken(res.data.accessToken);
  //   } catch (error) {
  //     console.log(`Message: ${String(error)}`);
  //   }
  // }

  const token = false;

  useEffect(() => {
    setMounted(true);
    // load();
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {mounted && (
        <BrowserRouter>
          <Layout>
            <Switch>
              <PrivateRoute auth={!token} path="/login" component={Login} />
              {!token && <Route component={Page404} />}
            </Switch>
            <Header />
            <Content>
              <Switch>
                <Route exact strict path="/">
                  <Redirect to="/today" />
                </Route>
                <PrivateRoute
                  auth={token}
                  path="/today"
                  component={PageToday}
                />
                <PrivateRoute
                  auth={token}
                  path="/animals"
                  component={PageAnimals}
                />
                {token && <Route component={Page404} />}
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
