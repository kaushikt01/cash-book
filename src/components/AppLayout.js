import React from 'react';
import Navbar from './Navbar';
import Clock from './Clock';

export function AppLayout() {
    return (
        <div>
            <Navbar />
            <div className='absolute right-4 p-4'><Clock /></div>
        </div>
    );
}
