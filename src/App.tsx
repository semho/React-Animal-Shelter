import React from "react";
import "./main.global.css";
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header/Header";
import { Content } from "./shared/Content";
import { useToken } from "./hooks/useToken";
import { PostsContextProvider } from "./shared/context/postsContext";
import { PostsList } from "./shared/Content/PostsList";
import { Action, applyMiddleware, createStore, Middleware, AnyAction } from "redux";
import { Provider, useDispatch } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer, RootState, setToken } from "./shared/store/store";
import thunk, { ThunkAction, ThunkDispatch  } from "redux-thunk";
import { getDefaultMiddleware, configureStore } from "@reduxjs/toolkit";
import { useAppDispatch } from "./hooks/hooks";

//старое рабочее решение
export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
));

//новое решение - конфигурация store/ не работает объект me из редьюсера
// const middleware = getDefaultMiddleware({
//   immutableCheck: false,
//   serializableCheck: false,
//   thunk: true,
// });

// export const store = configureStore({
//  reducer: rootReducer,
//  middleware,
//  devTools: process.env.NODE_ENV !== 'production',
// });


function AppComponent() {

  const dispatch = useAppDispatch();
  // const dispatch = useDispatch();

  const saveToken = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
    const [token] = useToken();
    dispatch(setToken(token));

  }

  dispatch(saveToken());


  // //не работает
  //   const saveToken =
  //   (token: string): ThunkAction<void, RootState, unknown, AnyAction> =>
  //   async dispatch => {
  //     dispatch(setToken(token))
  //   }



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
