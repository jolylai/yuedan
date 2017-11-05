import React from 'react';
import { Row, Col } from 'antd';
import LettersCard from '../../components/LettersCard';

const letterList = [
  {
    title: '杭州',
    summary: '杭州之旅',
    imgName: 'arrow',
    linkTo: 'hangzhou'
  }, {
    title: '苏州',
    summary: '苏州之旅',
    imgName: 'girl1',
    linkTo: 'suzhou'
  }
]

const Letters = () => {
  const renderLetterList = () => {
    const colProps = {
      md: 6,
      sm: 12
    }
    return letterList.map((item, index) => {
      return (
        <Col key={index} {...colProps}>
          <LettersCard
            title={item.title} 
            summary={item.summary}
            imgName={item.imgName}
            linkTo={item.linkTo}
          />
        </Col>
      )
    })
  }
  return (
    <div>
      <Row>
        {renderLetterList()}
      </Row>
    </div>
  );
};

export default Letters;