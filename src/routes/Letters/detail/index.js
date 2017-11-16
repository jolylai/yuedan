import React from 'react';
import styles from './index.less'

const LetterDetail = () => {
  const splitHash = window.location.hash.split('/')
  const tag = splitHash[splitHash.length - 1]
  const letter = require(`../Drawer/${tag}`)

  const renderLetter = () => {
    return letter.map((item, index) => {
      return <p key={index}>{item}</p>
    })
  }
  return (
    <div className={styles.letterDetail}>
      <div className={styles.content}>
        {renderLetter()}
      </div>
    </div>
  );
};

export default LetterDetail;