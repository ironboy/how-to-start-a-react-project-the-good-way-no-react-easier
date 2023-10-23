import { useEffect } from 'react';
import { get, post, put, del } from './fetchUtil';

function fetchHelper(func, stateSetter, url, method) {
  useEffect(() => {
    (async () => {
      let result = await func();
      stateSetter(result);
    })();
  }, []);
}

export function useGet(url, stateSetter) {
  fetchHelper(() => get(url), stateSetter, url, 'get');
}

export function usePost(url, body, stateSetter) {
  fetchHelper(() => post(url, body), stateSetter, url, 'post');
}

export function usePut(url, body, stateSetter) {
  fetchHelper(() => put(url, body), stateSetter, url, 'put')
}

export function useDelete(url, stateSetter) {
  fetchHelper(() => del(url), stateSetter, url, 'delete');
}

