import { Link } from "react-router-dom";
import styles from "./SideNavigator.module.css";
const SideNavigator = () => {
  return (
    <div className={styles.sideNav}>
      <div className={styles.listElement}>
        <Link className={styles.link} to="/clientes">
          Clientes
        </Link>
      </div>
      <div className={styles.listElement}>
        <Link className={styles.link} to="/cuentas">
          Cuentas
        </Link>
      </div>
      <div className={styles.listElement}>
        <Link className={styles.link} to="/movimientos">
          Movimientos
        </Link>
      </div>
    </div>
  );
};

export default SideNavigator;
