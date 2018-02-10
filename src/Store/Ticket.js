import Store from './DefaultStore'

const SET_TICKET = 'SET_TICKET'
const { ticket } = Store

export default function reducer(state = ticket, action) {
 const { type, payload } = action
 switch (type) {
   case SET_TICKET:
     return state.concat(payload)
     break;
   default:
     return state;
     break;
 }
}

export function setTicket(payload) {
  return {
    type: SET_TICKET,
    payload
  }
}