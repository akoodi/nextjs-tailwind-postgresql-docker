import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/scss/globals.scss";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Next.js + Tailwind + PostgreSQL /w Docker",
	description: "desc...",
};

// quote data handling

import JotaiProvider from "@/providers/jotai-provider";
import Footer from "@/components/Footer";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={`${inter.variable}`}>
			<body>
				<div className="flex flex-col max-h-full h-full">
					<JotaiProvider>
						<div className="grow">{children}</div>
					</JotaiProvider>
					<Footer />
				</div>				
			</body>
		</html>
	);
}
