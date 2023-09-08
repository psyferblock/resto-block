import prisma from "@/app/utils/connect";
import { NextRequest, NextResponse } from "next/server";
//FETCHING ALL CATEGORIES
export const GET = async (req: NextRequest) => {
	const { searchParams } = new URL(req.url);
	const cat = searchParams.get("cat");
	try {
		const products = await prisma.product.findMany({
			where: {
				...(cat ? { catSlug: cat } : { isFeatured: true }),
			},
		});
		// FOR HOME PAGE WE HAVE FEATURED PRODUCTS AND FOR CATEGORIES THEY COME FILTERED FROM THE CATEGORY.
		return new NextResponse(JSON.stringify(products), { status: 200 });
	} catch (error) {
		console.log("error", error);
		return new NextResponse(
			JSON.stringify({ message: "something went wrong " }),
			{ status: 500 }
		);
	}
};
