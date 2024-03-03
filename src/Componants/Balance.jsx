import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

//Money formatter function
function moneyFormatter(num) {
  
  let p = num.toFixed(2).split('.');
  return (
    'Rs. ' + (p[0].split('')[0]=== '-' ? '-' : '') +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
  );
}

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <>
    <div className="bg-white/10 backdrop-blur-md text-white p-3 md:p-5 mb-4 md:mb-0 rounded w-full md:w-56 text-center">

    <h4 className='text-2xl'>Your Balance</h4>
    <h1 className='text-3xl font-semibold'>{moneyFormatter(total)}</h1>
    </div>
    </>
  )
}