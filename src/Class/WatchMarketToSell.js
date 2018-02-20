import { WallB } from './'

const options = {
  apiKey: '851200fc344b8866d17959a6ef6a179f',
  secret: 'af6c5e3d0665eb053009d8461e41e329d0ca3c477ce4ee4bba2b674865088b2e',
}

const WallBClass = new WallB(options)

const WatchMarketToSell = (current, options) => {
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

export default WatchMarketToSell