import React from 'react'
import { WallB, WatchMarket } from './../../Class'
import { connect } from 'react-redux'
import { setTicket } from './../../Store/Ticket'
import { CardDetails } from './../../Components'
import { GetBitcoinTrade } from './../../Services'

const options = {
  apiKey: '851200fc344b8866d17959a6ef6a179f',
  secret: 'af6c5e3d0665eb053009d8461e41e329d0ca3c477ce4ee4bba2b674865088b2e',
}
const WallBClass = new WallB(options)

const config = {
  paid: 11187,
  max: 10,
  min: 5,
}

class Home extends React.Component {

  UpdateBitcoinValue = () => {
    GetBitcoinTrade()
      .then(({ data }) => {
        const { last: value, changes: { percent } } = data;
        const { day, hour, week, month, month_3 } = percent
        this.props.dispatch(setTicket({ value, day, hour, week, month, month_3 }))
        return data
      })
      .then(data => WatchMarket(data, config))
  }

  consoleLog = data => console.log(data)


  componentDidMount() {
    this.UpdateBitcoinValue();
    setInterval(this.UpdateBitcoinValue, 10000);
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