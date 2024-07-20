import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import AddExpense from './AddExpense';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [expenses, setExpenses] = useState([]);
    const navigate = useNavigate();

    const togglePopup = () => {
        if (isOpen) navigate('/reports');
        setIsOpen(!isOpen);
    };

    const handleAddExpense = (expense) => {
        setExpenses(prevExpenses => [...prevExpenses, expense]);
    };

    return (
        <div className="p-6 space-y-6">
            <div className="pt-32 flex flex-wrap gap-6">
                <div className="flex-1 p-4 bg-white shadow-md rounded-md">
                    <h2 className="text-xl font-semibold text-gray-800">Total Spends</h2>
                    <p className="text-2xl font-bold text-gray-900">$1,234.56</p>
                </div>

                <div className="flex-1 p-4 bg-white shadow-md rounded-md">
                    <h2 className="text-xl font-semibold text-gray-800">Balance</h2>
                    <p className="text-2xl font-bold text-gray-900">$567.89</p>
                </div>

                <div className="flex-1 p-4 bg-white shadow-md rounded-md">
                    <h2 className="text-xl font-semibold text-gray-800">Savings</h2>
                    <p className="text-2xl font-bold text-gray-900">$345.67</p>
                </div>
            </div>

            <div className="flex justify-center mt-6">
                <button className="bg-gray-600 text-white py-2 px-4 rounded-lg" onClick={togglePopup}>
                    Add Expense
                </button>
                <AddExpense isOpen={isOpen} onClose={togglePopup} onAddExpense={handleAddExpense} selectedDate={new Date()} />
            </div>
        </div>
    );
};

export default Home;
