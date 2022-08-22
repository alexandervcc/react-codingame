import Logo from "../../images/Logo.jpg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        <img className={styles.imgLogo} src={Logo} alt="logo" />
      </div>
    </header>
  );
};

export default Header;
