var development = {
    apiKeyClient: 'clientkey',
    apiKeyRetaliation: 'retaliationkey',
    apiKeyPrivate: 'privatekey',
    port: 3000
};

function config() {

    switch (process.env.NODE_ENV) {
        case 'development':
            return development;
        // case 'production':
        //     return production;
        default:
            return development;
    }

}

export default config;