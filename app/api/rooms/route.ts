import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function POST(req: Request) {
    const session = await getServerSession(authOptions);
    const { title } = await req.json();

    if (!session || !session.user) {
        return NextResponse.json({
            message: "You must be logged in to create hotels"
        }, { status: 401 });
    }

    if (!title) {
        return NextResponse.json({
            message: "Please provide a search title"
        }, { status: 400 });
    }

    try {
        const hotels = await prisma.hotel.findMany({
            where: {
                OR: [
                    { name: { contains: title, mode: 'insensitive' } },
                    { description: { contains: title, mode: 'insensitive' } },
                    { location: { contains: title, mode: 'insensitive' } }
                ]
            },
            select: { id: true, name: true, location: true, pricePerNight: true, description: true, image: true },
            take: 10
        });

        return NextResponse.json({ message: "Search results retrieved successfully", hotels }, { status: 200 });
    } catch (error) {
        console.error("Error fetching search results:", error);
        return NextResponse.json({ message: "An error occurred while searching" }, { status: 500 });
    }
}
