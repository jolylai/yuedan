import React from 'react';
import Header from '../components/Layout/Header'
import { withRouter } from 'dva/router'
import './App.less'

const App = ({
  children
}) => {
  return (
    <div className='app'>
      <Header />
      <div className='main'>
        {children}
      </div>
    </div>
  );
};

export default withRouter(App);