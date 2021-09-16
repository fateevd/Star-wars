

export const defauldNewtwork = async url => {
    try {
        const rest = await fetch(url);
        if(!rest.ok) {
            console.error('error, 404');
            return false;
        }
        return await rest.json();
    } catch (error) {
        console.log(error);
        return false;
    }

}


