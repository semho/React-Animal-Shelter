import React, { useState } from "react";
import "./main.global.css";
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header/Header";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";
import { useToken } from "./hooks/useToken";
import { tokenContext } from "./shared/context/tokenContext";
import { UserContextProvider } from "./shared/context/userContext";
import { PostsContextProvider } from "./shared/context/postsContext";
import { PostsList } from "./shared/Content/PostsList";
import { CommentContextProvider } from "./shared/context/commentContext";

function AppComponent() {
  const [token] = useToken();

  return (
    <CommentContextProvider>
      <tokenContext.Provider value={token}>
        <UserContextProvider>
        <PostsContextProvider>
          <Layout>
            <Header/>
            <Content>
              <CardsList />
              <PostsList />
            </Content>
          </Layout>
        </PostsContextProvider>
        </UserContextProvider>
      </tokenContext.Provider>
    </CommentContextProvider>
  );
}

export const App = hot(() => <AppComponent />);
