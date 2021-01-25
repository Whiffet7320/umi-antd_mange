import React from 'react';
import style from './index.css';
import { Row, Col,Button } from 'antd';
import { LoginOutlined } from '@ant-design/icons';

export default function index(props) {
  function loginOut() {
    props.onLoginOut && props.onLoginOut()
  }
  return (
    <Row className={style.header} justify='space-between'>
      <Col>
        <h1>欢迎登陆学生管理系统</h1>
      </Col>
      <Col>
        <p>用户名</p>
        <p>{props.userName}</p>
        <Button onClick={loginOut} type="primary" shape="circle" icon={<LoginOutlined />} />
      </Col>
    </Row>
  )
}
