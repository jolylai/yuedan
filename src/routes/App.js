import React from 'react';
import debounce from 'lodash.debounce';
import { withRouter, Link } from 'dva/router'
import './App.less'

const App = ({
  children
}) => {
  const backBtn = () => {
    history.back()
  }
  const getScrollTop = () => {
    let scrollTop = 0;
    if (document.documentElement && document.documentElement.scrollTop) {
      scrollTop = document.documentElement.scrollTop;
    }
    else if (document.body) {
      scrollTop = document.body.scrollTop;
    }
    return scrollTop;
  }
  const isShowBackBtn = () => {
    const app = document.querySelector('.app')
    const top = getScrollTop()
    console.log('top', top);
  }
  document.addEventListener('wheel', debounce(isShowBackBtn, 800));
  return (
    <div className='app'>
      {children}
      {location.hash.split('/')[1] ? <button onClick={backBtn} style={{ position: 'fixed', bottom: '2em', right: '2em' }}>Back</button> : null}
    </div>
  );
};

export default withRouter(App);
