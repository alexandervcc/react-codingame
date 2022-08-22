import { Link } from "react-router-dom";
import styles from "./SideNavigator.module.css";
const SideNavigator = () => {
  return (
    <div className={styles.sideNav}>
      <ul>
        <li>
          <Link to="/clientes">Clientes</Link>
        </li>
        <li>
          <Link to="/cuentas">Cuentas</Link>
        </li>
        <li>
          <Link to="/movimientos">Movimientos</Link>
        </li>
        <li>
          <Link to="/reportes">Reportes</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNavigator;
