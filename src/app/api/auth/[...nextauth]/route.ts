
import NextAuth from "next-auth/next";
import { authOptions } from "@/app/utils/authOptions";


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

// since google requires actual values and it cant tell if the env variables are there or not we normally add the exclamation mark "!" which asserts that the env variables are there
// but what if we forgot ? what if there is an error ?
// that is why we installed zod

// we use env becasue we parsed the process.env in the env file where we use zod to validate the variables.