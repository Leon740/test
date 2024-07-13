import { useEffect, useState } from 'react';

function getLocalStorageFn(key: string, initialValue: object | string) {
  console.log('getLocalStorageFn');
  const savedValue = localStorage.getItem(key);

  if (savedValue) {
    return JSON.parse(savedValue);
  }

  localStorage.setItem(key, JSON.stringify(initialValue));
  return initialValue;
}

export default function useLocalStorage(key: string, initialValue: object | string) {
  const [valueSt, setValueSt] = useState(() => getLocalStorageFn(key, initialValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(valueSt));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueSt]);

  return [valueSt, setValueSt];
}
