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
      if (token !== '') {
        localStorage.setItem('token', token);
      }
    }, [])
  }

  return [token];
}
