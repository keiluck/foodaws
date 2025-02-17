'use client'
import React from 'react';
import {  ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import 'antd/dist/reset.css';



function AntdContainer({children}: any) {


  return (
    <div>
      <ConfigProvider locale={zhCN}>
        {children}
      </ConfigProvider>
    </div>
  )
}

export default AntdContainer
