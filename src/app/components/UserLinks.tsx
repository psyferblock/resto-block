"use client"

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";


const UserLinks = () => {
  const { status } = useSession();
  return (
    <div>
      {status === "authenticated" ? (
        <div>
          <Link href="/orders">Orders</Link>
          <Link href="/" className="ml-4 cursor-pointer" onClick={() => signOut({redirect: false, callbackUrl: "/"}) }>Logout</Link>
        </div>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </div>
  );
};

export default UserLinks;