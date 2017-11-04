import React from 'react';
import styles from './index.less'

const HomeCard = () => {
  return (
    <div className={styles.homecard}>
      <div className='homecard-avatar' />
      <div className='homecard-word'>
        <div>Let's write dowm our daily life</div>
        <div>This website is write to my girlfriend YuedanLin</div>
      </div>
    </div>
  );
};

export default HomeCard;