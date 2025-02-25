'use client';
// import React from "react";
// import { Timeline, Card, Progress, Avatar } from "antd";

// export default function Resume() {
//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       {/* 个人信息 */}
//       <div className="flex items-center space-x-4">
//         <Avatar size={100} src="/avatar.jpg" />
//         <div>
//           <h1 className="text-3xl font-bold">王小明</h1>
//           <p className="text-gray-600">全栈开发工程师</p>
//         </div>
//       </div>

//       {/* 技能展示 */}
//       <section className="mt-6">
//         <h2 className="text-2xl font-semibold">技能</h2>
//         <div className="space-y-2 mt-2">
//           <div>
//             <span>React</span>
//             <Progress percent={90} />
//           </div>
//           <div>
//             <span>Next.js</span>
//             <Progress percent={85} />
//           </div>
//           <div>
//             <span>Tailwind CSS</span>
//             <Progress percent={80} />
//           </div>
//         </div>
//       </section>

//       {/* 工作经历 */}
//       <section className="mt-6">
//         <h2 className="text-2xl font-semibold">工作经历</h2>
//         <Timeline className="mt-2">
//           <Timeline.Item>2023 - 现在: 软件开发公司 - 全栈开发</Timeline.Item>
//           <Timeline.Item>2020 - 2023: 某科技公司 - 前端开发</Timeline.Item>
//           <Timeline.Item>2018 - 2020: 某初创公司 - Web 开发</Timeline.Item>
//         </Timeline>
//       </section>

//       {/* 项目展示 */}
//       <section className="mt-6">
//         <h2 className="text-2xl font-semibold">项目展示</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
//           <Card title="项目 A" extra={<a href="#">查看</a>}>
//             使用 React + Next.js 开发的企业官网。
//           </Card>
//           <Card title="项目 B" extra={<a href="#">查看</a>}>
//             基于 Ant Design 和 Tailwind CSS 构建的管理系统。
//           </Card>
//         </div>
//       </section>

//       {/* 教育背景 */}
//       <section className="mt-6">
//         <h2 className="text-2xl font-semibold">教育背景</h2>
//         <p className="mt-2">浙江大学城市学院 - 计算机科学 (2014 - 2018)</p>
//       </section>

//       {/* 联系方式 */}
//       <section className="mt-6">
//         <h2 className="text-2xl font-semibold">联系方式</h2>
//         <p>Email: example@example.com</p>
//         <p>GitHub: github.com/username</p>
//         <p>LinkedIn: linkedin.com/in/username</p>
//       </section>
//     </div>
//   );
// }
import { useState, useEffect } from "react";
import { Avatar, Card, Timeline, Tag } from "antd";
import { MailOutlined, GithubOutlined, LinkedinOutlined } from "@ant-design/icons";

const images = ["/images/swiper/img_01.jpg", "/images/swiper/img_02.jpg", "/images/swiper/img_03.jpg"];

export default function Resume() {
  const [bgImage, setBgImage] = useState(images[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgImage(prev => images[(images.indexOf(prev) + 1) % images.length]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center", transition: "background-image 1s ease-in-out" }}>
      <div className="max-w-4xl mx-auto p-6 bg-white bg-opacity-90 shadow-lg rounded-xl border border-gray-200">
        {/* 个人信息 */}
        <div className="text-center">
          <Avatar size={100} src="/profile.jpg" className="shadow-md" />
          <h1 className="text-3xl font-bold mt-4 text-gray-800">张三</h1>
          <p className="text-gray-600 text-lg">前端开发工程师</p>
        </div>

        {/* 技能展示 */}
        <Card title="技能" className="mt-6 shadow-md border-0">
          <div className="flex flex-wrap gap-2">
            {["JavaScript", "React", "Next.js", "Ant Design", "Tailwind CSS"].map(skill => (
              <Tag color="blue" key={skill} className="text-sm px-3 py-1 rounded-md">{skill}</Tag>
            ))}
          </div>
        </Card>

        {/* 工作经历 */}
        <Card title="工作经历" className="mt-6 shadow-md border-0">
          <Timeline className="text-gray-700">
            <Timeline.Item color="green">2023 - 现在: 某科技公司 - 前端开发</Timeline.Item>
            <Timeline.Item color="blue">2020 - 2023: 某互联网公司 - 前端工程师</Timeline.Item>
          </Timeline>
        </Card>

        {/* 项目展示 */}
        <Card title="项目经验" className="mt-6 shadow-md border-0">
          <Card.Grid className="w-full text-center hover:bg-gray-100 transition-all p-4">项目 A - <a href="#" className="text-blue-600">查看</a></Card.Grid>
          <Card.Grid className="w-full text-center hover:bg-gray-100 transition-all p-4">项目 B - <a href="#" className="text-blue-600">查看</a></Card.Grid>
        </Card>

        {/* 教育背景 */}
        <Card title="教育背景" className="mt-6 shadow-md border-0">
          <p className="text-gray-700">2016 - 2020: XX 大学 - 计算机科学与技术</p>
        </Card>

        {/* 联系方式 */}
        <Card title="联系方式" className="mt-6 shadow-md border-0">
          <div className="flex gap-6 text-2xl text-gray-700 justify-center">
            <a href="mailto:example@gmail.com" className="hover:text-blue-500"><MailOutlined /></a>
            <a href="https://github.com/example" className="hover:text-blue-500"><GithubOutlined /></a>
            <a href="https://linkedin.com/in/example" className="hover:text-blue-500"><LinkedinOutlined /></a>
          </div>
        </Card>
      </div>
    </div>
  );
}
