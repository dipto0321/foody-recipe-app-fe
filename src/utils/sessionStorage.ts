export const setItem = (key: string, value: object) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

export const getItem = (key: string) =>
  JSON.parse(sessionStorage.getItem(key) || '{}');

export const removeItem = (key: string) => {
  sessionStorage.removeItem(key);
};
