import React, { useState } from 'react';
import AddExpense from './AddExpense';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="py-4 flex justify-center">
      <button className="bg-gray-600 text-white py-2 px-4 rounded-lg" onClick={togglePopup}>
        Add Expense
      </button>
      <AddExpense isOpen={isOpen} onClose={togglePopup} />
    </div>
  );
};

export default Home;
