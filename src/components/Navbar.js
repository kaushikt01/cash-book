import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-between">
        <li className="flex items-center">
          <Link className="text-white hover:text-gray-400" to="/home">Home</Link>
        </li>
        <li className="flex gap-8">
          <Link className="text-white hover:text-gray-400" to="/">Daily Report</Link>
          <Link className="text-white hover:text-gray-400" to="/weekly-report">Weekly Report</Link>
          <Link className="text-white hover:text-gray-400" to="/monthly-report">Monthly Report</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
