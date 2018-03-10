const HasBalance = ({total, last }) => {
  if(total === 50) {
    throw 'saldo indisponivel';
  } else {
    return { total, amount: parseFloat(last / total).toFixed(5) - 0.00001 };
  }
}

export default HasBalance;
