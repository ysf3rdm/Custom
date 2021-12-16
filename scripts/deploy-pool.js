const Factory = artifacts.require('Factory.sol');
const Router = artifacts.require('Router.sol');
const Pair = artifacts.require('Pair.sol');
const Fikret = artifacts.require('Fikret.sol');
const Bugra = artifacts.require('Bugra.sol');

module.exports =  async function (deployer, networks, accounts) {
  try {
    await deployer.deploy(Fikret);
    const fikret = await Fikret.deployed();
    fikret.transfer("0x010b41d747c801e5F25487F19966f4E76B7c38a3", 100000);
    } catch(e) {  
      console.log(e);
    }
}


