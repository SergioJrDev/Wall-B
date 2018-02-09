import React from 'react'
import ccxt from 'ccxt'

class App extends React.Component {
    // componentDidMount() {
    //     const mercado = new ccxt.dsx()
    //     mercado.loadMarkets()
    //     mercado
    //         .fetchTicker('BTC/USD')
    //         .then(({ last: data }) => console.log(data))
    // }

    render() {
        return(
            <h1>Wall-B</h1>
        )
    }
}

export default App