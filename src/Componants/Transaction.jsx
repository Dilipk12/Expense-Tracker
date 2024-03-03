import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { RiDeleteBin6Fill } from "react-icons/ri";

//Money formatter function
function moneyFormatter(num) {
  let p = num.toFixed(2).split('.');
  return (
    '$ ' +
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

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={`flex items-center font-semibold m-3 p-2 bg-black/60 backdrop-blur-md justify-between mb-1 border-r-4 px-8 ${transaction.amount < 0 ? 'text-[#c0392b] border-red-500' : 'text-[#2ecc71] border-green-500'}`}>
      {transaction.text} <span>{sign}{moneyFormatter(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id)} ><RiDeleteBin6Fill /></button>
    </li>
  )
}