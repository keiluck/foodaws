'use client'
import React, { useState }  from 'react'
import { Button,Mask, } from 'antd-mobile'
import type { FC } from 'react'
import { Swiper } from 'antd-mobile'
import { Image } from 'antd-mobile'
import { Footer } from 'antd-mobile'

const pic_img = ["url('/images/swiper/img_01.jpg')",
  "url('/images/swiper/img_02.jpg')",
  "url('/images/swiper/img_03.jpg')",
  "url('/images/swiper/img_04.jpg')",
  "url('/images/swiper/img_05.jpg')"
]

const items = pic_img.map((img, index) => (
  <Swiper.Item key={index}>
    <div style={{ background: img, height: '300px' }} >
      <div>
        <div className="width:100%;height:800px;color: #ffffff;">
          {index + 1}
          四川料理
        </div>

      </div>

    </div>
  </Swiper.Item>
))


// mask
// 自定义内容
const WithContent: FC = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Mask visible={visible} onMaskClick={() => setVisible(false)}>
        <div>内容</div>
      </Mask>
      <Button onClick={() => setVisible(true)}>显示带内容的背景蒙层</Button>
    </>
  )
}

function Testpage() {

  return (

    <div className=" bg-[url('/images/pt_washi.jpg')] bg-repeat bg-scroll-bg bg-cover bg-center bg-scroll min-h-screen">
      {/* <div className="w-full h-screen bg-[url('/images/pt_washi.jpg')] bg-repeat bg-cover bg-scroll"> */}
      <div className="relative text-white text-4xl text-center overflow-y-scroll">
        <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
          <Image
            src="/images/top_02.gif"
            // width={300}
            fit="cover"
            style={{ width: '100vw', height: '100vh' }}
          />
        </div>
        <div style={{ width: '100vw', height: '100vh', position: 'relative', }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100vw',
              height: '25vh',
              color: '#000',
              fontFamily: 'Klee One',
              fontWeight: '400',
              fontSize: '36px',
            }}
          >
            <p style={{
              content: "''",
              // position: 'absolute',
              inset: 0,
              backgroundImage: "url('/images/ttl-01.svg')",
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              opacity: 0.5,
              zIndex: 2,
              width: '100vw',
              lineHeight: '18vh'

            }}>商品紹介</p>
          </div>


          {/* list */}
          <div style={{ width: '100vw', color: '#000', fontSize: '24px' }}>
            <ul style={{ marginLeft: '3.3vw', display: 'flex', justifyContent: 'flex-start', flexDirection: 'row', flexWrap: 'wrap' }}>
              <li style={{ width: '50%' }}>
                <Image
                  src='/images/swiper/img_05.jpg'
                  width={"45vw"}
                  height={"18vh"}
                  fit='cover'
                  style={{ border: '2px solid #ccc' }}
                />
                <p>11</p>
              </li>
              <li style={{ width: '50%' }}>
                <Image
                  src='/images/swiper/img_02.jpg'
                  width={"45vw"}
                  height={"18vh"}
                  fit='cover'
                  style={{ border: '2px solid #ccc' }}
                />
                <p>22</p>
              </li>
              <li style={{ width: '50%', textAlign: 'center' }}>
                <Image
                  src='/images/swiper/img_01.jpg'
                  width={"45vw"}
                  height={"18vh"}
                  fit='cover'
                  style={{ border: '2px solid #ccc' }}
                />
                <p>33</p>
              </li>
              <li style={{ width: '50%', textAlign: 'center' }}>
                <Image
                  src='/images/swiper/img_05.jpg'
                  width={"45vw"}
                  height={"18vh"}
                  fit='cover'
                  style={{ border: '2px solid #ccc' }}
                />
                <p>44</p>
              </li>
            </ul>
          </div>


          {/* swiper */}

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100vw',
              height: '25vh',
              color: '#000',
              fontFamily: 'Klee One',
              fontWeight: '400',
              fontSize: '36px',
            }}
          >
            <p style={{
              content: "''",
              // position: 'absolute',
              inset: 0,
              backgroundImage: "url('/images/ttl-01.svg')",
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              opacity: 0.5,
              zIndex: 2,
              width: '100vw',
              lineHeight: '18vh'

            }}>更多其他</p>
          </div>

          {/* other */}
          <div style={{ width: '90vw',marginBottom:'5vh', border: '8px solid #d0cabc', borderRadius: '8px', marginLeft: '5vw' }}>
            <Swiper
              // trackOffset={10}
              // slideSize={80}
              style={{
                '--border-radius': '2px',
                '--height': '150px',
              }}
              defaultIndex={0}
              autoplay
              loop stuckAtBoundary={false}
            >
              {items}
            </Swiper>
          </div>

         {/* mask */}
         <div>
         <WithContent />
         </div>

          {/* footer*/}

          <div style={{fontSize:'18px'}}>
          <Footer
          label='没有更多了'
          content='@ 2004-2020 Alipay.com All rights reserved'
          // links={links}
          // chips={chips}
        ></Footer>
          </div>

        </div>
        <div>
        </div>

      </div>
    </div>

  )
}

export default Testpage
