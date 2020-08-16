
import config from '../config/appconfig';
function post(endpoint, param) {
    const api = `${config.development.apiUrl}${endpoint}`
    return new Promise((resolve, reject) => {
        fetch(api+'?term='+param.term, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
        .then(async (res) => {
            let response = await res.json();
            if (!res.ok) {
                return reject(response);
            }
            return resolve(response);
        }).catch(reject);
    });
}

module.exports = {
    post
};