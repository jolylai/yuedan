import React from 'react';
import { Link } from 'dva/router'
import styles from './index.less'

const LettersCard = ({
  title='Title',
  summary='Summary',
  linkTo,
  imgName='touxiang'
}) => {
  return (
    <div className={styles.lettersCard}>
      <div className='lettersCard-img'>
        <img src={require(`../../assets/images/${imgName}.jpg`)} alt='img' />
      </div>
      <div className='lettersCard-content'>
        <div className='lettersCard-title'>{title}</div>
        <div className='lettersCard-summary'>{summary}</div>
        <Link className='lettersCard-read' to={`/letters/${linkTo}`}>Read</Link>
      </div>
    </div>
  );
};

export default LettersCard;