import React, { Component } from 'react';
import styles from './index.less';

const info = '  一个人静坐着，想着你对我说的话，回想在你出去旅行的这段时间里，每天都挂念着你，想时刻都能在你身边照顾你，和你分享生活的点点滴滴，给你带来快乐，不让你伤心难过，但是确实像你说的那样，你和慧婷两个女生出门在外，没有时常问下你们到哪了，在做什么，住的地方安排好了没，住的环境怎么样，去到那么远的地方，也没有时常和你通下电话，询问下近况，我承认我作为男友是我还做的不够好，让你感觉像我一点都不在意你。\n   说心里话，在你们出去旅行的这段时间里我时刻想念你，担心你的安全，可我却不善表达自己的情感，但不代表我不在意你。\n   我爱你，我要和你一直走下去，我一直坚信能和你永远在一起，直至人生终点，以我余生关心你，照顾你，永不变心，把我能做到的最好的给你，好好努力为你和家人提供一个更好的环境，让你幸福的生活，这是我想对你说的真心话。但我现在还做的不够好，也让你受委屈了，让你感觉一点都不在意你，其实不是那样。\n   我很开心你能真心跟我说出我的不足，也在以后的时光中，指出我做的不好的地方，我一定好好改，变成一个更懂你，更体贴你，更能给你带来幸福感的男友。\n   2017-10-18 2:05:00';

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
    }, 300);
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
