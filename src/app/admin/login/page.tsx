'use client'
import {Button, Card, Form, Input} from 'antd'
import React from 'react'
import { useRouter } from 'next/navigation'

function LoginPage() {
  const nav = useRouter();
  return (
    <div className='login-form'>
      <Card title="Next全栈管理后台">
        <Form 
          labelCol={{span: 3}} 
          onFinish={async (v)=>{
            const res = await fetch('/api/admin/login', {
              method: 'POST',
              body: JSON.stringify(v),
            }).then((res)=>res.json());
          console.log(res);
          nav.push('/admin/dashboard')
        }}>
          <Form.Item label="用户名">
              <Input placeholder='请输入用户名'/>
          </Form.Item>
          <Form.Item name="password" label="密码">
              <Input placeholder='请输入密码'/>
          </Form.Item>
          <Form.Item>
              <Button htmlType='submit' type='primary'>登陆</Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default LoginPage