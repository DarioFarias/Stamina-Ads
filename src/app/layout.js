import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
    title: "Stamina Ads",
    description: "Donde influencers y marcas se conectan",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
