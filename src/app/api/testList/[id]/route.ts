import { prisma } from '@/src/db';
import { NextResponse, NextRequest } from 'next/server';

export const GET = async (req:NextRequest, {params}:any) => {
    const { id } = params;
    const data = await req.json();
    await prisma.articles.findMany({
        where: {id},
    });
    return NextResponse.json({
        sucess: true,
        errorMessage: '获取单条记录' + params.id,
        data: data
    })
}

// export const PUT = async (req: NextRequest, { params }:any) => {
//     const { id } = params;
//     const data = await req.json();
//     await prisma.articles.update({
//         where: {id},
//         data,
//     });
//     return NextResponse.json({
//         success: true,
//         errorMessage: '修改成功',
//     })
// }