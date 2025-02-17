import React from 'react'
import AntdAdmin from '../_components/AntdAdmin'

function AdminLayout({children}:any) {
  return (
    <div className='admin-ddd'>
       <AntdAdmin>{children}</AntdAdmin>
    </div>  
  )
}

export default AdminLayout