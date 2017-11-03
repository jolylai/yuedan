import React, { Component } from 'react';
import { Card } from 'antd';
import styles from './index.less';

class Polaroid extends Component {
  componentDidMount() {
    const _polaroid = this.polaroid, polaroidImg = this.polaroidImg;
    _polaroid.style.transform = `rotate(${Math.random() > 0.5 ? '-' : ''}${Math.random() * 16 + 'deg'})`;
  }

  render() {
    const { label, imgKey } = this.props;
    return (
      <div ref={(polaroid) => { this.polaroid = polaroid }} className={styles.polaroid}>
        <Card style={{ height: '100%' }} bodyStyle={{ padding: 0, height: '100%'}}>
          <div className="polaroid-img">
            <img src={imgKey ? require(`../../assets/images/${imgKey}.jpg`) : require(`../../assets/images/girl1.jpg`)} alt="img" />
          </div>
        </Card>
      </div>
    );
  }
}

export default Polaroid;