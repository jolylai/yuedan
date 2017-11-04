import React from 'react';
import { Button, Row, Col } from 'antd';
import { Link } from 'dva/router';
import classnames from 'classnames';
import styles from './Header.less';

class Header extends React.Component {
  state = {
    activeKey: 1
  }
  isActive = (e) => {
    const activeKey = Number(e.target.dataset.key)
    this.setState({
      activeKey
    })
  }
  render() {
    const { activeKey } = this.state
    const colAvatar = {
      md: {
        span: 5
      },
      sm: {
        span: 24
      }
    }
    const colNav = {
      md: {
        span: 2,
      },
      sm: {
        span: 4,
      }
    }
    return (
      <Row className={styles.header}>
        <Col {...colAvatar}>
          <span className='header-avatar' />
          <span className='header-name'>YuedanLin</span>
        </Col>
        <Col {...colNav}>
          <Link data-key={1} onClick={this.isActive} className={activeKey === 1 ? 'isActive' : ''} to='/'>Home</Link>
        </Col>
        <Col {...colNav}>
          <Link data-key={2} onClick={this.isActive} className={activeKey === 2 ? 'isActive' : ''} to='/letters'>Letters</Link>
        </Col>
        <Col {...colNav}>
          <Link data-key={3} onClick={this.isActive} className={activeKey === 3 ? 'isActive' : ''} to='/journey'>Journey</Link>
        </Col>
      </Row>
    );
  }
};

export default Header;
