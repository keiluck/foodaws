'use client'
import Item from 'antd-mobile/es/components/dropdown/item';
import React, {useEffect,useState} from 'react'

type Item = {
    id: number;
    name: string;
    email: string;
}

function List() {
    const [data, setData] = useState<Item[]>([])
    useEffect(() => {
        fetch('/api/users')
          .then((res) => {
            if (!res.ok) {
              throw new Error('Failed to fetch users');
            }
            return res.json();
          })
          .then((data) => {
            console.log(data); // 打印数据
            setData(data);
          })
          .catch((error) => {
            console.error('Error fetching users:', error);
            setData([]); // 设置默认值
          });
      }, []);
  return (
    <div className='list'>
        ul li
      <ul>
        {data.map((item) => <li key={item.id}>{item.name}{item.email}</li>)}


        
      </ul>

      {/* <ul>
        {Array.isArray(Item) && Item.map((item) => (
          <li key={item.id}>{item.name} - {item.email}</li>
        ))}
      </ul> */}

      
    </div>
  )
}

export default List
