'use client'
import React, { useState, useEffect } from 'react'
import { Card, List, Button } from 'antd';
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

// const data = [
//   {
//     title: 'Ant Design Title 1',
//   },
//   {
//     title: 'Ant Design Title 2',
//   },
//   {
//     title: 'Ant Design Title 3',
//   },
//   {
//     title: 'Ant Design Title 4',
//   },
// ];

function TestList() {
  //const [data, setData] = useState<Item[]> ([])

  // const [activeTabKey1, setActiveTabKey1] = useState<string>('tab1');

  // const onTab1Change = (key: string) => {
  //   setActiveTabKey1(key);
  // };


  // useEffect(() => {
  //   fetch('/api/testList')
  //       .then((res) => res.json())
  //       .then((res) => {
  //         console.log('111')
  //         setData(res.data)})
  // })
  const [loading, setLoading] = useState(false);

  const [list, setList] = useState<MyItems[]>([])
  const [query, setQuery] = useState({
    per: 8,
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
    <div className='test_list'>
      TestList555

      <List
        rowKey='id'
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3,
        }}

        pagination={{
          total,
          onChange(page) {
            setQuery({
              ...query,
              page,
              per: 8,
            })

          }
        }}
        dataSource={list}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <Card title={item.title}>
              <img
                src={item.image || 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'}
                style={{
                  display: 'block',
                  margin: '8vh auto',
                  width: '20vh',
                  height: '20vh',
                  maxHeight: '8vh'
                }}
                alt={item.title}
              />
              <p> {item.desc}</p>
              <Link href={`/myList/myTestList/${item.id}`}>
                {/* <Link
            href={{
              pathname: `/myList/myTestList/${item.id}`,
              query: {
                id: item.id,
                title: item.title,
                image: item.image,
                desc:item.desc,
                content:item.content
              },
            }}
          > */}
                <Button size='small'
                  type='primary'
                  onClick={() => {
                    setCurrentId(item.id)
                  }}> 详情</Button>
              </Link>

            </Card>
          </List.Item>
        )}
      />


    </div>
  )
}

export default TestList
