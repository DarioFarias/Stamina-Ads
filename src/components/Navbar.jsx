"use client"
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import LoginButton from "./LoginButton";

function Navbar() {
    const  {data: session} = useSession()
    return (
        <div>
            <nav className="bg-slate-900 flex justify-between px-8 text-white gap-2 p-2 items-center">
                <div>
                    <Link href="/">Stamina Ads</Link>
                </div>
                <LoginButton />
            </nav>
        </div>
    );
}

export default Navbar;
