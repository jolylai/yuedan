import React from 'react';
import { Row, Col } from 'antd';
import HomeCard from './components/HomeCard'
import Polaroid from '../../components/Polaroid'

import styles from './index.less'

const Home = () => {
  const colProps = {
    md: {
      span: 10,
      offset: 10
    },
    sm: 24
  }
  const colProps2 = {
    md: 4,
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
      <Row type="flex" justify="end">
        <Col {...colProps2}>
          <Polaroid imgName='yay' />
        </Col>
        <Col {...colProps2}>
          <Polaroid imgName='yay' />
        </Col>
        <Col {...colProps2}>
          <Polaroid imgName='yay' />
        </Col>
      </Row>
      <Row type="flex" justify="end">
        <Col {...colProps2}>
          <Polaroid imgName='yay' />
        </Col>
        <Col {...colProps2}>
          <Polaroid imgName='yay' />
        </Col>
        <Col {...colProps2}>
          <Polaroid imgName='yay' />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
