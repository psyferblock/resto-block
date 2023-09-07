import Image from "next/image";
import Link from "next/link";
import React from "react";

function CartIcon() {
  return (
    <Link href="/cart" className=" md:h-5 md:w-5 flex items-center gap-4 mr-8">
      <div className="relative ">
        <Image src="/cart.png" alt="" fill />
      </div>
      <span>Cart (3)</span>
    </Link>
  );
}

export default CartIcon;
