import { NextResponse } from "next/server";
import prisma from "/utils/connect";

export const GET = async (req) => {
    try {
        // Fetch the latest 4 posts based on views in descending order, including user details
        const latestPosts = await prisma.post.findMany({
            take: 4,
            orderBy: {
                views: 'desc', // Order by views in descending order
            },
            include: {
                user: true, // Include user details
            },
        });

        return new NextResponse(JSON.stringify({ latestPosts }), { status: 200 });
    } catch (error) {
        console.log(error);
        return new NextResponse(JSON.stringify({ message: "Something went wrong!" }), { status: 500 });
    }
};
