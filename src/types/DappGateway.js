/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
// @flow

export type DappGateway = {
    web3: Object,
    drizzleUtils: Object,
    ethAddress: String, // Current ETH Address
    attempted: Boolean, // Have we attempted to connect to web3 and drizzleUtils?
    heiswapInstance: Object, // web3.eth.Contract instance (used for calls)
    heiswapEvent$: Object // RxJs stream of events
}
