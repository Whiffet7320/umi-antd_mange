import React from 'react'

function index() {
  return (
    <div>
      首页
    </div>
  )
}
// 配置权限路由
index.wrappers  = ['@/routes/PrivateRouter.js']
export default index