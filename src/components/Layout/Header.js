import React from 'react';

import styles from './Header.less';

const Header = () => {
  return (
    <ul className={styles.headerUl}>
      <li>心历路程</li>
      <li>陪你环游世界</li>
    </ul>
  );
};

export default Header;
