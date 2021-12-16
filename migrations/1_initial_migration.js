const Migrations = artifacts.require("Migrations");
const Mekin = artifacts.require("Mekin.sol");
const Router = artifacts.require("Router.sol");
const Factory = artifacts.require("Factory.sol")
const Pair = artifacts.require("Pair.sol");

module.exports = function (deployer) {
 
};
// module.exports =  async function (deployer, networks, accounts) {
//   try {
//     if(networks[0] == binanceTestnet)
//     {
//       const bnbAddress = "0xae13d989dac2f0debff460ac112a837c89baa7cd"
//       const router = Router.at('0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3');
//       // const joseph = "0xa0e4Bf105Cdb99C19246097e909eb6573a0c7B14"
//       const factory = Factory.at("");
//       const mekin = Mekin.at("0x3eAb90904683848189C8C87fD28DC27a6BB4F338");
//       const pairAddress = await factory.createPair.call(mekin.address, bnbAddress);
//       await factory.createPair(mekin.address, bnbAddress);
//       await mekin.approve(router.address, 10000);
//       await router.addLiquidity(
//         mekin.address,
//         bnbAddress,
//         1,
//         1,
//         1,
//         1,
//         admin,
//         Math.floor(Date.now() / 1000) + 60 * 10
//       ) 
//       }
//       else
//       {
//       await deployer.deploy(Router, { overwrite: false });
//       const router = await Router.deployed();
//       await deployer.deploy(Factory, { overwrite: false });
//       const factory = await Factory.deployed();
//       await deployer.deploy(Mekin, { overwrite: false });
//       const mekin = await Mekin.deployed();
//       const pairAddress = await factory.createPair.call(mekin.address, bnbAddress);
//       await factory.createPair(mekin.address, bnbAddress);
//       await mekin.approve(router.address, 10000);
//       await router.addLiquidity(
//         mekin.address,
//         bnbAddress,
//         1,
//         1,
//         1,
//         1,
//         admin,
//         Math.floor(Date.now() / 1000) + 60 * 10
//       ) 
//       }
//       const [admin, _] = await web3.eth.getAccounts();
//       const bnbAddress = "0xae13d989dac2f0debff460ac112a837c89baa7cd"
//       const router = '0xD99D1c33F9fC3444f8101754aBC46c52416550D1';
//       const joseph = "0xa0e4Bf105Cdb99C19246097e909eb6573a0c7B14"      
//     } 
//   catch(e) {
//       console.log(e);
//   }
// }
