'use client'
import React from 'react'
import { Card, Form, Input, Button,Table } from 'antd';
import {SearchOutlined, PlusOutlined} from '@ant-design/icons'

function UsersPage() {
  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ];
  
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  
 
  return (
    <div>
        <Card title="用户信息" extra= {<><Button icon= {<PlusOutlined />} type='primary'/></>}>
          <Form layout='inline'>
            <Form.Item label='name'>
              <Input placeholder='name' />
            </Form.Item>
            <Form.Item>
              <Button icon= {<SearchOutlined />} type= 'primary'></Button>
            </Form.Item>
          </Form>
          <Table dataSource={dataSource} columns={columns} />;

        </Card>
      
    </div>
  )
}

export default UsersPage
