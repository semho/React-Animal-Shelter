import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { tokenContext } from '../shared/context/tokenContext';

export function usePostsData() {
  const [postsData, setPostsData] = useState('');
  const token = useContext(tokenContext);
  useEffect(() => {
    axios.get('https://oauth.reddit.com/best', {
      headers: { Authorization: `bearer ${token}` }
    })
      .then((resp) => {
        const postsData = resp.data;
        console.log(resp);
        setPostsData(postsData);

      })
      .catch(console.log);
    }, [token]);

    return [postsData];
}
