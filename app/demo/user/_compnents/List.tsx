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
    const [newItem, setNewItem] = useState({
      name: '',
      email: ''
  })
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

      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Create new item with generated ID
        const newItemWithId = {
            ...newItem,
            id: data.length + 1
        };

        // Add to list
        setData([...data, newItemWithId]);

        // Clear form
        setNewItem({
            name: '',
            email: ''
        });
    };
  return (
    <div className='list'>
               <form onSubmit={handleSubmit} className="mb-4">
                <input
                    type="text"
                    placeholder="Name"
                    value={newItem.name}
                    onChange={(e) => setNewItem({...newItem, name: e.target.value})}
                    className="border p-2 mr-2"
                />
                <input
                    type="email" 
                    placeholder="Email"
                    value={newItem.email}
                    onChange={(e) => setNewItem({...newItem, email: e.target.value})}
                    className="border p-2 mr-2"
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    Add User
                </button>
            </form>
        ul lilijjjj
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
