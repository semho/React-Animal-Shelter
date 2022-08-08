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

function AppComponent() {
  const [mounted, setMounted] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (getUserLocalStorage().auth) {
      setIsAuth(true);
    }
  }, []);
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {mounted && (
        <BrowserRouter>
          <Layout>
            <Switch>
              {!isAuth && <Route path="/login" component={Login} />}
              {!isAuth && <Route component={Page404} />}
            </Switch>
            <Header />
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
