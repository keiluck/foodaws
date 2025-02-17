'use client'
import { Card} from 'antd'

function PageContainer({children, title} : any) {
  return (
    <div>
      <Card title={title}>{children}</Card>
    </div>
  )
}

export default PageContainer
