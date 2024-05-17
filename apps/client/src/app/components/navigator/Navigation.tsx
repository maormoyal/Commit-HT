import styles from './Navigation.module.scss';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {

  const location = useLocation();

  const checkActive = (path: string): string => {
    return location.pathname === path ? styles.active : '';
  };

  return (
    <nav className={styles.nav}>
      <ul>
        <li className={checkActive('/')}>
          <Link to="/">form</Link>
        </li>
        <li className={checkActive('/user')}>
          <Link to="/user">user</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
