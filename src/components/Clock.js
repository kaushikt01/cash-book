import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formattedDate = currentTime.toLocaleDateString();
    const formattedTime = currentTime.toLocaleTimeString();

    return (
        <div className="bg-white text-center rounded-lg shadow-lg p-4">
            <div className="text-lg font-bold mb-2">{formattedDate}</div>
            <div className="text-4xl font-bold">{formattedTime}</div>
        </div>
    );
};

export default DigitalClock;
