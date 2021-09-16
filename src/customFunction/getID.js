import {category, HTTPS, staticUrl} from "../select/constApi";

const getID =  (url ,category) => {
    const id = url
        .replace(HTTPS + staticUrl + category , '')
        .replace(/\//g , '');
        return id;
}

export const getPeopleId = url => getID(url , category);






