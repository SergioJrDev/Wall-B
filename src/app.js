import React from 'react'
import ccxt from 'ccxt'
import { connect } from 'react-redux'

class App extends React.Component {
    // componentDidMount() {
    //     const mercado = new ccxt.dsx()
    //     mercado.loadMarkets()
    //     mercado
    //         .fetchTicker('BTC/USD')
    //         .then(({ last: data }) => console.log(data))
    // }

    render() {
      console.log(this.props)
        return(
            <h1>Wall-B</h1>
        )
    }
}

const mapStateToProps = ({ ticket }, props) => {
  return {
    ticket,
    ...props
  }
}

export default connect(mapStateToProps)(App)