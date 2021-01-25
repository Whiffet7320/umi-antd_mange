import React from 'react'

export default function index(props) {
  console.log(props, '路由均要先经过我的同意才可展示')
  const userName = localStorage.getItem('userName')
  if (userName) {
    return (
      <div>
        {props.children}
      </div>
    )
  }else{
    props.history.push('/login')
    return null
  }
}

