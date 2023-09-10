import Link from "next/link";
import React from "react";

function Footer() {
	return (
		<div className="h-12 md:h-24 p-4 lg:p-20 xl:-40 bg-secondary text-base-100 flex items-center justify-between">
			<Link
				href="/"
				className="font-bold text-lg"
			>
				Massimo
			</Link>
			<h2>All Rights Reserved</h2>
		</div>
	);
}

export default Footer;
