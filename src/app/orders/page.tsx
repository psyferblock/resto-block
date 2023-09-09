"use client";
import { OrderType } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
// client side because we dont want the search engines to find it . plus the refreshing of orders should happen on the front end
import React from "react";

const OrdersPage = () => {
	const { data: session, status } = useSession();

	const router = useRouter();

	if (status === "unauthenticated") {
		router.push("/");
	}

	const { isLoading, error, data } = useQuery({
		// we should give to the query key a unit key
		queryKey: ["orders"],
		queryFn: () =>
			fetch("http://localhost:3000/api/orders").then((res) => res.json()),
	});

  const handleUpdate = (e: React.FormEvent<HTMLFormElement>,id:string)=>{
    e.preventDefault()
    const form =e.target as HTMLFormElement
    const input =form.elements[0] as HTMLInputElement
    const status =input.value

  }
	if (isLoading || status === "loading") return <div>Loading ....</div>;
	return (
		<div className="p-4 lg:px-20 xl:px-40">
			<table className="w-full border-separate border-spacing-3">
				<thead>
					<tr className="text-left">
						<th className="hidden md:block">Order ID</th>
						<th>Date</th>
						<th>Price</th>
						<th className="hidden md:block">Products</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					{data.map((item: OrderType) => (
						<tr
							className={`${
								item.status !== "delivered" && "bg-red-50"
							}`}
							key={item.id}
						>
							<td className="hidden md:block py-6 px-1">
								{item.id}
							</td>
							<td className="py-6 px-1">
								{item.createdAt.toString().slice(0, 10)}
							</td>
							<td className="py-6 px-1">{item.price}</td>
							<td className="hidden md:block py-6 px-1">
								{item.products[0].title}
							</td>
							{session?.user.isAdmin ? (
								<td>
									<form className="flex justify-between px-2" onSubmit={(e)=>{handleUpdate(e,item.id)}}>
										<input
											type="text"
											placeholder={item.status}
											className=" ring-primary p-2 ring-1 rounded-md"
										/>
										<button className=" btn btn-accent">
											<Image
												src="/edit.png"
												alt="edit"
												height={20}
												width={20}
											/>{" "}
										</button>
									</form>
								</td>
							) : (
								<td className="py-6 px-1">{item.status}</td>
							)}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default OrdersPage;
