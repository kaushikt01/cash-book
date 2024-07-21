import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import AddExpense from './AddExpense';
import { fetchDashboardData } from '../services/ApiServices';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [expenses, setExpenses] = useState([]);
    const [dashboardData, setDashboardData] = useState({
        totalSpends: {},
        totalCredit: {},
        balance: {},
        savings: 0,
    });
    const [timePeriod, setTimePeriod] = useState('week'); // Default to 'week'
    const [periodOptions] = useState(['all', 'week', 'month', 'today']);
    const [selectedPeriod, setSelectedPeriod] = useState('week'); // Default to 'week'
    const navigate = useNavigate();

    //Adding this to block multiple api calls in dev mode 
    const isFirstLoad = useRef(true);

    useEffect(() => {
        const loadDashboardData = async () => {
            try {
                const response = await fetchDashboardData();
                setDashboardData(response.data);
            } catch (error) {
                console.error('Failed to fetch dashboard data:', error);
            }
        };

        if (isFirstLoad.current) {
            loadDashboardData();
            isFirstLoad.current = false;
        }
    }, []);

    const togglePopup = () => {
        if (isOpen) navigate('/reports');
        setIsOpen(!isOpen);
    };

    const handleAddExpense = (expense) => {
        setExpenses(prevExpenses => [...prevExpenses, expense]);
    };

    const handleTimePeriodChange = () => {
        const currentIndex = periodOptions.indexOf(selectedPeriod);
        const nextIndex = (currentIndex + 1) % periodOptions.length;
        const newPeriod = periodOptions[nextIndex];
        setTimePeriod(newPeriod);
        setSelectedPeriod(newPeriod);
    };

    const formatCurrency = (value) => `₹ ${parseFloat(value).toFixed(2)}`;

    const renderCard = (title, value) => (
        <div className="flex-1 p-4 flex-col bg-white shadow-md rounded-md relative">
            <div className="flex flex-row">
                <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
                <div className="flex pl-2 items-center space-x-2">
                    <button
                        className="text-gray-500 hover:text-gray-700 inline-flex"
                        onClick={handleTimePeriodChange} >
                        &lt;&gt;
                    </button>
                    <div className="text-sm text-gray-600">
                        {selectedPeriod.charAt(0).toUpperCase() + selectedPeriod.slice(1)}
                    </div>
                </div>
            </div>
            <p className="text-2xl font-bold text-gray-900">{formatCurrency(value)}</p>
        </div>
    );

    return (
        <div className="p-6 space-y-6">
            <div className="pt-32 flex flex-wrap gap-6">
                {renderCard('Total Spends', dashboardData.totalSpends[timePeriod] || 0)}
                {renderCard('Balance', dashboardData.balance[timePeriod] || 0)}
                {renderCard('Savings', dashboardData.savings)}
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
