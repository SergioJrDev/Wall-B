import { WallB } from './'

/*
Paid: Valor pago
Min: Porcentagem mínima de perda
Max: Porcentagem máxima de lucro
*/

const WatchMarketToSell = (WallBClass, { max, min, paid, last }) => {
  const lucro = paid + paid * max / 100;
  const perda = paid - paid * min / 100;

  if (last >= lucro || last <= perda) {
    console.log('Vende', last, paid, lucro, perda);
  }
}

export default WatchMarketToSell
