const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const BASE_URL = 'https://dummyapi.io/data/v1/';
const APP_ID = '63c8e084ac0cf68b7bc89813';

function xhrWithCallback(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.setRequestHeader('app-id', APP_ID)

    //onload
    xhr.onload = () => {
        if (xhr.status === 200) {
            callback(xhr.responseText);
        } else {
            callback({}, {
                status: xhr.status,
                statusText: xhr.statusText
            })
        }
    }

    //error
    xhr.onerror = () => {
        callback({}, {
            status: xhr.status,
            statusText: xhr.statusText
        })
    }

    xhr.send();
}

function handleResponse(res, error) {
    console.log('requiest is done')

    if (!error) {
        const parsedResponse = JSON.parse(res)
        console.log('users: ', parsedResponse)
        const userId = parsedResponse.data[0].id
        console.log('first user Id ', userId)

        xhrWithCallback(`${BASE_URL}user/${userId}`, (res, err) => {
            if (!error) {
                const parsedResponse = JSON.parse(res)
                console.log('user profile: ', parsedResponse)
            }
        })
    } else {
        console.log('error: ', error.status, error.statusText)
    }
}

xhrWithCallback(`${BASE_URL}user`, handleResponse)