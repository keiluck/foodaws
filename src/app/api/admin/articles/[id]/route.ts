import { prisma } from '@/src/db';
import { NextResponse, NextRequest } from 'next/server';

export const PUT = async (req: NextRequest, { params }:any) => {
    const { id } = params;
    const data = await req.json();
    await prisma.articles.update({
        where: {id},
        data,
    });
    return NextResponse.json({
        success: true,
        errorMessage: '修改成功',
    })
}

export const DELETE = async (req: NextRequest, { params }:any) => {
    const { id } = params;
    await prisma.articles.delete({
        where: {id},
    });
    return NextResponse.json({
        success: true,
        errorMessage: '删除成功',
    })
}



// export const GET = async (req: NextRequest, { params }: any) => {

//     const {id} = params.id
    
//     const data = await req.json()
   
//     await prisma.articles.findUnique({
//         where:{id}
//     });
//     try{
//         return NextResponse.json({
//             success: true,
//             code:202,
//             errorMessage: '获取成功',
//             data:data
//         })
//     }catch(err){
//         console.log(err);
//         throw new Error("Failed to fetch posts!");

//     }
    
// }

export const GET = async (req: NextRequest, { params }: any) => {
    const { id } = params; // 直接解构 params

    try {
        const article = await prisma.articles.findUnique({
            where: { id }
        });

        if (!article) {
            return NextResponse.json({
                success: false,
                message: '文章不存在',
                data: null
            }, { status: 404 });
        }
        return NextResponse.json({
            success: true,
            code: 202,
            message: '获取成功', // 使用 message 替代 errorMessage
            data: article // 返回查询到的文章数据
        });
    } catch (err) {
        console.error('Error in GET method:', err); // 添加错误日志
        return NextResponse.json({
            success: false,
            message: '获取失败',
            data: null
        }, { status: 500 });
    }
    
}



