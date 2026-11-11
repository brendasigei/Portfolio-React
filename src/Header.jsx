import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

// NavLink adds the "active" style to the link for the current page.
function getLinkClass({ isActive }) {
  return isActive ? `${styles.link} ${styles.active}` : styles.link;
}

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.brand}>Creative Studio</span>
        <nav aria-label="Main navigation" className={styles.nav}>
          <NavLink to="/" end className={getLinkClass}>
            Portfolio
          </NavLink>
          <NavLink to="/add" className={styles.addButton}>
            Add Project
          </NavLink>
        </nav>
      </div>
    </header>
  );
}