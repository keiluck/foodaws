'use client'
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, List, Space } from 'antd';
import React, { useState, useEffect } from 'react'
import { Card, Button } from 'antd';
import Link from 'next/link';

type Item = {
    id: string,
    name: String,
    description: String,
  }
  
  type MyItems = {
    image: any;
    id: string;
    title: string;
    desc: string;
    content: string;
  }

function StarList() {
    // const data = Array.from({ length: 23 }).map((_, i) => ({
    //     href: 'https://ant.design',
    //     title: `ant design part ${i}`,
    //     avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`,
    //     description:
    //       'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    //     content:
    //       'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    //   }));
      
      const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
        <Space>
          {React.createElement(icon)}
          {text}
        </Space>
      );
    const [loading, setLoading] = useState(false);

    const [list, setList] = useState<MyItems[]>([])
    const [query, setQuery] = useState({
      per: 5,
      page: 1,
      title: ''
    });
    const [currentId, setCurrentId] = useState('');
    const [total, setTotal] = useState(0);
  
    useEffect(() => {
      if (loading) {
        return;
      }
      setLoading(true);
      fetch(`/api/admin/articles?page=${query.page}&per=${query.per}&title=${query.title}`)
        .then((res) => res.json())
        .then((res) => {
          setList(res.data.list);
          setTotal(res.data.total);
          setLoading(false);
        }
        ).catch(() => {
          setLoading(false);
        })
    }, [query])
      
  return (
    <div>
<List
    itemLayout="vertical"
    size="large"
    pagination={{
        total,
        onChange(page) {
            setQuery({
              ...query,
              page,
              per: 5,
            })
          }
    }}
    dataSource={list}
    footer={
      <div>
        <b>ant design</b> footer part
      </div>
    }
    renderItem={(item) => (
      <List.Item
        key={item.title}
        actions={[
          <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
          <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
          <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
        ]}
        extra={
          <img
            width={80}
            alt="logo"
            src={item.image || 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'}
          />
        }
      >
        <List.Item.Meta
          avatar={<Avatar src={item.image || 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'} />}
          title={<Link href={`/myList/myTestList/${item.id}`}>{item.title}</Link>}
          description={item.desc}
        />
      </List.Item>
    )}
  />
      
    </div>
    
  )
}

export default StarList
