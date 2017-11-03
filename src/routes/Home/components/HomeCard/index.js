import React from 'react';
import styles from './index.less'

const HomeCard = () => {
  return (
    <div className={styles.homecard}>
      <div className='homecard-avatar' />
      <div className='homecard-word'>
        <div>To My Girlfriend</div>
        <div>I Love You Forever</div>
      </div>
    </div>
  );
};

export default HomeCard;