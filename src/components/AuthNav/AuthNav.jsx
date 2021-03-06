import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './AuthNav.module.css';

const AuthNav = () => (
  <div>
    <NavLink
      to="/register"
      exact
      className={styles.link}
      activeClassName={styles.activeLink}>
      Sign_up
    </NavLink>
    <NavLink
      to="/login"
      exact
      className={styles.link}
      activeClassName={styles.activeLink}>
      Log_in
    </NavLink>
  </div>
);

export default AuthNav;
