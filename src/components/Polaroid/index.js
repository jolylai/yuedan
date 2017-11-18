import React, { Component } from 'react';
import styles from './index.less';

class Polaroid extends Component {
  static defaultProps = {
    imgName: "yay"
  }
  componentDidMount() {
    const _polaroid = this.polaroid, polaroidImg = this.polaroidImg;
    _polaroid.style.transform = `rotate(${Math.random() > 0.5 ? '-' : ''}${Math.random() * 10 + 'deg'})`;
  }

  render() {
    const { label, imgName } = this.props;
    return (
      <div ref={(polaroid) => { this.polaroid = polaroid }} className={styles.polaroid}>
        <div className="polaroid-img">
          <img src={require(`../../assets/images/${imgName}.jpg`)} alt="img" />
        </div>
      </div>
    );
  }
}

export default Polaroid;