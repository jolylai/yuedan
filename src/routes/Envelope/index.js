import React, { Component } from 'react';
import styles from './index.less';

const info = '迟来的情书';

class Envelope extends Component {
  state = {
    content: '',
  }
  componentDidMount() {
    let end = 0;
    const interval = setInterval(() => {
      const content = info.slice(0, end);
      end = end + 1;
      this.setState({ content });
      if (info.length < end) {
        clearInterval(interval);
      }
    }, 1000);
  }

  render() {
    const { content } = this.state;
    return (
      <div className={styles.envelope}>
        <div className={styles.main} id="content">{content}</div>
      </div>
    );
  }
}

export default Envelope;
