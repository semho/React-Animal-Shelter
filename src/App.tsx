import React from "react";
import "./main.global.css";
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header/Header";
import { Content } from "./shared/Content";
import { useToken } from "./hooks/useToken";
import { PostsContextProvider } from "./shared/context/postsContext";
import { PostsList } from "./shared/Content/PostsList";
import { Action, applyMiddleware, createStore } from "redux";
import { Provider, useDispatch } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer, RootState, setToken } from "./shared/store/store";
import thunk, { ThunkAction } from "redux-thunk";

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
));

function AppComponent() {

  const [token] = useToken();

  const dispatch: any = useDispatch();

  const saveToken = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
    dispatch(setToken(token));
  }

  dispatch(saveToken());

  return (
    <PostsContextProvider>
      <Layout>
        <Header/>
        <Content>
          <PostsList />
        </Content>
      </Layout>
    </PostsContextProvider>
  );
}

export const App = hot(() =>
  <Provider store={store}>
    <AppComponent />
  </Provider>
);
