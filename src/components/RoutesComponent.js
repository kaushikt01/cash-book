
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import DailyReport from './reports/DailyReport';
import WeeklyReport from './reports/WeeklyReport';
import MonthlyReport from './reports/MonthlyReport';

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<DailyReport />} />
            <Route path="/home" element={<Home />} />
            <Route path="/weekly-report" element={<WeeklyReport />} />
            <Route path="/monthly-report" element={<MonthlyReport />} />
        </Routes>
    );
};

export default RoutesComponent;