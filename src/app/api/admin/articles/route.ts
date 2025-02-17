import { prisma } from '@/src/db';
import { NextResponse, NextRequest } from 'next/server';

export const GET = async (req: NextRequest) => {
    let per = (req.nextUrl.searchParams.get('per') as any) * 1 || 10;
    let page = (req.nextUrl.searchParams.get('page') as any) * 1 || 1;
    let title = (req.nextUrl.searchParams.get('title') as any) || "";
    const data = await prisma.articles.findMany({
        where: {
            title: {
                contains: title
            }
        },
        orderBy: {
            createdAt: 'desc',
        },
        take: per, //取多少条数据
        skip: (page -1 ) * per, //跳过10条
    });
    const total = await prisma.articles.count({
        where: {
            title: {
                contains: title
            }
        }
    })
    return NextResponse.json({
        success: true,
        errorMessage: '',
        data: {
            list: data,
            pages: Math.ceil(total / per),
            total,
        }
    })
}

export const POST = async (req: NextRequest) => {
    //获取请求体中的json数据
    const data = await req.json();
    await prisma.articles.create({
        data,
    });
    return NextResponse.json({
        success: true,
        errorMessage: '创建成功',
        data: {},
    })
}

export const DELETE = async (req: NextRequest) => {
    const { ids } = await req.json();
    await prisma.articles.deleteMany({
        where: {
            id: { in: ids }
        }
    });
    return NextResponse.json({
        success: true,
        errorMessage: '删除成功',
        data: {}
    });
}
