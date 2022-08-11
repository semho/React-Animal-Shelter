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
import { getUserLocalStorage } from './utils/react/getUserLocalStorage';
import { useInterval } from './hooks/useInterval';

function AppComponent() {
  const [mounted, setMounted] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  // 10 минут активности токена
  const LIMIT = 60 * 10;
  const [count, setCount] = useState(LIMIT);
  // объект user из localStorage с токеном
  const user = getUserLocalStorage();
  useEffect(() => {
    setMounted(true);
    if (user.auth) {
      setIsAuth(true);
    }
  }, [LIMIT, user.auth, user.lifetime]);

  useInterval(() => {
    setCount(count - 1);
    if (count <= 0) {
      localStorage.removeItem('user');
      setIsAuth(false);
    }
  }, 1000);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {mounted && (
        <BrowserRouter>
          <Layout>
            {!isAuth && (
              <Switch>
                <Route path="/login" component={Login} />
                <Route component={Page404} />
              </Switch>
            )}
            {isAuth && <Header />}
            <Content>
              <Switch>
                <Route exact strict path="/">
                  <Redirect to="/today" />
                </Route>
                {isAuth && (
                  <Route exact strict path="/login">
                    <Redirect to="/today" />
                  </Route>
                )}
                <PrivateRoute
                  auth={isAuth}
                  path="/today"
                  component={PageToday}
                />
                <PrivateRoute
                  auth={isAuth}
                  path="/animals"
                  component={PageAnimals}
                />
                {isAuth && <Route component={Page404} />}
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
