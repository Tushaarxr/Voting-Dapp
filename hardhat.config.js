

// require("@nomicfoundation/hardhat-web3");
// require('dotenv/config');

// module.exports = {
//   solidity: "0.8.9",
//   networks: {
//     hardhat: {
//       chainId: 31337,
//     },
//     etherlinkTest: {
//       url: "https://node.ghostnet.etherlink.com",
//       accounts: "f1b638fd87cb6df4d753a67bca320f16fe3239a4fa85d4e5e0ac4992849f9fa4"
//     }
//   },
// };


//f1b638fd87cb6df4d753a67bca320f16fe3239a4fa85d4e5e0ac4992849f9fa4
require("@nomicfoundation/hardhat-toolbox");

const config = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    etherlinkTest: {
      url: "https://node.ghostnet.etherlink.com",
      accounts: ["f1b638fd87cb6df4d753a67bca320f16fe3239a4fa85d4e5e0ac4992849f9fa4"],
    }
  }
};

module.exports = config;


