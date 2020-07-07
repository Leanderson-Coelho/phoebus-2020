export const API = 'http://gateway.marvel.com/v1/public';

export const hash = '342c8813e5353425e99d7c4a0e035558';

export const ts = 3;

export const apikey = '9dfebfecf3ec1c035fa3c29612a44403';

export const buildUrlSecurity = () => {
  return `?ts=${ts}&apikey=${apikey}&hash=${hash}`;
};

export const getDataResponse = (response) => {
  return response.data.data.results;
};
