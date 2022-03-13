// require("@nomiclabs/hardhat-waffle");

// // This is a sample Hardhat task. To learn how to create your own go to
// // https://hardhat.org/guides/create-task.html
// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

// // You need to export an object to set up your config
// // Go to https://hardhat.org/config/ to learn more

// /**
//  * @type import('hardhat/config').HardhatUserConfig
//  */
// module.exports = {
//   solidity: "0.8.4",
// };

// shad https://eth-ropsten.alchemyapi.io/v2/P4lmpT3OYVNWAz4sFiAKowmeRDQSTTdF

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.4',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/P4lmpT3OYVNWAz4sFiAKowmeRDQSTTdF',
      accounts: ['c30eab3769fc53924b0a310809ae45933437ad71f6cbe5f0d9beec64553508f8'],
    },
  },
};
