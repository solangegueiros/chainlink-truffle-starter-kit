const PriceConsumerV3 = artifacts.require('PriceConsumerV3')
const KOVAN_ETH_USD_PRICE_FEED = '0x9326BFA02ADD2366b30bacB125260Af641031331'
const RINKEBY_ETH_USD_PRICE_FEED = '0x8A753747A1Fa494EC906cE90E9f37563A8AF630e'

module.exports = async (deployer, network, [defaultAccount]) => {
    // Local (development) networks need their own deployment of the LINK
    // token and the Oracle contract

    // Define priceFeedAddress
    let priceFeedAddress;
    if (network.startsWith('kovan')) {
        priceFeedAddress = KOVAN_ETH_USD_PRICE_FEED
    }
    else if (network.startsWith('rinkeby')) {
        priceFeedAddress = RINKEBY_ETH_USD_PRICE_FEED
    }

    // Deploy
    try {
        await deployer.deploy(PriceConsumerV3, priceFeedAddress, { from: defaultAccount })
    } catch (err) {
        console.error(err)
    }

}
