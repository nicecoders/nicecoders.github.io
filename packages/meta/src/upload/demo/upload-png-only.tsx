import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from '@nicecode/meta';
import { Button, message, Upload } from '@nicecode/meta';

const props: UploadProps = {
  beforeUpload: (file) => {
    const isPNG = file.type === 'image/png';
    if (!isPNG) {
      message.error(`${file.name} is not a png file`);
    }
    return isPNG || Upload.LIST_IGNORE;
  },
  onChange: (info) => {
    console.log(info.fileList);
  },
};

const App: React.FC = () => (
  <Upload {...props}>
    <Button icon={<UploadOutlined />}>Upload png only</Button>
  </Upload>
);

export default App;
