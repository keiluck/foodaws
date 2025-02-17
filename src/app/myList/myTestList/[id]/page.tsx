import { Metadata } from 'next'
import React from 'react'
//import Detail from '../_compnents/Detail';

type Props = {
  params: {
    id: string;
  };
  searchParmas: any
}



export async function generateMetadata({
  params, searchParmas
}: Props): Promise<Metadata> {
  return {
    title: `title ${params.id}`,
  }
}


async function TestListDetailPage({ params, searchParmas }: Props) {
  const id = params.id
  console.log('取到数据', params.id)

  const response = await fetch(`http://localhost:3000/api/admin/articles/${id}`, {
    cache: 'no-store',
    headers: {
      'Accept': 'application/json',
    },
  })
  // .then((res)=>{
  //   console.log('res')
  //   res.json()})
  // .catch((err)=>console.log(err));
  console.log('详情数据', response.status)

  const Articles = await response.json()
  console.log('1111', Articles.data)
  const details = Articles.data


  //console.log('123213',Articles)
  return (
    <div>
      <h1>Article Details</h1>
      <div>ID: {params.id}</div>
      searchParmas: {searchParmas}
      <p>{details.title} </p>
      <p>{details.desc} </p>
      <img src={details.image || 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'} />
      <p>{(details.content).replace(/<[^>]+>/g, "")}</p>
    </div>
  );

}

export default TestListDetailPage


// app/myTestList/[id]/page.tsx

