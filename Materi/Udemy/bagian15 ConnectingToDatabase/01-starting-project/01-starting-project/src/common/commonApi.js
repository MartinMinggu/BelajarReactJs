export const fetchApi
    = function fetchApi(api, successFunction) {
        fetch(api)
            .then(response => response.json())
            .then(data => {
                successFunction(data);
            }).catch((error) => {
                console.error("error: " + error);
            })
            .finally(() => {
                console.log("selesai ambil data");
            });
    }


export const apiBackend = 'http://localhost:3000';


export const fetchApiAll = (url, method = 'GET', body = null, onSuccess, onError = null) => {
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json',
        }
    }

    if (body && method !== 'GET') {
        options.body = JSON.stringify(body);
    }
    fetch(url, options).then(response => {
        if (!response.ok) {
            throw new Error(`HTTP ${response.status} : ${response.statusText}`);
        }
        return response.json();
    }).then(data => {
        onSuccess(data);
    }).catch(error => {
        console.error(`Error ${method} ${url}:`, error);
        if (onError) {
            onError(error.message || error);
        } else {
            alert('Terjadi kesalahan jaringan');
        }
    });
}

export const get = (url, onSuccess, onError) => fetchApiAll(url, 'GET', null, onSuccess, onError);
export const post = (url, body, onSuccess, onError) => fetchApiAll(url, 'POST', body, onSuccess, onError);
export const put = (url, body, onSuccess, onError) => fetchApiAll(url, 'PUT', body, onSuccess, onError);
export const del = (url, onSuccess, onError) => fetchApiAll(url, 'DELETE', null, onSuccess, onError);