import React from 'react';
import './App.css';
import { AddTransaction } from './Componants/AddTransaction';
import { Balance } from './Componants/Balance';
import { Header } from './Componants/Header';
import { IncomeExpenses } from './Componants/IncomeExpenses';
import { TransactionList } from './Componants/TransactionList';
import { GlobalProvider } from './context/GlobalState';


function App() {
  return (

    <GlobalProvider>
      <div className="bg-gradient-to-t from-[#2c0808] to-[#09133e] p-6">
        <Header />

        <div className="xl:grid grid-cols-3 gap-6 mt-6 grid-rows-3 h-[500px]">
          <div className="bg-white/10 backdrop-blur-md col-span-2 rounded-lg p-5 flex justify-between items-center flex-wrap"><Balance /><IncomeExpenses /></div>        
          <div className="bg-white/10 backdrop-blur-md col-span-2 row-span-2 rounded-lg my-5 xl:my-0"><AddTransaction /></div>
          <div className="bg-white/10 backdrop-blur-md overflow-hidden row-span-2 xl:-mt-[174px] h-[350px] xl:h-auto overflow-y-auto rounded-lg"><TransactionList /></div>
 
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
