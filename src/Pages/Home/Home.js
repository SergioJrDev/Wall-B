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
        this.UpdateBitcoinValue();
        setInterval(this.UpdateBitcoinValue, 10000);
    }

    render() {
      const { ticket } = this.props
      return(
        <CardDetails {...ticket} />
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