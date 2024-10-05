import { authOptions } from "@/lib/auth";
import prisma from "@/lib/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
const session = await getServerSession(authOptions);

if (!session || !session.user) {
    return NextResponse.json({
        message: "You must be logged in to create hotels"
    }, { status: 401 });
}

const isOwner = session.user.role === "HOTEL_OWNER" || session.user.role === "ADMIN";
if (!isOwner) {
    return NextResponse.json({
        message: "You are not authorized to create hotels"
    }, { status: 403 });
}

const { name, location, pricePerNight, description, merchantSolAddress, image } = await req.json();

if (!name || !location || !pricePerNight || !description || !merchantSolAddress || !image) {
    return NextResponse.json({
        message: "Please provide all the required fields"
    }, { status: 400 });
}

try {
    const hotel = await prisma.hotel.create({
        data: {
            name,
            location,
            pricePerNight,
            description,
            MerchantSolAddress: merchantSolAddress,
            image,
            ownerEmail: session.user.email,
            user: {
                connect: {
                    email: session.user.email
                }
            }
        },
        include: {
            user: true
        }
    });

    return NextResponse.json({
        message: "Hotel created successfully",
        hotel
    }, { status: 201 });
} catch (error) {
    console.error("Error creating hotel:", error);
    return NextResponse.json({
        message: "An error occurred while creating the hotel"
    }, { status: 500 });
}
}
