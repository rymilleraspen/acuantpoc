import axios from 'axios'
import {environment} from '../../environments/environment';

const client = (() => {
    return axios.create({
        baseURL: environment.APP_ID_SCAN_GO_API
    });
})();

const request = function(options) {
    const onSuccess = function(response) {
        console.debug('Request Successful!', response);
        return response.data;
    };

    const onError = function(error) {
        return Promise.reject(error.response || error.message);
    };

    let AUTH_TOKEN = btoa(`${environment.APP_USER_NAME}:${environment.APP_USER_PASSWORD}`);

    options.headers = {
        "Authorization": `${environment.APP_AUTH_METHOD} ${AUTH_TOKEN}`,
    };

    console.log(options);
    return client(options).then(onSuccess).catch(onError);
};

export default request;