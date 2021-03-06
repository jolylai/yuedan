import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { Link } from 'dva/router';
import styles from './index.less';

const FormItem = Form.Item;

const Login = ({
  form: {
    getFieldDecorator,
  getFieldValue,
  },
}) => {
  const handleLogin = () => {
    const password = getFieldValue('password');
    if (password === '1314520') {
      const loginBtn = document.querySelector('#loginSuccess');
      loginBtn.click();
    } else {
      message.warn('密码错误');
    }
  };

  return (
    <div className={styles.login}>
      <Form className={styles.form}>
        <FormItem>
          <div className={styles.touxiang} />
        </FormItem>
        <FormItem>
          {
            getFieldDecorator('password')(<Input placeholder="请输入密码" onPressEnter={handleLogin} />)
          }
        </FormItem>
        <FormItem>
          <Button type="primary" style={{ width: '100%' }} onClick={handleLogin}>登录</Button>
        </FormItem>
        <Link style={{ display: 'none' }} to="/home" id="loginSuccess">Login</Link>
      </Form>
    </div>
  );
};

export default Form.create()(Login);
