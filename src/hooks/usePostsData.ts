import { useEffect, useState, useContext } from "react";
import axios from "axios";

interface IParentObj {
  kind?: string,
  data: {
    id: string,
    author: string,
    title: string,
    selftext: string,
  }
}

interface INewObj {
  id?: string,
  author?: string,
  title?: string,
  selftext?: string,
}

interface IArrObj extends Array<INewObj>{}

export function usePostsData() {

  const [postsData, setPostsData] = useState<IArrObj>([]);

  useEffect(() => {
    axios.get('https://api.reddit.com/best', {
    })
      .then((resp) => {
        const postsData = resp.data.data.children;
        const newArrObj: IArrObj = postsData.map( (item: IParentObj) => {
          const container: INewObj = { };
          container.id = item.data.id;
          container.author = item.data.author;
          container.title = item.data.title;
          container.selftext = item.data.selftext;

          return container;
        });
        setPostsData(newArrObj);
      })
      .catch(console.log);
    }, []);

    return postsData;
}
