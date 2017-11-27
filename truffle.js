module.exports = {
    networks: {
        development: {
            host: "localhost",
            port: 8545,
            network_id: "*",
            gas: 4600000
        },
        ropsten: {
            host: "node1.ph2.izx.io",
            port: 8545,
            network_id: "*"
        },
        production: {
            host: "info.ph2.izx.io",
            port: 8545,
            network_id: "*"
        },

    }
};
