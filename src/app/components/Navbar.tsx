import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import Image from "next/image";
import CartIcon from "./CartIcon";

function Navbar() {
	const user = false;
	return (
		<div className="h-12 text-secondary p-4 flex items-center justify-between border-secondary uppercase md:h-24">
			{/* LEFT LINKS  */}
			<div className="hidden md:flex gap-4  flex-1">
				<Link href="/">Homepage</Link>
				<Link href="/menu">Menu</Link>
				<Link href="/">Contact</Link>
			</div>
			{/* logo  */}
			<div className="text-xl font-bold flex-1 text-center ">
				<Link href="#">Massimo</Link>
			</div>
			{/* mobile menu  */}
			<div className="md:hidden">
				<Menu />
			</div>
			{/* RIGHT LINKS  */}
			<div className="hidden md:flex gap-4 items-center flex-1 justify-end ">
				<div className="flex items-center gap-2 cursor-pointer md:absolute  top-3 r-2 bg-info  lg:static rounded-md px-1 lg:px-40">
					<Image
						alt=""
						src="/phone.png"
						width={20}
						height={20}
					/>
					<span>123 234 345</span>
				</div>
				{!user ? (
					<Link href="/login">Login</Link>
				) : (
					<Link href="/orders">Orders</Link>
				)}
				<CartIcon />
			</div>
		</div>
	);
}

export default Navbar;
