import axios from 'axios'

const BASE_URL = "https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD"

export function GetBitcoinTrade() {
  return axios.get(BASE_URL)
}