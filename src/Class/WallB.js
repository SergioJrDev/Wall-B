import ccxt from 'ccxt'

class WallBit {
  constructor(values) {
    const optionsDefault = {
      symbol: 'BTC/BRL',
    }

    const options = Object.assign({}, optionsDefault, values)
    const { symbol, delay, apiKey, secret } = options
    this.exchange = new ccxt.mercado()
    this.exchange.apiKey = apiKey;
    this.exchange.secret = secret;
  }

  loadMarket() {
    return this.exchange.loadMarkets()
  }

  getCurrentValue(symbol = 'BTC/BRL') {
    return this.exchange.fetchTicker(symbol)
  }

  getAccountInfo() {
    return this.exchange.fetchBalance()
  }

  createOrderToBuy({ amount, price }, symbol = 'BTC/BRL') {
    return this.exchange.createLimitBuyOrder(symbol, amount, price)
  }

  createOrderToSell({ amount, price }, symbol = 'BTC/BRL') {
    return this.exchange.createLimitSellOrder(symbol, amount, price)
  }

  fetchOrders(symbol = 'BTC/BRL') {
    return this.exchange.fetchOrders(symbol)
  }
}

export default WallBit