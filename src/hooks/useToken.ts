import { useEffect } from "react";

export function useToken() {

  let token = '';
  if (typeof window !== 'undefined') {
    // localStorage.clear();
    if (localStorage.getItem('token') !== 'undefined') {
      token = localStorage.getItem('token') || window.__token__;
    } else {
      token =  window.__token__;
    }

    useEffect(() => {
      if (token && token.length > 0 && token !== 'undefined') {
        localStorage.setItem('token', token);
      }
    }, [token])
  }

  // const [token, setToken] = useState('');

  // useEffect(() => {
  //   if (window.__token__) {
  //       setToken(window.__token__);
  //   }
  // }, []);


  return [token];
}
