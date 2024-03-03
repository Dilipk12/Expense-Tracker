import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }

  return (
    <>
      <h3 className='px-10 py-3 text-xl sm:text-2xl font-semibold text-slate-300 border-slate-300 border-b-2'>Add new transaction</h3>
      <form className='py-5 lg:pt-10 flex flex-col justify-end px-10' onSubmit={onSubmit}>
        <div className='flex items-center justify-between flex-wrap'>
          <label className='text-xl sm:text-2xl font-semibold text-white mb-2 md:m-0' htmlFor="text">Text :</label>
          <input className='outline-white bg-white/20 font-semibold text-white sm:ml-5 px-2 sm:px-5 py-2 w-[500px]' type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        
        <div className="flex items-start justify-between flex-wrap mt-5">
          <label className='leading-5 text-xl sm:text-2xl font-semibold text-white mb-2 md:m-0' htmlFor="amount"
          >Amount <br />
            <span className='text-sm'>(- expense, + income)</span>
            </label>
          <input className='outline-white bg-white/20 font-semibold text-white sm:ml-5 px-2 sm:px-5 py-2 w-[500px]' type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="bg-slate-400 hover:bg-slate-500 text-black duration-500 px-5 py-2 text-xl font-semibold w-full mt-5">Add transaction</button>
      </form>
    </>
  )
}