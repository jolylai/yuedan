import React, { Component } from 'react';
import styles from './index.less';

class Polaroid extends Component {
  componentDidMount() {
    const _polaroid = this.polaroid, polaroidImg = this.polaroidImg;
    _polaroid.style.transform = `rotate(${Math.random() > 0.5 ? '-' : ''}${Math.random() * 16 + 'deg'})`;
    // _polaroid.style.backgroundImage = `url('../../assets/images/touxiang.jpg')`
    // polaroidImg.src = "/static/touxiang.jpg"
    // console.log('img', polaroidImg);
  }

  render() {
    const { label } = this.props;
    return (
      <div ref={(polaroid) => { this.polaroid = polaroid }} className={styles.polaroid}>
        <div className="polaroid-img">
          <img ref={(img) => { this.polaroidImg = img }} src={require('../../assets/images/flower.jpg')} alt="img" />
        </div>
        <span>{label}</span>
      </div>
    );
  }
}

export default Polaroid;