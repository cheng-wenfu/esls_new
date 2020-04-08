import React from 'react';
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';


interface FileUploadProps {
  action: any; //上传地址
}

const FileUpload: React.FC<FileUploadProps> = ({ action }) => {
  const { Dragger } = Upload;

  const props = {
    name: 'file',
    multiple: true,
    action: { action },
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} 文件上传成功`);
      } else if (status === 'error') {
        message.error(`${info.file.name} 文件上传失败`);
      }
    },
  };
  return (
    <Dragger {...props}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">点击上传或拖拽文件上传</p>
    </Dragger >
  )
}

export default FileUpload;



