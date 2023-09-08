import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Notification from "./components/Notification";
import SessionProvider from "./SessionProvider"

const inter = Inter({ subsets: ["latin"] });



export const metadata: Metadata = {
	title: "the Block Resto/pub",
	description: "only in Psyfer town and Community",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<SessionProvider session={session}>
				<body className={inter.className}>
					<Notification />
					<Navbar />
					{children}
					<Footer />
				</body>
			</SessionProvider>
		</html>
	);
}
