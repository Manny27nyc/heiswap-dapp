/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
const AltBn128 = artifacts.require("AltBn128");
const LSAG = artifacts.require("LSAG");
const Heiswap = artifacts.require("Heiswap");

module.exports = function(deployer) {
  deployer.deploy(AltBn128);
  deployer.link(AltBn128, LSAG);
  deployer.deploy(LSAG);
  deployer.link(LSAG, Heiswap);
  deployer.link(AltBn128, Heiswap);
  deployer.deploy(Heiswap);
};