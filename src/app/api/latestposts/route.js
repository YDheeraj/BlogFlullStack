import { NextResponse } from "next/server";
import prisma from "@/utils/connect";

export const GET = async (req) => {
    try {
        // Fetch the latest 3 posts
        const latestPosts = await prisma.post.findMany({
            take: 3,
            orderBy: {
                createdAt: 'desc',
            },
        });

        return new NextResponse(JSON.stringify({ latestPosts }), { status: 200 });
    } catch (error) {
        console.log(error);
        return new NextResponse(JSON.stringify({ message: "Something went wrong!" }), { status: 500 });
    }
};
