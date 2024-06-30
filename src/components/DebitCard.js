import React from 'react';

const DebitCard = ({ amount, description }) => {
    return (
        <div className="flex p-4 rounded-lg shadow bg-red-100">
            <span className="text-lg">{description} : </span>
            <span className="flex ml-auto text-lg font-semibold"> {amount}</span>
        </div>
    );
};

export default DebitCard;
