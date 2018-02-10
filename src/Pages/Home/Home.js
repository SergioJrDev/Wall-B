import React from 'react'
import ccxt from 'ccxt'
import { connect } from 'react-redux'
import { setTicket } from './../../Store/Ticket'
import { Chart } from './../../Components' 
import moment from 'moment'

class Home extends React.Component {

    queryTicket = (mercado) => {
        const payload = {
          exchange: 'Mercado',
          date: moment(new Date()).format('DD/MM/YYYY - hh:mm:ss'),
        }
        mercado.fetchTicker('BTC/BRL')
          .then(({ last }) => this.props.dispatch(setTicket({ ...payload, value: last })))
    }

    componentDidMount() {
        const mercado = new ccxt.mercado()
        mercado.loadMarkets()
        this.queryTicket(mercado);
        setInterval(this.queryTicket, 10000, mercado);
    }

    render() {
      const { ticket } = this.props
      return(
          <Chart
            // Descomentar para mostrar no gráfico
            // data={ticket}
            />
      )
    }
}

const mapStateToProps = ({ ticket }, props) => {
  return {
    ticket,
    ...props
  }
}

export default connect(mapStateToProps)(Home)