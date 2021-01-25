import React, { useState, useEffect, useRef } from 'react';
import { Form, Input, Button, Select, Typography, Col, Radio, message, Spin } from 'antd';
import { addStudent, updateStudent, getStudentBySNo } from '../../services/student';
import { history } from 'umi'

const { Title } = Typography;
const { Option } = Select;

export default function StudentAdd(props) {
  console.log(props)
  useEffect(() => {
    (async () => {
      // console.log(props)
      if (props.sNo) {
        setTitle('修改学生')
        setLoading(true)
        const res = await getStudentBySNo(props.sNo)
        console.log(res)
        // 设置表单回填
        fromRef.current.setFieldsValue({
          sNo:res.sNo,
          name:res.name,
          sex:res.sex,
          birth:res.birth,
          email:res.email,
          address:res.address,
          phone:res.phone,
        })
        setLoading(false)
      }
    })()
  }, [])
  const fromRef = useRef()
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('添加学生')
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  const birthList = [];
  for (let i = 1880; i < 2022; i++) {
    birthList.push(<Option key={i} value={i}>{i} 年</Option>);
  }

  async function addStu(stuObj) {
    setLoading(true)
    const stu = await addStudent(stuObj)
    setLoading(false)
    console.log(stu)
    if (stu.status == 'success') {
      await message.success(`${stu.msg}`, 1);
      history.push('/student')
    } else if (stu.status == 'fail') {
      message.error(`${stu.msg}`, 2)
    }
  }

  async function updateStu(stuObj) {
    setLoading(true)
    const stu = await updateStudent(stuObj)
    setLoading(false)
    console.log(stu)
    if (stu.status == 'success') {
      await message.success(`${stu.msg}`, 1);
      history.push('/student')
    } else if (stu.status == 'fail') {
      message.error(`${stu.msg}`, 2)
    }
  }

  // 提交
  function onSearch(e) {
    console.log(e)
    console.log(props, 123)
    if (props.sNo) {
      // 修改学生
      updateStu(e)
    } else {
      // 添加学生
      addStu(e)
    }
  }

  return (
    <>
      <Spin tip="加载中..." spinning={loading}>
        <Col offset={1}>
          <Title level={2} style={{
            marginTop: '30px'
          }}>{title}</Title>
        </Col>
        <Form
          ref={fromRef}
          {...layout}
          name="addStudentFrom"
          style={{
            marginTop: '50px'
          }}
          onFinish={onSearch}
        >
          <Form.Item
            wrapperCol={{ span: 4 }}
            label="学号"
            name="sNo"
            rules={[{ required: true, message: '请输入学号!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            wrapperCol={{ span: 4 }}
            label="姓名"
            name="name"
            rules={[{ required: true, message: '请输入姓名!' }, { max: 4, message: '名字不能超过4个字符' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            initialValue={0}
            label="性别"
            name="sex"
            rules={[{ required: true, message: '请选择性别!' }]}
          >
            <Radio.Group>
              <Radio.Button value={0}>男</Radio.Button>
              <Radio.Button value={1}>女</Radio.Button>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            initialValue={2020}
            label="出生年"
            name="birth"
            rules={[{ required: true, message: '请选择性别!' }]}
          >
            <Select style={{ width: 120 }}>
              {birthList}
            </Select>
          </Form.Item>

          <Form.Item
            label="邮箱"
            name="email"
            rules={[{ required: true, message: '请输入邮箱!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="电话号码"
            name="phone"
            rules={[{ required: true, message: '请输入电话号码!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="住址"
            name="address"
            rules={[{ required: true, message: '请输入家庭住址!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
          </Button>
          </Form.Item>
        </Form>
      </Spin>
    </>
  )
}
