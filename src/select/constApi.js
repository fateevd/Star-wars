export const HTTPS = `https://`;

export const HTTP = `http://`;

export const staticUrl = `swapi.dev/api/`;

export const staticUrlPage = "/?page=";
export const staticUrlSearch = '/?search=';

export const category = `people`;

export const personUrl = HTTPS + staticUrl + category;

export const selectPeople = HTTPS + staticUrl + category+staticUrlPage;

export const searchPeople = HTTPS + staticUrl + category + staticUrlSearch;