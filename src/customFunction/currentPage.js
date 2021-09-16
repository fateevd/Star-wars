import {staticUrlPage} from "../select/constApi";


export  const currentPage = url => {
     const page = url.lastIndexOf(staticUrlPage);
     const id = url.slice(page+staticUrlPage.length , url.length);
     return Number(id);
}