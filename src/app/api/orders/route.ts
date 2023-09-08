import { getAuthSession } from "@/app/utils/authOptions";
import prisma from "@/app/utils/connect";
import { NextRequest, NextResponse } from "next/server";
//FETCHING ALL CATEGORIES

export const GET = async (req: NextRequest) => {
	const session = await getAuthSession();

	if (session) {
		try {
			if (session.user.isAdmin) {
                const orders =prisma.order.findMany()
				return new NextResponse(JSON.stringify(orders), {
					status: 200,
				});
                const orders =prisma.order.findMany({userEMail})
				return new NextResponse(JSON.stringify(orders), {
					status: 200,
			}
		} catch (error) {
			console.log("error", error);
			return new NextResponse(
				JSON.stringify({ message: "something went wrong " }),
				{ status: 500 }
			);
		}
	} else {
		return new NextResponse(
			JSON.stringify({ message: "you are not authenticated " }),
			{ status: 401 }
		);
	}
};
