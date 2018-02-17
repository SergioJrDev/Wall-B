const ccxt = require('ccxt')
const mercado = new ccxt.mercado()
const key = '851200fc344b8866d17959a6ef6a179f'
const secret = 'af6c5e3d0665eb053009d8461e41e329d0ca3c477ce4ee4bba2b674865088b2e'
mercado.apiKey = key
mercado.secret = secret
mercado.loadMarkets()
mercado.fetchBalance()
.then(data => console.log('data', data))
.catch(err => console.log(err))

// console.log(mercado)