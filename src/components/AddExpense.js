import React, { useState } from 'react';

const AddExpense = ({ isOpen, onClose }) => {
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [transactionType, setTransactionType] = useState('debit');

    const handleSubmit = () => {
        console.log('Amount:', amount);
        console.log('Description:', description);
        console.log('Transaction Type:', transactionType);
        onClose();
        setAmount('');
        setDescription('');
        setTransactionType('debit');
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
                        className={`flex-1 py-2 ${transactionType === 'debit' ? 'rounded bg-gray-400 text-white' : 'rounded bg-gray-200 text-gray-700'} rounded-lg-l`}
                        onClick={() => setTransactionType('debit')}
                    >
                        Debit
                    </button>
                    <button
                        className={`flex-1 py-2 ${transactionType === 'credit' ? 'rounded bg-gray-400 text-white' : 'rounded bg-gray-200 text-gray-700'} rounded-lg-r`}
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
