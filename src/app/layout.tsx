import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Notification from "./components/Notification";
import SessionProvider from "./SessionProvider";
import { useSession } from "next-auth/react";
import { QueryProvider } from "./components/QueryProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
			<body className={inter.className}>
				<SessionProvider>
					<QueryProvider>
						<div>
							<Notification />
							<Navbar />
							{children}
							<Footer />

							<ToastContainer
								position="bottom-right"
								theme="dark"
								autoClose={3000}
							/>
						</div>
					</QueryProvider>
				</SessionProvider>
			</body>
		</html>
	);
}
