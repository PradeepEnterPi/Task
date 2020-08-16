const environment = {
    development: {
        apiUrl: 'https://itunes.apple.com'
    },
    production: {
        apiUrl: ''
    }
};

module.exports = Object.assign(
    environment
);