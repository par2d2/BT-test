const getApiCall = async (url) => {
    try {
        const response = await fetch(url,{
            method: 'GET',
            credentials: 'same-origin',
            headers: new Headers({
                Accept: 'application/json'
            })
        })
        if (response.ok) {
            return await response.json();
        }
        return Error(`Unsuccessful call response:${response}`)
    } catch (err){
        throw Error(err);
    }
}

export { getApiCall }