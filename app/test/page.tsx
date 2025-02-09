import React from 'react'
import { Image } from 'antd-mobile'

function page() {
  return (
    <div>
      test page
    <div>
      <Image
            src="/images/top_02.gif"
            // width={300}
            fit="cover"
            style={{ width: '100vw', height: '100vh' }}
          />
    </div>
    </div>
  )
}

export default page
