
import { prisma } from '@/src/db';
import { NextResponse, NextRequest } from 'next/server';

// export const GET = () => {
//     return NextResponse.json({
//         sucess: true,
//         errorMessage: '',
//         data: [{id:1,name:'lili'},{id:2,name:'lala'}]
//     })
// }

export const GET = async () => {
    const data = await prisma.goods.findMany({
        orderBy: {
            createdAt: 'desc'
        },
    })
    return NextResponse.json({
        sucess: true,
        errorMessage: '获取数据成功',
        data: data
    });
}


export const POST = async (req: NextRequest) => {
    const data = await req.json();
    await prisma.goods.create({ data });
    return NextResponse.json({
        sucess: true,
        errorMessage: '创建成功',
        data: {}
    });
}