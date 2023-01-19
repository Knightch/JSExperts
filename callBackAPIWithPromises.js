const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const BASE_URL = 'https://dummyapi.io/data/v1/';
const APP_ID = '63c8e084ac0cf68b7bc89813';

function flex(url) {

    const apiPromise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.setRequestHeader('app-id', APP_ID)

        //onload
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(xhr.responseText);
            } else {
                reject({
                    status: xhr.status,
                    statusText: xhr.statusText
                })
            }
        }

        //error
        xhr.onerror = () => {
            reject({
                status: xhr.status,
                statusText: xhr.statusText
            })
        }

        xhr.send();
    })

    return apiPromise;

}



flex(`${BASE_URL}user`)
    .then((res) => {
        const parsedResponse = JSON.parse(res)
        console.log('users: ', parsedResponse)
        const userId = parsedResponse.data[0].id
        console.log('first user Id ', userId)

        flex(`${BASE_URL}user/${userId}`)
            .then((res) => {
                const parsedResponse = JSON.parse(res)
                console.log('userProfile: ', parsedResponse)
            })
    })
    .catch((err) => {
        console.log(err)
    })