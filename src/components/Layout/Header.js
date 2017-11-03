import React from 'react';
import { Button } from 'antd';
import styles from './Header.less';

const Header = () => {
  return (
    <div className={styles.header}>
      <span className='header-avatar' />
    </div>
  );
};

export default Header;
