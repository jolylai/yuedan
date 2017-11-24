import React from 'react';
import { Row, Col } from 'antd';
import Polaroid from '../../components/Polaroid'

import styles from './index.less'

const Photos = () => {
  return (
    <div className={styles.home}>
      <div className='home-containar'>
        Our Photo Wall
      </div>
      <div>
        <Polaroid imgName='we1' />
        <Polaroid imgName='we2' />
        <Polaroid imgName='we3' />
        <Polaroid imgName='we4' />
        <Polaroid imgName='we5' />
        <Polaroid imgName='we6' />
        <Polaroid imgName='me1' />
        <Polaroid imgName='me2' />
      </div>
    </div>
  );
};

export default Photos;
