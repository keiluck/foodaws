'use client'
import React, {useEffect, useState} from 'react'
import { Card, Form, Input, Button,Table, Modal,Space, Popconfirm } from 'antd';
import {SearchOutlined, PlusOutlined,EditOutlined,DeleteOutlined} from '@ant-design/icons'
import MyUpload from '../../_components/MyUpload';
import MyEditor from '../../_components/MyEditor';

type Article = {
    image: any;
    id: string;
    title: string;
    desc: string;
    content:string;
}
function ArticlePage() {
    const [open, setOpen] = useState(false);//控制model显示隐藏
    const [list, setList] = useState<Article[]>([])
    const [myForm] = Form.useForm();//获取Form组建
    const [imageUrl, setImageUrl] = useState<string>('');
   
    const [query, setQuery] = useState({
        per: 10,
        page: 1,
        title: ''
    });
    //使用当前的ID变量，表示新增还是修改
    const [currentId, setCurrentId] = useState('');
    const [total, setTotal] = useState(0);
    const [html, setHtml] = useState('')

    //监听查询的条件
//   useEffect(()=> {
//        fetch(`/api/admin/articles?page=${query.page}&per=${query.per}&title=${query.title}`)
//         .then((res) => 
//             res.json())
//         .then((res) => {
//             setList(res.data.list);
//             setTotal(res.data.total)
//             console.log('setList',res)
//         }).catch((error) => {
//             console.error('请求错误：', error);
//           })
//     }, [query])
useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/admin/articles?page=${query.page}&per=${query.per}&title=${query.title}`);
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const res = await response.json();
        setList(res.data.list);
        setTotal(res.data.total);
        console.log('setList', res);
      } catch (error) {
        console.error('请求错误：', error);
      }
    };
  
    fetchData();
  }, [query]);
  

  //关了窗口后清空
  useEffect(()=> {
    if(!open){
        console.log('not open')
        setCurrentId('');
        setImageUrl('');
        setHtml('')
        //打开弹窗之前，清除以前数据
        myForm.resetFields()
    }
  }, [open])

  return (
        <Card title="文章管理" extra= {
        <>
            <Button 
                icon= {<PlusOutlined />} 
                type='primary'
                onClick={()=> {
                 setOpen(true) 
                }}
            />
        </>
    }
        >
          <Form layout='inline'
                onFinish={(v)=> {
                    setQuery({
                        page: 1,
                        per: 10,
                        title: v.title
                    })

                }} 
          >
            <Form.Item label='标题' name="title">
              <Input placeholder='请输入关键字' />
            </Form.Item>
            <Form.Item>
              <Button icon= {<SearchOutlined />} htmlType="submit" type= 'primary'></Button>
            </Form.Item>
          </Form>
          <Table style={{marginTop: '8px'}}
                dataSource={list} 
                rowKey = 'id'
                pagination = {{
                    total,
                    onChange(page){
                        setQuery({
                            ...query,
                            page,
                            per: 10,
                        })

                    }
                }}
                columns={[
                    {
                        title: '序号',
                        width: 80,
                        render(v, r, i) {
                            console.log("vv",v)
                            console.log("ii",i)
                            console.log("rr",r)
                          return i + 1
                        }
                      },
                      {
                        title: '标题',
                        dataIndex: 'title',
                      },
                      {
                        title: '封面',
                        //dataIndex: 'title',
                        render(v, r){
                            return (
                                <img 
                                src = {r.image || 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'}
                                style = {{
                                    display: 'block',
                                    margin: '8px auto',
                                    width: '80px',
                                    maxHeight: '80px'}}
                                alt = {r.title}
                                />
                            )

                        }
                      },
                      {
                        title: '简介',
                        dataIndex: 'desc',
                      },
                      {
                        title: '内容',
                        dataIndex: 'content',
                      },
                      {
                          title: '操作',
                          render(v, r){
                              return  (
                              <Space>
                                <Button 
                                    size='small' 
                                    icon = {<EditOutlined />} 
                                    type='primary'
                                    onClick={()=> {
                                        setOpen(true);
                                        setCurrentId(r.id);
                                        setImageUrl(r.image);
                                        setHtml(r.content)
                                        myForm.setFieldsValue(r);
                                    }}
                                    ></Button>
                                    <Popconfirm 
                                        title="是否确认删除"
                                        onConfirm = {async ()=>{
                                            await fetch('/api/admin/articles/' + r.id, {
                                                method: 'DELETE',
                                            }).then((res) => res.json());
                                            setQuery({ ...query, per: 10, page: 1 });
                                            //重制查询条件，重新获取数据

                                        }}
                                    >
                                        <Button 
                                            size='small' 
                                            icon = {<DeleteOutlined />} 
                                            type='primary' danger></Button>
                                    </Popconfirm>
                              </Space>
                             )
                          }
                        },
                ]} 
            />
           <Modal 
                forceRender//useForm传值必须
                title='编辑' 
                width={ '75vw'}
                open={open} 
                destroyOnClose = {true}  //关闭窗口之后销毁
                maskClosable= {false}
                onOk={()=> {
                    myForm.submit();
                }}
                onCancel={() => {
                    console.log('取消')
                    setOpen(false)
                    

                }}
                >
              <Form 
                preserve={false} //和modal结合使用时候需要加上它，否则不会销毁
                layout='vertical' 
                form={ myForm }
                onFinish={async (v)=>{
                    console.log('form-v',v)
                    if(currentId){
                        console.log('修改')
                        await fetch('/api/admin/articles/' + currentId, {
                            body: JSON.stringify({...v, image: imageUrl, content: html}),
                            method: 'PUT',  
                        }).then((res) => {
                            console.log('获取到修改')
                            res.json()});
                    } else {
                        console.log('新增')
                        // try{

                        // }catch(e){}
                        
                        //setQuery({...query});
                        await fetch('/api/admin/articles', {
                            method: 'POST',
                            body: JSON.stringify({...v, image: imageUrl, content: html}),
                        }).then((res) =>  
                            res.json());
                            console.log('add OK')
                       // setQuery({});
                    }
 
                    //调接口
                    setOpen(false);
                    //改变query会重新去取数据
                    setQuery({ ...query });
                }}
              >
                <Form.Item
                    label='标题'
                    name='title'
                    rules={[
                        {
                            required: true,
                            message:'标题不能为空'
                        }
                    ]}
                >
                    <Input placeholder='请输入标题'/>
                </Form.Item>
                <Form.Item label='简介' name='desc'>
                    <Input.TextArea placeholder='请输入简介'/>
                </Form.Item>
                <Form.Item label='封面' name='pic'>
                    <MyUpload  imageUrl = {imageUrl} 
                    setImageUrl = {setImageUrl}/>
                </Form.Item>
                <Form.Item label='内容' name='content'>
                    <MyEditor html={html} setHtml={setHtml} />
                </Form.Item>
              </Form>

           </Modal>
        </Card>
  )
}

export default ArticlePage
