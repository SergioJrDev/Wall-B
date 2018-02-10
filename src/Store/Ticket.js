import Store from './DefaultStore'
const { ticket } = Store

const SET_TICKET = 'SET_TICKET'

export default function reducer(state = ticket, action) {
 const { type, payload } = action
 switch (type) {
   case SET_TICKET:
     return { ...state, ...payload }
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