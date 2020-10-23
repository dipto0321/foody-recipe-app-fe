export const setItem = (key: string, value: string): void => {
  sessionStorage.setItem(key, value);
};

export const getItem = (key: string): string =>
  JSON.parse(sessionStorage.getItem(key) || '');

export const removeItem = (key: string): void => {
  sessionStorage.removeItem(key);
};
