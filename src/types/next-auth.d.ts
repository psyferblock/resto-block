import { User } from "@prisma/client"
import NextAuth from "next-auth"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: User &{
      /** The user's postal address. */
    //   address: string
    isAdmin:Boolean
    } 
  }
}

declare module "next-auth/jwt" {
    interface JWT {
      isAdmin:Boolean
    }
   }