import React from 'react'
import { LineChart, Line, CartesianGrid, YAxis, XAxis, Tooltip } from 'recharts';
import './Chart-style'

class Chart extends React.Component {
  render() {
    const { data: info } = this.props
    const data = [
        {name: 'Page A', value: 5000, pv: 2400, amt: 2400},
        {name: 'Page B', value: 3000, pv: 1398, amt: 2210},
        {name: 'Page C', value: 2000, pv: 9800, amt: 2290},
        {name: 'Page D', value: 2780, pv: 3908, amt: 2000},
        {name: 'Page E', value: 1890, pv: 4800, amt: 2181},
        {name: 'Page F', value: 2390, pv: 3800, amt: 2500},
        {name: 'Page G', value: 3490, pv: 4300, amt: 2100},
    ];

    return(
      <div className="chart">
        <LineChart width={600} height={300} data={info || data}>
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey={info ? "date" : "name"} />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    )
  }
}

export default Chart