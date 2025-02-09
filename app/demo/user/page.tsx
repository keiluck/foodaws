import React from 'react'
import List from './_compnents/List';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title:'list-page',
    description: 'next-list-page',
    keywords: 'next.js,react'
}

function page() {
  return (
    <div>
      user
      <List />
    </div>
  )
}

export default page
