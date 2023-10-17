"use client";
import Link from "next/link";

function Navbar() {
    return (
        <nav className="bg-slate-900 flex justify-between px-8 text-white gap-2 p-2 items-center w-full">
            <div>
                <Link href="/">Stamina Ads</Link>
            </div>
            <div className="flex gap-4 grow justify-center">
                <Link href="/campaigns">Campañas</Link>
                <Link href="/publications">Publicaciones</Link>
                <Link href="/profile">Perfil</Link>
                <Link href="/statistics">Estadisticas</Link>
            </div>
            <div className="flex gap-2">
                <button className="blackButton">Salir</button>
                <Link href="/login" className="blueButton">
                    Ingresar
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
