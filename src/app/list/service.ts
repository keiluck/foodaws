import { prisma } from '../../db'

// 获取分类树
export const getCategories = async () => {
  return await prisma.category.findMany({
    include: {
      children: true
    }
  })
}

// 创建商品
export const createGoods = async (data: {
  name: string
  categoryId?: string
  stock: number
  images: string[]
  specs: Array<{
    type: string
    name: string
    options: string
  }>
}) => {
  return await prisma.goods.create({
    data: {
      ...data,
      specs: {
        create: data.specs
      }
    }
  })
}

// 类型定义
export type GoodsCategory = {
  id: string
  name: string
  children?: GoodsCategory[]
}
