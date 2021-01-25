import React, { useEffect, useState } from 'react';
import { searchStudents } from '../../services/student';
import StudentSearchBar from './StudentSearchBar';
import StudentTable from './StudentTable';
import qs from 'query-string';
import Pager from '../Pager'

function getQuery(search) {
  const defaultQuery = {
    page: 1,
    limit: 10,
    key: '',
    sex: -1
  }
  let query = qs.parse(search)
  query = Object.assign({}, defaultQuery, query)
  query.limit = +query.limit;
  query.page = +query.page;
  query.sex = +query.sex;
  return query;
}

function onSearch(searchObj,query,history) {
  // console.log(searchObj,query,history)
  const newQuery = {
    ...query,
    key:searchObj.key,
    sex:searchObj.sex,
    page:1
  }
  changeLocation(newQuery,history)
}
function onPageChange(page,query,history){
  const newQuery = {
    ...query,
    page:page
  }
  changeLocation(newQuery,history)
}
function changeLocation(newQuery,history){
  const newQ = qs.stringify(newQuery)
  // console.log(newQ)
  history.push(`?${newQ}`)
}

export default function StudentList(props) {
  const query = getQuery(props.location.search)
  // console.log(query)
  const [stusList, setStusList] = useState({
    cont: 0,
    datas: []
  })
  useEffect(() => {
    searchStudents(query).then(res => {
      console.log(res)
      setStusList(res)
    }
    )
  }, [query.key,query.limit,query.sex,query.page])
  return (
    <>
      <h1>学生列表页</h1>
      <StudentSearchBar
        defaultValue={{
          sex: query.sex,
          key: query.key
        }}
        onSearch={(searchObj)=>{
          onSearch(searchObj,query,props.history)
        }}
      ></StudentSearchBar>
      <StudentTable stus={stusList.datas} {...props}></StudentTable>
      <div className="pager">
        <Pager 
        current={query.page} 
        total={stusList.cont}
        limit={query.limit}
        panelNumber={5}
        onPageChange={page=>{
          onPageChange(page,query,props.history)
        }}
        ></Pager>
      </div>
    </>
  )
}
