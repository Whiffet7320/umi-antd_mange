import React,{useState} from 'react';
import { Upload } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

export default function StudentAvatar(props) {
  function handleChange(e){
    setLoading(true)
    if(e.file.response){
      console.log(e.file.response)//获取服务器的响应结果
      props.onChange && props.onChange(e.file.response.path);
      setLoading(false)
    }
  }
  const [loading, setLoading] = useState(false);
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>上传图片</div>
    </div>
  );
  return (
    <>
       <Upload
        name="imagefile"
        accept=".jpg,.png,.gif,.bmp,.jiff"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="http://101.132.72.36:5100/api/upload"
        // beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {props.imageUrl ? <img src={props.imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload>
    </>
  )
}
