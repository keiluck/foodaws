import React from 'react'
import Link from 'next/link'

function page() {
  return (
    <div>
      hello demo page<br/>
      <Link href="/demo/user">demo</Link>
    </div>
  )
}

export default page
