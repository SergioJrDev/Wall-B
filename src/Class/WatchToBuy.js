import { HasBalance } from './../Utils'
const WatchToBuy = (WallBClass, { min, info: { last } }) => {

  if (last <= min) {
    WallBClass.getAccountInfo()
      .then(({ BRL: { total } }) => ({ total, last }))
      .then(HasBalance)
      .then(({ total, amount }) => WallBClass.createOrderToBuy(amount, total))
      .catch(err => console.log(err))
  } else {
    console.log('não faz nada');
  }
}

export default WatchToBuy
