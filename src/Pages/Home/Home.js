import React from 'react'
import ccxt from 'ccxt'
import { connect } from 'react-redux'
import { setTicket } from './../../Store/Ticket'
import { CardDetails } from './../../Components'
import { GetBitcoinTrade } from './../../Services'

class Home extends React.Component {

    UpdateBitcoinValue = () => {
        GetBitcoinTrade()
          .then(({ data }) => {
            const { last: value, changes: { percent } } = data;
            const { day, hour, week, month, month_3 } = percent
            this.props.dispatch(setTicket({ value, day, hour, week, month, month_3 }))
          })
    }

    componentDidMount() {
      const key = '851200fc344b8866d17959a6ef6a179f'
      const secret = 'af6c5e3d0665eb053009d8461e41e329d0ca3c477ce4ee4bba2b674865088b2e'
      this.UpdateBitcoinValue();
      setInterval(this.UpdateBitcoinValue, 10000);
      const mercado = new ccxt.mercado();
      mercado.loadMarkets();
      mercado.apiKey = key
      mercado.secret = secret
      mercado.fetchBalance()
        .then(data => console.log('data', data))
        .catch(err => console.log(err))
    }

    render() {
      const { ticket } = this.props
      const { day, hour, week, month, month_3, value } = ticket
      return(
        <div>
          {(day && hour && week && month && month_3 && value) ? (
            <CardDetails {...ticket} />
          ) : <p>Carregando...</p>}
          
        </div>
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