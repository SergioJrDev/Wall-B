const ccxt = require('ccxt')

const mercado = new ccxt.mercado()
mercado
    .loadMarkets()

// let count = 0;
let now = undefined
let minPercent = 1
let maxPercent = 2

const setNow = (data, update = false) => {
    const { last: value } = data
    if(!now || update) {
        console.log('Atualiza valor base', value)
        now = value
    }
    return data
}

const loop = setInterval(() => {
    // count++
    mercado.fetchTicker('BTC/BRL')
        .then(setNow)
        .then((data) => {
            const { last } = data
            console.log('>>>>>>>', last, '<<<<<<<')
            if(last > now) {
                console.log('^^^^^^^Vende^^^^^^, lucro', last - now)
                setNow(data, true)
            } else if (last < now) {
                console.log('*********Compra********')
                setNow(data, true)
            }
        })
    // if(count >= 5) {
    //     clearInterval(loop)
    // }
}, 3000)

function init() {
    
}

// cex
//     .loadMarkets()
//     .then(data => console.log(data))
//     .then(() =>
//         cex.fetchTicker('ETH/USD')
//             .then(data => console.log('ticket', data))
//     )


// (async () => {
//     await cex.loadMarkets()
//     const ticker = await cex.fetchTicker('BTC/USD')
//     console.log(ticker)
// })()

// let count = 0;
// const loop = setInterval(() => {
//     count++
//     cex.fetchMarkets().then((data) => console.log(data[0]))
//     if(count >= 5) {
//         clearInterval(loop)
//     }
// }, 2000)

