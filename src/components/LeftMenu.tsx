import { Link } from "react-router-dom";
//using HOC map
const LeftMenu = () => {
  interface MenuItems {
    id: number;
    name: string;
    path: string;
  }
  const menuItems: MenuItems[] = [
    {
      id: 1,
      name: "📊 Dashboard",
      path: "/",
    },
    {
      id: 2,
      name: "👥 Users",
      path: "/users",
    },
    {
      id: 3,
      name: "⚙️ Settings",
      path: "settings",
    },
  ];
  return (
    <nav className="w-64 bg-gray-900 text-white flex flex-col p-5 gap-4 shadow-xl">
      <h1>My Admin</h1>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id} className="mb-2">
            <Link
              to={item.path}
              className="block w-full p-3 hover:bg-gray-700 rounded transition duration-300"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default LeftMenu;
