import { List } from "@phosphor-icons/react";
import Logo from "../../assets/logo.svg";
import styles from "./NavBar.module.scss";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li>
          <img src={Logo} alt="Logo" className={styles.logo} />
        </li>
        <li>
          <List size={32} className={styles.menuIcon} />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
