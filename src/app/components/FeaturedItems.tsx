import { featuredProducts } from "@/data";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

const Featured = () => {
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
							<p className="p-4 2xl:p-8">{item.desc}</p>
							<span className="text-xl font-bold">
								${item.price}
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
