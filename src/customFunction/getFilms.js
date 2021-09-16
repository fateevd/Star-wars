


export const getFilms = async url => {
    const res = await Promise.all(url.map(res => fetch(res).then(res => res.json())));
    return res;
}



