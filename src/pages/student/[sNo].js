import React from 'react'
import StudentAdd from '../../components/containers/StudentAdd'


export default function $id(props) {
  return (
    <div>
      <h1>学生详情</h1>
      学生学号:{props.match.params.sNo}
      <StudentAdd sNo={props.match.params.sNo} />
    </div>
  )
}

