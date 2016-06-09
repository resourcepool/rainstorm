var development = {
    apiKeyClient: 'apikeyclient',
    apiKeyRetaliation: 'apikeyretaliation',
    ipCluster: '192.168.10.52',
    portCluster: 3000,
    port: 3001
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