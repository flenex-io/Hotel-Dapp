require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/CkrSVYa8E3etSvUuYQz2EQkzRW06PEhb",
      accounts: [
        "680d84b4e9915d34516888814c22932fbd3eca06caadb9f6c8308a3c3e229d8a",
      ],
    },
  },
};
