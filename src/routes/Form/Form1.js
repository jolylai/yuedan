import React from 'react';
import { Form, Input } from 'antd';

const FormItem = Form.Item;

const Form1 = ({
  form: {
    getFieldDecorator,
  validateFields,
  },
}) => {
  const validate = () => {
    validateFields((err, fields) => {
      if (!err) {
        console.log('fileds', fields);
      }
    })
  }
  return (
    <div>
      <FormItem>
        {
          getFieldDecorator('Form1')(<Input />)
        }
      </FormItem>
    </div>
  );
};

export default Form.create()(Form1);
