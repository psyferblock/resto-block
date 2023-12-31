import { env } from "@/app/lib/env";
import prisma from "@/app/utils/connect";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { NextAuthOptions, User, getServerSession } from "next-auth";
import { Adapter } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";

import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
	interface Session {
		user: User & {
			isAdmin: Boolean;
		};
	}
}
declare module "next-auth/jwt" {
	interface JWT {
		isAdmin: Boolean;
	}
}

export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),
	session: {
		strategy: "jwt",
	},
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
		}),
	],

	callbacks: {
		async session({ token, session }: { token: JWT; session: Session }) {
			if (token) {
				session.user.isAdmin = token.isAdmin;
			}
			return session;
		},
		async jwt({ token }) {
			const userInDb = await prisma.user.findUnique({
				where: {
					email: token.email!,
				},
			});
			token.isAdmin = userInDb?.isAdmin!;

			return token;
		},
	},
	// events: {
	// 	//any thing we place inside the block will be called any time there is a sign in
	// 	// async signIn({ user }) {
	// 	//   await mergeAnonymousCartIntoUserCart(user.id);
	// 	// },
	// },
};

export const getAuthSession = () => getServerSession(authOptions);
