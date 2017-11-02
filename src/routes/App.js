import React from 'react';
import Header from '../components/Layout/Header'
import { withRouter } from 'dva/router'

const App = ({
  children
}) => {
  return (
    <div>
      <Header />
      <div className='main'>
        {children}
      </div>
    </div>
  );
};

export default withRouter(App);