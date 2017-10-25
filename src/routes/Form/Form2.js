import React from 'react';
import { Form, Input } from 'antd';

const FormItem = Form.Item;

const Form2 = ({
  form: {
    getFieldDecorator,
  },
}) => {
  return (
    <div>
      <FormItem>
        {
          getFieldDecorator('Form2')(<Input />)
        }
      </FormItem>
    </div>
  );
};

export default Form.create()(Form2);
