import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import Polaroid from '../components/Polaroid/';
// import styles from './IndexPage.css';

function IndexPage() {
  const polaroidProps = {
    label: 'dfafsdfasdfas',
    imgSrc: '../../assets/images/girl1.jpg',
  };
  return (
    <div>
      <Polaroid {...polaroidProps} />
      <Polaroid {...polaroidProps} />
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
