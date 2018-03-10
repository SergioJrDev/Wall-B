import React from 'react'
import { WallB, WatchMarketToSell, WatchToBuy } from './../../Class'
import { connect } from 'react-redux'
import { setTicket } from './../../Store/Ticket'
import { CardDetails } from './../../Components'
import { GetBitcoinTrade } from './../../Services'
import { API_CONFIG } from './../../Utils'

const { key, secret } = API_CONFIG();
const WallBClass = new WallB({ key, secret });

class Home extends React.Component {
  UpdateBitcoinValue = () => {
    WallBClass.getCurrentValue()
      .then(({ info }) => new WatchMarketToSell(WallBClass, { max: 5, paid: 30000, min: 3, ...info }))
  }

  componentDidMount() {
    this.UpdateBitcoinValue();
    // setInterval(this.UpdateBitcoinValue, 10000);
  }

  render() {
    const { ticket } = this.props
    return (
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


    // GetBitcoinTrade()
    //   .then(({ data }) => {
    //     const { last: value, changes: { percent } } = data;
    //     const { day, hour, week, month, month_3 } = percent;
    //     this.props.dispatch(setTicket({ value, day, hour, week, month, month_3 }));
    //     return data;
    //   })
    //   .then(data => WatchMarketToSell(data, config));
