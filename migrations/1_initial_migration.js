// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
const Migrations = artifacts.require("Migrations");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
