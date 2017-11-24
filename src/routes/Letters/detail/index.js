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
        content.push(<h2 key={key} style={{ textAlign: 'center' }}>{letter[key]}</h2>)
      } else if (key.indexOf('subTitle') > -1) {
        content.push(<h3 key={key} style={{ fontWeight: 'bold' }}>{letter[key]}</h3>)
      } else if (key === 'publishAt') {
        content.push(<div key={key} style={{ textAlign: 'right' }}>{letter[key]}</div>)
      } else {
        content.push(<p key={key}>{letter[key]}</p>)
      }
    }
    return content
  }
  return (
    <div className={styles.letterDetail}>
      <button className={styles.content}>
        {renderLetter()}
        <p style={{ float: 'right' }}>Write by your boyfriend Guolin Lai</p>
      </button>
    </div>
  );
};

export default LetterDetail;