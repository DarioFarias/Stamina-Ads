import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Providers from "../providers/Providers.jsx";

export const metadata = {
    title: "Stamina Ads",
    description: "Donde influencers y marcas se conectan",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <div className="grow flex flex-col items-center p-4 md:p-8 lg:p-16">
                    {children}
                </div>
            </body>
        </html>
    );
}
