import React from 'react';
import StudentTable from '../../components/containers/StudentTable';
import SearchBar from '../../components/containers/SearchBar';
import { Typography, Col } from 'antd';

const { Title } = Typography;

function index() {
  return (
    <div>
      <Col offset={1}>
        <Title level={2} style={{
          marginTop: '30px'
        }}>学生列表</Title>
      </Col>
      <SearchBar />
      <StudentTable />
    </div>
  )
}
index.wrappers = ['@/routes/PrivateRouter.js']
export default index
