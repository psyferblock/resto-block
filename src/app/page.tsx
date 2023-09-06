import Image from "next/image";
import Slider from "./components/Slider";
import FeaturedItems from "./components/FeaturedItems";
import Offer from "./components/Offer";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div>
				<Slider />
				<FeaturedItems />
				<Offer />
			</div>
		</main>
	);
}
