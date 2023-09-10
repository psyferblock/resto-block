import Image from "next/image";
import Slider from "./components/Slider";
import FeaturedItems from "./components/FeaturedItems";
import Offer from "./components/Offer";

export default function Home() {
	return (
		<main className=" ">
				<Slider />
				<FeaturedItems />
				<Offer />
		</main>
	);
}
