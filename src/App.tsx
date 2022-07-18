import React, { useEffect, useState } from "react";
import "./main.global.css";
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header/Header";
import { Content } from "./shared/Content";
import { useToken } from "./hooks/useToken";
import { PostsList } from "./shared/Content/PostsList";
import { Action, applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer, RootState, setToken} from "./shared/store/store";
import thunk, { ThunkAction } from "redux-thunk";
import { useAppDispatch } from "./hooks/hooks";
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Post } from "./shared/Post";
//вместо redux
import { atom, RecoilRoot } from "recoil";

export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
));

//Инициализируем состояние Recoil, вместо Redux
export const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: 'Привет от Recoil', // default value (aka initial value)
});

function AppComponent() {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, []);

  const dispatch = useAppDispatch();
  const saveToken = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
    const [token] = useToken();
    dispatch(setToken(token));
  }

  dispatch(saveToken());

  return (
    <>
      {mounted && (
        <RecoilRoot>
          <BrowserRouter>
            <Layout>
              <Header/>
              <Content>
                <Switch>
                  <Route exact strict path="/">
                    <Redirect to="/posts" />
                  </Route>
                  <Route exact strict path="/auth">
                    <Redirect to="/posts" />
                  </Route>
                  <Route path="/posts">
                    <PostsList />
                  </Route>
                  <Route>
                    <div style={{textAlign: 'center'}}>404 — страница не найдена</div>
                  </Route>
                </Switch>
                <Route path="/posts/:id">
                    <Post />
                </Route>
              </Content>
            </Layout>
          </BrowserRouter>
        </RecoilRoot>
      )}
    </>
  );
}

export const App = hot(() =>
  <Provider store={store}>
    <AppComponent />
  </Provider>
);


