import Link from "next/link";
import React from "react";
import Menu from "./Menu";

function Navbar() {
	return (
		<div className="h-12 text-accent p-4 flex items-center justify-between border-accent uppercase">
			{/* logo  */}
			logo here
			<div>
				<Link href="#" />
			</div>
			{/* mobile menu  */}
			<Menu />
		</div>
	);
}

export default Navbar;
