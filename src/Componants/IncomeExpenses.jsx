import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

//Money formatter function
function moneyFormatter(num) {
  let p = num.toFixed(2).split('.');
  return (
    'Rs. ' +
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

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  );

  return (
    <div className="flex w-full gap-4 md:w-auto">
      <div className='bg-green-500/50 text-white backdrop-blur-md p-5 rounded w-1/2 md:w-56 text-center'>
        <h4 className='text-lg sm:text-2xl'>Income</h4>
        <p className=" text-xl sm:text-3xl font-semibold">{moneyFormatter(income)}</p>
      </div>
      <div className='bg-red-500/50 backdrop-blur-md text-white p-5 rounded w-1/2 md:w-56 text-center'>
        <h4 className='text-lg sm:text-2xl'>Expense</h4>
        <p className="text-xl sm:text-3xl font-semibold">{moneyFormatter(expense)}</p>
      </div>
    </div>
  )
}