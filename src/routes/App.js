import React from 'react';
import { withRouter, Link } from 'dva/router'
import './App.less'

const App = ({
  children
}) => {
  const backBtn = () => {
    history.back()
  }
  return (
    <div className='app'>
      {children}
      {location.hash.split('/')[1] ? <button onClick={backBtn} style={{ position: 'fixed', bottom: '2em', right: '2em' }}>Back</button> : null}
    </div>
  );
};

export default withRouter(App);