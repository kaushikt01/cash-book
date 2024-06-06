import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AddExpense = ({ isOpen, onClose, onAddExpense }) => {
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [transactionType, setTransactionType] = useState('debit');
    const [date, setDate] = useState(new Date()); // Default to current date

    const handleSubmit = () => {
        const expense = {
            amount,
            description,
            transactionType,
            date: date.toLocaleDateString(), // format: DD/MM/YYYY
        };
        onAddExpense(expense);
        onClose();
        setAmount('');
        setDescription('');
        setTransactionType('debit');
        setDate(new Date()); // Reset date to current date
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl mb-4">Add Expense</h2>
                <div className="flex mb-4">
                    <button
                        className={`flex-1 py-2 ${transactionType === 'debit' ? 'bg-gray-400 text-white' : 'bg-gray-200 text-gray-700'} rounded-l-lg`}
                        onClick={() => setTransactionType('debit')}
                    >
                        Debit
                    </button>
                    <button
                        className={`flex-1 py-2 ${transactionType === 'credit' ? 'bg-gray-400 text-white' : 'bg-gray-200 text-gray-700'} rounded-r-lg`}
                        onClick={() => setTransactionType('credit')}
                    >
                        Credit
                    </button>
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Amount</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Description</label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Date</label>
                    <DatePicker
                        selected={date}
                        onChange={(date) => setDate(date)}
                        dateFormat="dd/MM/yyyy"
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                </div>
                <div className="flex justify-end">
                    <button className="bg-gray-800 text-white py-2 font-md px-4 rounded-lg mr-2" onClick={handleSubmit}>
                        Submit
                    </button>
                    <button className="border border-black font-md text-black py-2 px-4 rounded-lg" onClick={onClose}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddExpense;
