import * as ConfigConstants from '@constants/ConfigConstants';
import { notifyError } from '@basesShared/common';

export const DataService = {
    get,
    post,
    put,
    delete: _delete,
    deleteMulti
};

function get(endpoint, data) {
    const requestOptions = {
        method: 'GET',
        body: JSON.stringify(data)
    };
    return fetch(ConfigConstants.API_URL + endpoint, requestOptions).then(handleResponse, handleError)
}

function post(endpoint, data) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    return fetch(ConfigConstants.API_URL + endpoint, requestOptions).then(handleResponse, handleError);
}

function put(endpoint, data) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    return fetch(ConfigConstants.API_URL + endpoint, requestOptions).then(handleResponse, handleError);
}

function _delete(endpoint, data) {
    const requestOptions = {
        method: 'DELETE',
        body: JSON.stringify(data)
    };
    return fetch(ConfigConstants.API_URL + endpoint, requestOptions)
        .then(handleResponse, handleError);
}

function deleteMulti(endpoint, key, data) {
    var paramStr = '';
    for (let param in data) {
        paramStr += key + "=" + data[param] + '&';
    }
    const requestOptions = {
        method: 'DELETE'
    };
    return fetch(ConfigConstants.API_URL + endpoint + "/?" + paramStr, requestOptions)
        .then(handleResponse, handleError);
}

function handleResponse(response) {
    return new Promise(async (resolve, reject) => {
        if (response.ok) {
            var contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                response.json().then(json => resolve(json));
            } else {
                resolve();
            }
        } else {
            try {
                switch (response.status) {
                    case 400:
                        response.json().then(json => {
                            let errorMsg = {};
                            if (typeof json === 'object') {
                                for (var propertyName in json) {
                                    var property = json[propertyName];
                                    if (propertyName === "error") {
                                        notifyError({ text: property })
                                        return reject();
                                    } else {
                                        errorMsg[propertyName] = property[0];
                                    }
                                }
                                return reject(errorMsg)
                            } else {
                                let jsonObj = JSON.parse(json);
                                if (typeof jsonObj === 'object') {
                                    for (var propertyName in jsonObj) {
                                        var property = jsonObj[propertyName];
                                        if (propertyName === "error") {
                                            notifyError({ text: property })
                                            return reject();
                                        } else {
                                            errorMsg[propertyName] = property;
                                        }
                                    }
                                    return reject(errorMsg)
                                }
                            }
                        });
                        break;
                    default:
                        return reject(response)
                }

            }
            catch (ex) {

            }
        }
    });
}

function handleError(error) {
    notifyError({ text: error.message })
    return Promise.reject(error && error.message);
}