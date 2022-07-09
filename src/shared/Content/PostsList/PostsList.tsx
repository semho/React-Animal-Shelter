import React, { useState, useEffect, useRef } from 'react';
import styles from './postslist.css';
import { TextContent } from './TextContent';
import { Preview } from './Preview';
import { Menu } from './Menu';
import { Controls } from './Controls';
import axios from 'axios';

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

export function PostsList() {
  const [posts, setPosts] = useState<IArrObj>([]);
  const [loading, setLoading] = useState(false);
  const [errorLoading, setErrorLoading] = useState('');
  const [nextAfter, setNextAfter] = useState('');
  const [loadMore, setLoadMore] = useState(true);
  const [numberLoad, setNumberLoad] = useState<number>(0);

  const bottomOfList = useRef<HTMLDivElement>(null);

  function handleClick() {
    setLoadMore(true);
  }

  useEffect(() => {
    async function load() {
      setLoading(true);
      setErrorLoading('');

      try {
        const { data: { data: { after, children } } } = await axios.get('https://api.reddit.com/best?sr_detail=true', {
          params: {
            limit: 10,
            after: nextAfter,
          }
        });
          const newArrObj: IArrObj = children.map( (item: IParentObj) => {
            const container: INewObj = { };
            container.id = item.data.id;
            container.author = item.data.author;
            container.title = item.data.title;
            container.banner = item.data.sr_detail.banner_img;
            container.icon_img = item.data.sr_detail.icon_img;
            container.created = item.data.created_utc;

            return container;
          });

        setNextAfter(after);
        setPosts(prevNewArrObj => prevNewArrObj.concat(newArrObj));
        setNumberLoad(numberLoad + 1);
      } catch (error) {
        setErrorLoading(String(error));
      }
      setLoading(false);
    }
    console.log(posts)
    const observer = new IntersectionObserver((entries) => {

      if (entries[0].isIntersecting && loadMore) {
        load();
      }

      console.log(loadMore);

      if (numberLoad == 3) {
        setLoadMore(false);
        setNumberLoad(0);
      }

    }, {
      rootMargin: '10px',
    });

    if (bottomOfList.current) {
      observer.observe(bottomOfList.current);
    }

    return () => {
      if (bottomOfList.current) {
        observer.unobserve(bottomOfList.current);
      }
    }
  }, [bottomOfList.current, nextAfter, loadMore, numberLoad]);

  return (
    <ul className={styles.postsList}>
      {posts.length === 0 && !loading && !errorLoading && (
        <div style={{textAlign: 'center'}}>Нет ни одного поста</div>
      )}

      {posts.map(item => {
        return (
          <li className={styles.post} key={item.id} id={item.id}>
              <TextContent title={item.title} author={item.author} icon={item.icon_img} date={item.created}/>
              <Preview srcImg={item.banner}/>
              <Menu />
              <Controls />
          </li>
        );
      })}

      <div ref={bottomOfList}></div>

      {!loading && !errorLoading && posts.length > 0 && (
        <div style={{textAlign: 'center'}}>
          <button type='button' className={styles.btnMore} onClick={handleClick}>Загрузить еще</button>
        </div>
      )}

      {loading && (
        <div style={{textAlign: 'center'}}>Загрузка...</div>
      )}
      {errorLoading && (
        <div role="alert" style={{textAlign: 'center'}}>{errorLoading}</div>
      )}
    </ul>
  );
}

