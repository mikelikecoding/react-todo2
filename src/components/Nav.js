import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={styles.navStyles}>
      <nav>
        <ul className={styles.ulStyles}>
          <li className={styles.liStyles}>
            <Link className={styles.link} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/TodoContainer">
              Todo List
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
