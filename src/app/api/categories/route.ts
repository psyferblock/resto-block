import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();
//FETCHING ALL CATEGORIES
export const GET = async () => {
	try {
		const categories = await prisma.category.findMany();
		return new NextResponse(JSON.stringify(categories), { status: 200 });
	} catch (error) {
		console.log("error", error);
		return new NextResponse(
			JSON.stringify({ message: "something went wrong " }),
			{ status: 500 }
		);
	}
	return new NextResponse("hello", { status: 200 });
};
