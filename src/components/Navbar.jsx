"use client";
import Link from "next/link";

function Navbar() {
    return (
        <nav className="bg-slate-900 flex justify-between px-8 text-white gap-2 p-2 items-center w-full">
            <div>
                <Link href="/">Stamina Ads</Link>
            </div>
            <Link href="/login" className="blueButton">
                Ingresar
            </Link>
        </nav>
    );
}

export default Navbar;
