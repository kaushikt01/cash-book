import React, { useState } from 'react';
import AddExpense from '../AddExpense';
import DebitCard from '../DebitCard';
import CreditCard from '../CreditCard';

const Reports = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expenses, setExpenses] = useState([]);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleAddExpense = (expense) => {
    setExpenses(prevExpenses => [...prevExpenses, expense]);
  };

  const groupedExpenses = expenses.reduce((acc, expense) => {
    const { date } = expense;
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(expense);
    return acc;
  }, {});

  // Sort dates in "DD/MM/YYYY" format
  const sortedDates = Object.keys(groupedExpenses).sort((a, b) => {
    const [dayA, monthA, yearA] = a.split('/').map(Number);
    const [dayB, monthB, yearB] = b.split('/').map(Number);
    return new Date(yearA, monthA - 1, dayA) - new Date(yearB, monthB - 1, dayB);
  });

  return (
    <div className="p-4">
      <div className="flex justify-center mb-4">
        <button className="bg-gray-600 text-white py-2 px-4 rounded-lg" onClick={togglePopup}>
          Add Expense
        </button>
      </div>
      <AddExpense isOpen={isOpen} onClose={togglePopup} onAddExpense={handleAddExpense} selectedDate={new Date()} />
      {sortedDates.map(date => {
        const dateExpenses = groupedExpenses[date];
        const hasDebit = dateExpenses.some(expense => expense.transactionType === 'debit');
        const hasCredit = dateExpenses.some(expense => expense.transactionType === 'credit');

        return (
          <div key={date} className="pt-6 pb-4">
            <h3 className="text-xl font-bold mb-2">{date}</h3>
            {hasDebit && hasCredit ? (
              <div className="grid grid-cols-2 gap-52">
                <div className="flex flex-col space-y-4">
                  {dateExpenses.filter(expense => expense.transactionType === 'debit').map((expense, index) => (
                    <DebitCard key={index} amount={expense.amount} description={expense.description} />
                  ))}
                </div>
                <div className="flex flex-col space-y-4">
                  {dateExpenses.filter(expense => expense.transactionType === 'credit').map((expense, index) => (
                    <CreditCard key={index} amount={expense.amount} description={expense.description} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex w-2/5 flex-col space-y-4">
                {dateExpenses.map((expense, index) => (
                  expense.transactionType === 'debit' ? (
                    <DebitCard key={index} amount={expense.amount} description={expense.description} />
                  ) : (
                    <CreditCard key={index} amount={expense.amount} description={expense.description} />
                  )
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Reports;
