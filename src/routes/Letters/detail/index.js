import React from 'react';
import styles from './index.less'

const LetterDetail = () => {
  const splitHash = window.location.hash.split('/')
  const tag = splitHash[splitHash.length - 1]
  const letter = require(`../Drawer/${tag}`)

  const renderLetter = () => {
    const content = []
    for (let key in letter) {
      if (key === 'title') {
        content.push(<h2 style={{ textAlign: 'center' }}>{letter[key]}</h2>)
      } else if (key === 'publishAt') {
        content.push(<div style={{ textAlign: 'right' }}>{letter[key]}</div>)
      } else {
        content.push(<p>{letter[key]}</p>)
      }
    }
    return content
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