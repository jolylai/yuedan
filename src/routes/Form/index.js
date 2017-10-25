import React from 'react';
import { Form, Button } from 'antd';
import Form1 from './Form1';
import Form2 from './Form2';

const IndexForm = ({
  form: {
    getFieldsValue,
  },
}) => {
  const getFields = () => {
    const fields = getFieldsValue();
    console.log('fields', fields);
  };

  return (
    <div>
      <Form>
        <Form1 />
        <Form2 />
      </Form>
      <Button type="primary" onClick={getFields}>getFields</Button>
    </div>
  );
};

class Index extends React.Component {
  render() {
    console.log(this);
    return (
      <div>
        <Form>
          <Form1 ref={(inst) => this.formRef = inst} />
          <Form2 />
        </Form>
      </div>
    )
  }
}

export default Form.create()(Index);
