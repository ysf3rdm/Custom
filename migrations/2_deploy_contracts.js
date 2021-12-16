const Fikret = artifacts.require("Fikret.sol");
const Betul = artifacts.require("Betul.sol");
const Factory = artifacts.require("Factory.sol");
const Router = artifacts.require("Router.sol");
const Pair = artifacts.require("Pair.sol")


module.exports = async function (deployer, networks) {
  try {
    const betul = await Betul.at("0x23bF89053a2b6C39E19C61a6774cdBF473f26Dd9");
    const bnbAddress = "0xae13d989dac2f0debff460ac112a837c89baa7cd"
    const fikret = await Fikret.at("0x687131a18245a1952493227b3a5657aa5ab3e333")
    const [admin, _] = await web3.eth.getAccounts();
    const factory = await Factory.at('0x6725F303b657a9451d8BA641348b6761A6CC7a17');
    const router = await Router.at('0xD99D1c33F9fC3444f8101754aBC46c52416550D1');
    console.log("call öncesi")
    const pairAddress = await factory.createPair.call(fikret.address, betul.address);
    console.log("call sonrası")
    await factory.createPair(fikret.address, betul.address);
    console.log("pair sonrası")
    await fikret.approve(router.address, 10000)
    console.log("approve geçtik 1")
    await betul.approve(router.address, 10000)
    console.log("approve geçtik 2")
    await router.addLiquidity(
      fikret.address,
      betul.address,
      10000,
      10000,
      10000,
      10000,
      admin,
      Math.floor(Date.now() / 1000) + 60 * 10
    );
    console.log("likidiite tamam")
    const pair = await Pair.at(pairAddress);
    const balance = await pair.balanceOf(admin); 
    console.log(`balance LP: ${balance.toString()}`);
    } catch(e) {
      console.log(e);
    }


  // if (networks == "binanceTestnet") {
  //   const [admin, _] = await web3.eth.getAccounts();
  //   const bnbAddress = "0xae13d989dac2f0debff460ac112a837c89baa7cd"
  //   const fikret = await Fikret.at("0x687131a18245a1952493227b3a5657aa5ab3e333")
  //   // fikret.transfer("0x010b41d747c801e5F25487F19966f4E76B7c38a3",100000000000)
  //   const factory = Factory.at("0x6725F303b657a9451d8BA641348b6761A6CC7a17");
  //   const router = Router.at("0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3");
  //   await factory.createPair(fikret.address, bnbAddress);
  //   await fikret.approve(router.address, 1000000000);
  //   await router.addLiquidity(
  //   mekin.address,
  //   bnbAddress,
  //   1000000000,
  //   1,
  //   1000000000,
  //   1000000000,
  //   admin,
  //   Math.floor(Date.now() / 1000) + 60 * 10
  //   ) 
  // }
  // else{
  //   const [admin, _] = await web3.eth.getAccounts();
  //   const bnbAddress = "0xae13d989dac2f0debff460ac112a837c89baa7cd"
  //   await deployer.deploy(Fikret);
  //   const fikret = await Fikret.deployed();
  //   await deployer.deploy(Factory);
  //   const factory = await Factory.deployed();
  //   await deployer.deploy(Router);
  //   const router = await Router.deployed();
  //   const pairAddress = await factory.createPair.call(fikret.address, bnbAddress)
  //   console.log(pairAddress);
  //   await factory.createPair(fikret.address, bnbAddress)
  //   await fikret.approve(router.address, 1000000000);
  //   await router.addLiquidity(
  //   fikret.address,
  //   bnbAddress,
  //   1000000000,
  //   1,
  //   1000000000,
  //   1000000000,
  //   admin,
  //   Math.floor(Date.now() / 1000) + 60 * 10
  //   ) 
  // }
  }
   