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


async function getFirstUserDetails() {
    const response = await flex(`${BASE_URL}user`);
    const parsedResponse = JSON.parse(response)
    const userId = parsedResponse.data[0].id
    const userProfileResponse = await flex(`${BASE_URL}user/${userId}`)
    console.log(JSON.parse(userProfileResponse))
}

async function getFirstFiveUserDetails() {
    const response = await flex(`${BASE_URL}user`);
    const parsedResponse = JSON.parse(response)

    //promise.all
    const userProfileRequests = [];
    for (let i = 0; i < 5; i++) {
        const userId = parsedResponse.data[i].id
        userProfileRequests.push(flex(`${BASE_URL}user/${userId}`))
    }

    Promise.all(userProfileRequests)
    .then((userResponse)=>{
        console.log(userResponse)
    })
    .catch((err)=>{
        console.log(err)
    })
}

// getFirstUserDetails()
getFirstFiveUserDetails()