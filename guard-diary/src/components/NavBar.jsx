import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex space-x-4 text-white">
        <li>
          <Link to="/parte-diarios">Parte Diarios</Link>
        </li>
        <li>
          <Link to="/ingreso-embarcaciones">Ingreso de Embarcaciones</Link>
        </li>
        <li>
          <Link to="/informacion-general">Información General</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
