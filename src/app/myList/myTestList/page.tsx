import React from 'react'
import { Metadata } from 'next';
import TestList from './_compnents/TestList';
import SiderList from './_compnents/SiderList';
import StarList from './_compnents/StarList';


export const metadata: Metadata = {
  title: 'test-list-page',
  description: 'next-list-page',
  keywords: 'next.js,react'
}

function MyTestList() {
  return (
    <div>
      MyTestList333
      <SiderList />
      <StarList />
      {/* <TestList /> */}
    </div>
  )
}

export default MyTestList
