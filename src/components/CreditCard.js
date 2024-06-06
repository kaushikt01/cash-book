import React from 'react';

const CreditCard = ({ amount, description }) => {
    return (
        <div className="flex justify-center p-4 rounded-lg shadow bg-green-100">
            <span className="text-lg">{description} : </span>
            <span className="text-lg font-semibold"> {amount}</span>
        </div>
    );
};

export default CreditCard;
