// eslint-disable-next-line no-undef
const Voting = artifacts.require("Voting");//import voting function from voting.solidity

module.exports = async function (deployer) { //export deploy function
    await deployer.deploy(Voting);
};
