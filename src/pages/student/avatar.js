import React,{useState} from 'react';
import StuAvatar from '../../components/Student/StudentAvatar'
import { Button } from 'antd';

export default function avatar() {
  const [imageUrl, setImageUrl] = useState('')
  return (
    <div>
      <h1>更改学生头像</h1>
      <StuAvatar imageUrl={imageUrl} onChange={(url)=>{
        setImageUrl(url)
      }} />
      <Button type="primary" onClick={()=>{
        console.log(imageUrl)
      }} >打印地址</Button>
    </div>
  )
}
