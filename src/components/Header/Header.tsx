import React from 'react';
import styles from './Header.module.scss';

const Header: React.FC = () => (
  <div className={styles.Header}>
    <div className={styles.hamb_menu}></div>
    <div className={styles.menu_wrapper}>
      <div className={styles.logo}></div>
      <ul className={styles.menu}>
        <li><a href="test.html">Sports Books</a></li>
        <li><a href="test.html">Sports Odds</a></li>
        <li><a href="test.html">Free Picks</a></li>
        <li><a href="test.html">Power Rankings</a></li>
        <li><a href="test.html">Betting Guide</a></li>
        <li><a href="test.html">News</a></li>
      </ul>
    </div>
  </div>
);

export default Header;
