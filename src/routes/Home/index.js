import React from 'react';
import HomeCard from './components/HomeCard'
import HomeNavBar from './components/HomeNavBar'
import Polaroid from '../../components/Polaroid'

import styles from './index.less'

const Home = () => {
  return (
    <div className={styles.home}>
      <div className='home-containar'>
        <HomeCard />
        <HomeNavBar />
      </div>
      <div className='home-polaroid'>
        <Polaroid />
        <Polaroid imgKey='girl2' />
        <Polaroid imgKey='girl3' />
        <Polaroid imgKey='girl4' />
        <Polaroid imgKey='girl5' />
        <Polaroid imgKey='girl6' />
      </div>
    </div>
  );
};

export default Home;
