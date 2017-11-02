import React from 'react';
import { Button } from 'antd';
import styles from './Header.less';

const Header = () => {
  return (
    <div className={styles.header}>
      <span className='header-avatar' />
      <Button className='header-login' type='primary'>Login</Button>
    </div>
  );
};

export default Header;
