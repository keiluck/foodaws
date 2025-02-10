import React from 'react'
import List from './_compnents/List';
import Test from './_compnents/Test';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title:'list-page',
    description: 'next-list-page',
    keywords: 'next.js,react'
}

function page() {
  return (
    <div>
      userddd
      <List />
      <Test />
    </div>
  )
}

export default page
