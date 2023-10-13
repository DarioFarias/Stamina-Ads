import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Providers from "../providers/Providers.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Stamina Ads",
    description: "Donde influencers y marcas se conectan",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Providers>
                    <Navbar />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
