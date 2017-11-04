import React from 'react';
import { Row, Col } from 'antd';
import HomeCard from './components/HomeCard'
import HomeNavBar from './components/HomeNavBar'
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
            <HomeCard />
            {/*<HomeNavBar />*/}
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: '3em' }} type="flex" justify="end">
        <Col {...colProps2}>
          <Polaroid imgName='girl1' />
        </Col>
        <Col {...colProps2}>
          <Polaroid imgName='girl2' />
        </Col>
        <Col {...colProps2}>
          <Polaroid imgName='girl3' />
        </Col>
      </Row>
      <Row type="flex" justify="end">
        <Col {...colProps2}>
          <Polaroid imgName='girl4' />
        </Col>
        <Col {...colProps2}>
          <Polaroid imgName='girl5' />
        </Col>
        <Col {...colProps2}>
          <Polaroid imgName='girl6' />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
