import React from 'react';
import { Link } from 'dva/router';
import style from './index.less';

const Home = () => {
  return (
    <div className={style.home}>
      <div className={style.avatar} />
      <h2>Collecte Every Drop of Love to You</h2>
      <h3>大傻子和小月儿的幸福小栈</h3>
      <div className={style.btnList}>
        <Link to='/photos'><button className="btn-large">Photos</button></Link>
        <Link to='/letters'><button className="btn-large">Letters</button></Link>
        <Link to='/journey'><button className="btn-large">Journey</button></Link>
        <Link to='/ourpromise'><button className="btn-large">Our Promise</button></Link>
      </div>
    </div>
  );
};

export default Home;