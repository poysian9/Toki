const path = require("path");

module.exports = {
  
  networks: {
    development: {
      host: "127.0.0.1",
      port: 1111,
      network_id: "*",
      // websockets: true
    },
    live: {
      host: "178.25.19.88", // Random IP for example purposes (do not use)
      port: 80,
      network_id: 1        // Ethereum public network
    }
  },
  contracts_build_directory: path.join(__dirname, "client/src/abis"),
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
