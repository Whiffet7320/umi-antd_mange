import React from 'react';
import { history } from 'umi';
import { Table, Button, Tag } from 'antd';

const columns = [
  {
    title: '学号',
    dataIndex: 'sNo',
    key: 'sNo',
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    render(name) {
      return <Tag color="success">{name}</Tag>
    }
  },
  {
    title: '性别',
    dataIndex: 'sex',
    key: 'sex',
    render(sex) {
      return <Tag color="success">{sex===0?'男':'女'}</Tag>
    }
  },
  {
    title: '出生年',
    dataIndex: 'birth',
    key: 'birth',
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: '电话号码',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '操作',
    dataIndex: 'sNo',
    key: 'address',
    render(sNo) {
      return <Button type="primary" onClick={() => {
        console.log(history.push(`/student/${sNo}`))
      }}>详情</Button>
    }
  },
];


export default function StudentTable(props) {
  console.log(props)
  return (
    <Table
      style={{ margin: '20px' }}
      dataSource={props.stus}
      rowKey='id'
      columns={columns}
      pagination={{
        current: props.current,
        total: props.total,
        pageSize: props.pageSize,
        showQuickJumper: true,
        showSizeChanger: true,
        onChange: props.onChange,
        onShowSizeChange: props.onShowSizeChange
      }}
      loading={props.loading}
    />
  )
}
