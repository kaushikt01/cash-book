import { Link } from 'react-router-dom';
import { logout } from '../services/ApiServices';
import { useAuth } from '../utils/AuthContext';

const Navbar = () => {

  const { setIsLoggedIn } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      setIsLoggedIn(false); // Update the login state
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <nav className="bg-gray-900 p-4">
      <ul className="flex justify-between">
        <li className="flex items-center">
          <Link className="text-white hover:text-gray-400" to="/">Home</Link>
        </li>
        <li className="flex items-center gap-8">
          <Link className="text-white hover:text-gray-400" to="/reports">Reports</Link>
          <button className="ml-4 bg-red-500 text-white px-4 py-2 rounded"
            onClick={handleLogout} >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
