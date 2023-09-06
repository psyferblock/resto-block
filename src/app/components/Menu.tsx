"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CartIcon from "./CartIcon";

const links = [
	{ id: 1, title: "Homepage", url: "/" },
	{ id: 2, title: "Menu", url: "/menu" },
	{ id: 3, title: "Working Hours", url: "/" },
	{ id: 4, title: "Contact", url: "/" },
];
const user = null;
function Menu() {
	const [open, setOpen] = useState(false);

	return (
		<div className="">
			{!open ? (
				<Image
					src="/open.png"
					alt=""
					width={20}
					height={20}
					onClick={() => setOpen(true)}
				/>
			) : (
				<Image
					src="/close.png"
					alt=""
					width={20}
					height={20}
					onClick={() => setOpen(false)}
				/>
			)}
			{open && (
				<div className="bg-accent text-white absolute right-0 top-24 h-[calc(100vh-6re)] flex flex-col items-center justify-center text-3xl gap-8 ">
					{links.map((item, key) => (
						<Link href={item.url}>{item.title}</Link>
					))}
					{!user ? (
						<Link
							href="/login"
							onClick={() => setOpen(false)}
						>
							Log In
						</Link>
					) : (
						<Link
							href="/orders"
							onClick={() => setOpen(false)}
						>
							{" "}
							Orders
						</Link>
					)}
					<Link
						href="/cart"
						onClick={() => setOpen(false)}
					>
						<CartIcon />
					</Link>
				</div>
			)}
		</div>
	);
}

export default Menu;
