import React from 'react'
import { IsNegative } from './../../Utils'

const listClass = "list flex pa2 justify-between b--light-gray"
const Loading = () => <p>Loading...</p>
class CardDetails extends React.Component {
  render() {
    const { day, hour, week, month, month_3, value } = this.props
    const isLoad = day && hour && week && month && month_3 && value
    return isLoad ? (
    <div className="cupom pt3 pb1 min-w-300 bg-white">
      <h2 className="pl2">Bitcoin</h2>
      <span className="pl2 mb2 db fw8 fs2">${value}</span>
      <ul>
        <li className={`bb list flex pa2 justify-between b--light-gray`}>
          <span>Última hora</span>
          <span className={`${IsNegative(hour) ? "isNegative" : "isPositive"}`}>{hour}%</span>
        </li>
        <li className={`bb list flex pa2 justify-between b--light-gray`}>
          <span>Último Dia</span>
          <span className={`${IsNegative(day) ? "isNegative" : "isPositive"}`}>{day}%</span>
        </li>
        <li className={`bb list flex pa2 justify-between b--light-gray`}>
          <span>Última semana</span>
          <span className={`${IsNegative(week) ? "isNegative" : "isPositive"}`}>{week}%</span>
        </li>
        <li className={`bb list flex pa2 justify-between b--light-gray`}>
          <span>Último mês</span>
          <span className={`${IsNegative(month) ? "isNegative" : "isPositive"}`}>{month}%</span>
        </li>
        <li className={`list flex pa2 justify-between b--light-gray`}>
          <span>Últimos 3 meses</span>
          <span className={`${IsNegative(month_3) ? "isNegative" : "isPositive"}`}>{month_3}%</span>
        </li>
      </ul>
    </div> 
    ) : (
      <Loading />
    )
  }
} 

export default CardDetails