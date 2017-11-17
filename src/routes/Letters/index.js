import React from 'react';
import { Row, Col, Card } from 'antd';
import moment from 'moment';
// import LettersCard from '../../components/LettersCard';
import styles from './index.less';
import { Link } from 'dva/router';

const letterList = [
  {
    title: '湖南',
    summary: '你和慧婷的湖南之行',
    imgName: 'arrow',
    linkTo: '171018',
    updatedAt: "2017-10-18T08:05:36.350Z"
  },
  {
    title: '恩',
    summary: 'Last chance',
    imgName: 'flower',
    linkTo: '171117',
    updatedAt: "2017-11-17 16:18:18"
  }
]

const Letters = () => {
  const renderLetterList = () => {
    const colProps = {
      md: 4,
      sm: 6
    }
    return letterList.map((item, index) => {
      return (
        <Col key={index} {...colProps}>
          <Card bodyStyle={{ padding: 0 }}>
            <Link to={`/letters/${item.linkTo}`}>
              <div className={styles.cardImg}>
                <img src={require(`../../assets/images/${item.imgName}.jpg`)} alt='img' />
              </div>
              <div className={styles.cardContent}>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <span className='ago'>{moment(item.updatedAt).fromNow()}</span>
                <span className='updateTime'>{moment(item.updatedAt).format('YYYY-MM-DD HH:mm:ss')}</span>
              </div>
            </Link>
          </Card>
        </Col>
      )
    })
  }

  return (
    <div className={styles.letters}>
      <div />
      <Row gutter={16} style={{ paddingTop: 126, margin: 0 }}>
        {renderLetterList()}
      </Row>
    </div>
  );
};

export default Letters;