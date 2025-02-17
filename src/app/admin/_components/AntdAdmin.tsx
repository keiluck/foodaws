'use client'
import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import 'antd/dist/reset.css';
import { useRouter } from 'next/navigation';
import { Yellowtail } from 'next/font/google';
import { Color } from 'antd/es/color-picker';

const { Header, Sider, Content } = Layout;

function AntdAdmin({children}: any) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const nav = useRouter();

  return (
    <div>
      {/* AntdContainer{children} */}
      <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <div style={{ color:'white' ,textAlign:'center',padding:'15px',background:'gray' }}>イベント管理</div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          onClick= {({key}) => {
            nav.push(key);
          }}
          items={[
            {
              key: '/admin/dashboard',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '/admin/users',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '/admin/articles',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '12px',
            padding: '8px',
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            overflow: 'auto'
          }}
        >
          {children}
        </Content>
      </Layout>
     </Layout>




    </div>
  )
}

export default AntdAdmin
