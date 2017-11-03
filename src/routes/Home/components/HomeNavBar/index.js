import React from 'react';
import { Link } from 'dva/router'
import styles from './index.less'

const HomeNavBar = () => {
  return (
    <div className={styles.homeNavBar}>
      <Link to='/letters'>Letters</Link>
      <Link to='/journey'>Journey</Link>
    </div>
  );
};

export default HomeNavBar;