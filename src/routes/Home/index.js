import React from 'react';
import { Row, Col } from 'antd';
import HomeCard from './components/HomeCard'
import Polaroid from '../../components/Polaroid'

import styles from './index.less'

const Home = () => {
  const colProps = {
    md: 24,
    sm: 24
  }
  const colProps2 = {
    md: 6,
    sm: 24
  }
  return (
    <div className={styles.home}>
      <Row>
        <Col {...colProps} >
          <div className='home-containar'>
            Our Photo Wall
          </div>
        </Col>
      </Row>
      <Row gutter={26} style={{ margin: 0, padding: 0 }}>
        <Col {...colProps2}>
          <Polaroid imgName='we1' />
        </Col>
        <Col {...colProps2}>
          <Polaroid imgName='we2' />
        </Col>
        <Col {...colProps2}>
          <Polaroid imgName='we3' />
        </Col>
        <Col {...colProps2}>
          <Polaroid imgName='we4' />
        </Col>
        <Col {...colProps2}>
          <Polaroid imgName='we5' />
        </Col>
        <Col {...colProps2}>
          <Polaroid imgName='we6' />
        </Col>
        <Col {...colProps2}>
          <Polaroid imgName='me1' />
        </Col>
        <Col {...colProps2}>
          <Polaroid imgName='me2' />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
