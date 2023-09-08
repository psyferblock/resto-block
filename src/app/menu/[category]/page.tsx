import { ProductType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const getData = async (category:string) => {
	const res = await fetch(
		`http://localhost:3000/api/products?cat=${category}`,
		{ cache: "no-store" }
	);

	if (!res.ok) {
		throw new Error("oops something went wrong ");
	}
	return res.json();
};

type propsType = {
	params: {
		category: string;
	};
};

const CategoryPage = async ({params}: propsType) => {

	const products=await getData(params.category)

	return (
		<div className="flex flex-wrap text-primary ">
			{products.map((item:ProductType) => (
				<Link
					className="w-full h-[60vh] border-r-2 border-b-2 border-primary sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group odd:bg-accent"
					href={`/product/${item.id}`}
					key={item.id}
				>
					{/* IMAGE CONTAINER */}
					{item.img && (
						<div className="relative h-[80%]">
							<Image
								src={item.img}
								alt=""
								fill
								className="object-contain"
							/>
						</div>
					)}
					{/* TEXT CONTAINER */}
					<div className="flex items-center justify-between font-bold">
						<h1 className="text-2xl uppercase p-2">{item.title}</h1>
						<h2 className="group-hover:hidden text-xl">
							${item.productPrice}
						</h2>
						<button className="hidden group-hover:block uppercase bg-primary text-base-100 p-2 rounded-md">
							Add to Cart
						</button>
					</div>
				</Link>
			))}
		</div>
	);
};

export default CategoryPage;
