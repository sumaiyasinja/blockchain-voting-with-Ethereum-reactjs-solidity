// eslint-disable-next-line no-undef
<<<<<<< HEAD
const Voting = artifacts.require("Voting");//import voting function from voting.solidity

module.exports = async function (deployer) { //export deploy function
=======
const Voting = artifacts.require("Voting");

module.exports = async function (deployer) {
>>>>>>> d312fe25be3b84ed9685e8a65e63134107cf798a
    await deployer.deploy(Voting);
};
