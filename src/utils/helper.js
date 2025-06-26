/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
// @flow

// Appends 0x in front of hex strings so
// it fits the solidity format
const append0x = (s: String): String => {
  if (s.indexOf('0x') !== 0) {
    return '0x' + s
  }
  return s
}

export {
  append0x
}
