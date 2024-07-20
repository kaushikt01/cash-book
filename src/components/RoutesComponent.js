import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import { useAuth } from '../utils/AuthContext';
import Reports from './reports/Reports';

const RoutesComponent = () => {
    const { isLoggedIn } = useAuth();

    return (
        <Routes>
            {isLoggedIn ? (
                <>
                    <Route path="/" element={<Home />} />
                    <Route path="/reports" element={<Reports />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </>
            ) : (
                <>
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<Navigate to="/login" />} />
                </>
            )}
        </Routes>
    );
};

export default RoutesComponent;
