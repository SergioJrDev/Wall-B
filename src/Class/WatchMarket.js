const WatchMarket = (current, options) => {
  const { max, min, paid } = options;
  const { last } = current;
  const lucro = paid + paid * max / 100;
  const perda = paid - paid * min / 100;

  if (last >= lucro || last <= perda) {
    console.log('Vende');
  } else {
    console.log('Faz nada', last, lucro, perda)
  }
}

export default WatchMarket