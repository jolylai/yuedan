import React from 'react';
import { Link } from 'dva/router';
import style from './index.less';

const Home = () => {
  return (
    <div className={style.home}>
      <div className={style.avatar} />
      <h2>Collecte Every Drop of Love to You</h2>
      <div className={style.btnList}>
        <Link to='/photos'><button className="btn-large">Photos</button></Link>
        <Link to='/letters'><button className="btn-large">Letters</button></Link>
        <Link to='/journey'><button className="btn-large">Journey</button></Link>
        <Link to='/about'><button className="btn-large">About</button></Link>
      </div>
    </div>
  );
};

export default Home;