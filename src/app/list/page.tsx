"use client"
import React from 'react';
import { Card, Tree, Form, Input, Button, Select, Table, Image, Carousel } from 'antd';
import { useAntdTable } from 'ahooks';
import type { ColumnsType } from 'antd/es/table';

interface CategoryType {
  key: string;
  title: string;
  children?: CategoryType[];
}

interface SpecType {
  key: string;
  name: string;
  options: string[];
}

interface GoodsType {
  id: string;
  name: string;
  stock: number;
  images: string[];
  specs: SpecType[];
}

const CategoryTree = () => {
  const [treeData] = React.useState<CategoryType[]>([
    {
      key: '1',
      title: '川菜',
      children: [
        { key: '1-1', title: '前菜' },
        { key: '1-2', title: '主菜' },
      ],
    },
    {
      key: '2',
      title: '粤菜',
      children: [
        { key: '2-1', title: '点心' },
        { key: '2-2', title: '烧腊' },
      ],
    },
  ]);

  return (
    <Card title="菜品分类" bordered={false}>
      <Tree treeData={treeData} />
    </Card>
  );
};

const SpecManager = () => {
  const [form] = Form.useForm();

  const handleAddSpec = (values: any) => {
    console.log('新增规格:', values);
  };

  return (
    <Card title="规格管理" bordered={false}>
      <Form form={form} layout="inline" onFinish={handleAddSpec}>
        <Form.Item name="name" label="规格名称">
          <Input placeholder="例如：辣度" />
        </Form.Item>
        <Form.Item name="options" label="可选值">
          <Select
            mode="tags"
            style={{ width: 200 }}
            placeholder="输入后回车添加"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            添加规格
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

const GoodsList = () => {
  const { tableProps } = useAntdTable(async () => {
    const response = await fetch('/api/goods');
    const data = await response.json();
    return { list: data, total: data.length };
  });

  const columns: ColumnsType<GoodsType> = [
    {
      title: '菜品图片',
      dataIndex: 'images',
      render: (images) => (
        <Carousel style={{ width: 100 }}>
          {images.map((img: string, index: number) => (
            <Image
              key={index}
              src={img}
              width={100}
              height={100}
              alt="菜品图片"
            />
          ))}
        </Carousel>
      ),
    },
    { title: '菜品名称', dataIndex: 'name' },
    {
      title: '库存数量',
      dataIndex: 'stock',
      render: (text) => <span style={{ color: text < 10 ? 'red' : 'inherit' }}>{text}</span>,
    },
    { title: '规格选项', dataIndex: 'specs' },
  ];

  return (
    <Card title="菜品列表" bordered={false}>
      <Table columns={columns} rowKey="id" {...tableProps} />
    </Card>
  );
};

export default function ListPage() {
  return (
    <div className="flex gap-4 p-4">
      <div className="w-1/4">
        <CategoryTree />
      </div>
      <div className="flex-1">
        <SpecManager />
        <div className="mt-4">
          <GoodsList />
        </div>
      </div>
    </div>
  );
}
