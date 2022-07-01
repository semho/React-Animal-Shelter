import React from 'react';
import { usePostsData } from '../../hooks/usePostsData';

interface IPostContextData {
  id ?: string,
  author ?: string,
  title ?: string,
  banner?: string,
  icon_img?: string,
  created?: number,
}

interface IPostContextData extends Array<IPostContextData>{}

export const postsContext = React.createContext<IPostContextData>([]);

export function PostsContextProvider({children}: {children: React.ReactNode}) {
  const posts: any [] = usePostsData();

  return (
    <postsContext.Provider value={posts}>
      { children }
    </postsContext.Provider>
  );
}
