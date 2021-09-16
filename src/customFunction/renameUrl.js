import {HTTP, HTTPS} from "../select/constApi";


export const renameUrl = url => {
    return url ? url.replace(HTTP, HTTPS) : url;
}

