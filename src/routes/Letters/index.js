import React from 'react';
import moment from 'moment';
import letterList from './letterList';
import styles from './index.less';
import { Link } from 'dva/router';

const Letters = () => {
  const renderLetterList = () => {
    return letterList.map((item, index) => {
      return (
        <button key={index} style={{ margin: '1em', backgroundColor: 'beige' }}>
          <div className="card" style={{ width: '20rem' }}>
            <div className="card-body">
              <h4 className="card-title">{item.title}</h4>
              <p className="card-text">{item.summary}</p>
              <Link to={`/letters/${item.linkTo}`} className="card-link" href="#">Read the Letter</Link>
            </div>
            <div className="card-footer">
              <span className='ago'>{moment(item.updatedAt).fromNow()}</span>
              <span className='updateTime'>{moment(item.updatedAt).format('YYYY-MM-DD HH:mm:ss')}</span>
            </div>
          </div>
        </button>
      )
    })
  }

  return (
    <div className={styles.letters}>
      {renderLetterList()}
    </div>
  );
};

export default Letters;