"use client"
import Link from "next/link";
import LoginButton from "./LoginButton";

function Navbar() {
    return (
        <div>
            <nav className="bg-slate-900 flex justify-between px-8 text-white gap-2 p-2 items-center w-screen">
                <div>
                    <Link href="/">Stamina Ads</Link>
                </div>
                <LoginButton />
            </nav>
        </div>
    );
}

export default Navbar;
