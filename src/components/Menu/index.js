import React from 'react';
import { NavLink,history } from 'umi';
// import './index.css';
import { Menu } from 'antd';

const { SubMenu } = Menu;

export default function index() {
  let stuSubMenu = history.location.pathname.indexOf("/student") == 0 ? 'student' : false;
  if(history.location.pathname.indexOf("/student") !== -1){
    stuSubMenu = 'student';
  }else if(history.location.pathname.indexOf("/stu2") !== -1){
    stuSubMenu = 'stu2';
  }
  console.log(stuSubMenu)
  return (
    <>
      <Menu defaultOpenKeys={[stuSubMenu]} selectedKeys={[history.location.pathname]} theme='dark' mode='inline'>
        <Menu.Item key='/'>
          <NavLink exact to='/'>首页</NavLink>
        </Menu.Item>
        <SubMenu title="学生管理" key='student'>
          <Menu.Item key='/student'>
            <NavLink exact to='/student'>学生列表</NavLink>
          </Menu.Item>
          <Menu.Item key='/student/add'>
            <NavLink exact to='/student/add'>添加学生</NavLink>
          </Menu.Item>
          <Menu.Item key='/student/avatar'>
            <NavLink exact to='/student/avatar'>更改学生头像</NavLink>
          </Menu.Item>
        </SubMenu>
        <SubMenu title="学生管理" key='stu2'>
          <Menu.Item key='/stu2'>
            <NavLink exact to='/stu2'>学生列表</NavLink>
          </Menu.Item>
          <Menu.Item key='/stu2/add'>
            <NavLink exact to='/stu2/add'>添加学生</NavLink>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </>
  )
}
