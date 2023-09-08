import { env } from "@/app/lib/env";
import prisma from "@/app/utils/connect";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { NextAuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";


export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma as PrismaClient) as Adapter,
    providers: [
      GoogleProvider({
        clientId: env.GOOGLE_CLIENT_ID,
        clientSecret: env.GOOGLE_CLIENT_SECRET,
      }),
    ],
  
  
  
    callbacks: {
  
  
  
  //     session({ session, user }) {
  //       session.user.id = user.id;
  //       return session;
  //     },
    },
    events: {
      //any thing we place inside the block will be called any time there is a sign in
      // async signIn({ user }) {
      //   await mergeAnonymousCartIntoUserCart(user.id);
      // },
    },
  };