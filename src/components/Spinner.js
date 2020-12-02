import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

export default function Spinner() {
  const antIcon = <LoadingOutlined style={{ fontSize: 24, color: '#f5f5f5' }} spin />;
  return (
    <Spin indicator={antIcon} />
  );
}