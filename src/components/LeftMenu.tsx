import { Link } from "react-router-dom";
const LeftMenu = () => {
  return (
    <nav className="w-64 bg-gray-900 text-white flex flex-col p-5 gap-4 shadow-xl">
      <h1>My Admin</h1>
      <ul>
        <li className="p-3 hover:bg-gray-700 rounded transition duration-300">
          <Link to="/" className="">
            📊 Dashboard
          </Link>
        </li>
        <li className="p-3 hover:bg-gray-700 rounded transition duration-300">
          <Link to="/users" className="">
            👥 Users
          </Link>
        </li>
        <li className="p-3 hover:bg-gray-700 rounded transition duration-300">
          <Link to="settings" className="">
            ⚙️ Settings
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default LeftMenu;
