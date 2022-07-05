import { useEffect, useState, useContext } from "react";
import axios from "axios";

type ObjDetail = {
  banner_img: string,
  icon_img: string,
}

interface IParentObj {
  kind?: string,
  data: {
    id: string,
    author: string,
    title: string,
    sr_detail: ObjDetail,
    created_utc: number
  }
}

interface INewObj {
  id?: string,
  author?: string,
  title?: string,
  banner?: string,
  icon_img?: string,
  created?: number,
}

interface IArrObj extends Array<INewObj>{}

export function usePostsData() {

  const [postsData, setPostsData] = useState<IArrObj>([]);

  useEffect(() => {
    axios.get('https://api.reddit.com/best?sr_detail=true', {
    })
      .then((resp) => {
        const postsData = resp.data.data.children;
        const newArrObj: IArrObj = postsData.map( (item: IParentObj) => {
          const container: INewObj = { };
          container.id = item.data.id;
          container.author = item.data.author;
          container.title = item.data.title;
          container.banner = item.data.sr_detail.banner_img;
          container.icon_img = item.data.sr_detail.icon_img;
          container.created = item.data.created_utc;

          return container;
        });
        setPostsData(newArrObj);
      })
      .catch(console.log);
    }, []);

    return postsData;
}
