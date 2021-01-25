import React from 'react';
import style from './index.css';
import MyMenu from '../components/Menu';
import MyHeader from '../components/containers/Header'
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

export default function index(props) {
  if (props.location.pathname == '/login') {
    return (<>{props.children}</>)
  } else {
    return (
      <Layout>
        <Header>
          <MyHeader />
        </Header>
        <Layout className={style.main}>
          <Sider>
            <MyMenu />
          </Sider>
          <Content style={{
            overflow:'auto'
          }}>
            {props.children}
          </Content>
        </Layout>
      </Layout>
    )
  }
}
