"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
	{
		id: 1,
		title: "always fresh & always crispy & always hot",
		image: "/slide1.png",
	},
	{
		id: 2,
		title: "we deliver your order wherever you are in NY",
		image: "/slide2.png",
	},
	{
		id: 3,
		title: "the best pizza to share with your family",
		image: "/slide3.jpg",
	},
];

function Slider() {
	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		const interval = setInterval(
			() =>
				setCurrentSlide((prev) =>
					prev === data.length - 1 ? 0 : prev + 1
				),
			3000
		);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="flex p-2 flex-col  h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] bg-base-100  mb-2 lg:flex-row lg:h-full lg:w-1/2">
			{/* TEXT CONTAINER  */}
			<div className="h-2/5  flex items-center justify-center flex-col gap-8 text-accent">
				<h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl text-secondary">
					{" "}
					{data[currentSlide].title}
				</h1>
				<button className="bg-primary rounded-lg text-base-100 py-4 px-8">
					Order Now
				</button>
			</div>
			{/* IMAGE CONTAINER  */}
			<div className="h-1/2 w-full flex-1 relative lg:h-full lg:w-1/2 ">
				<Image
					src={data[currentSlide].image}
					alt=""
					fill
					className="rounded-lg"
				/>
				{/* // fill only works with relative  */}
			</div>
		</div>
	);
}

export default Slider;
