import { ProductType } from "@/types/types";
import Image from "next/image";
import React from "react";

const getData = async () => {
	const res = await fetch("http://localhost:3000/api/products", {
		cache: "no-store",
	});
	if (!res.ok) {
		throw new Error("something went wrong ");
	}
	return res.json();
};

const Featured = async () => {
	const featuredProducts: ProductType[] = await getData();
	return (
		<div className="w-screen overflow-x-scroll text-primary">
			{/* WRAPPER */}
			<div className="w-max flex">
				{/* SINGLE ITEM */}
				{featuredProducts.map((item) => (
					<div
						key={item.id}
						className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-warning transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
					>
						{/* IMAGE CONTAINER */}
						{item.img && (
							<div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-1000 rounded-lg m-1 ">
								<Image
									src={item.img}
									alt=""
									fill
									className="object-contain  rounded-lg "
								/>
							</div>
						)}
						{/* TEXT CONTAINER */}
						<div className=" flex-1 flex flex-col items-center justify-center text-center gap-4 ">
							<h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl ">
								{item.title}
							</h1>
							<h2 className="p-4 2xl:p-8">{item.desc}</h2>
							<span className="text-xl font-bold">
								${item.productPrice}
							</span>
							<button className="bg-primary text-base-100 p-2 rounded-md">
								Add to Cart
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Featured;
