import Link from "next/link";
import React from "react";

function page() {
    return (
        <div className="grow flex flex-col justify-between items-center p-8 w-full">
            <h2 className="text-blue-900 text-2xl font-bold mb-8">
                Marca
            </h2>
            <form className="flex flex-col gap-4 w-full">
                <input
                    type="text"
                    placeholder="Nombre de usuario"
                    className="w-full text-center rounded border-2 border-blue-500 text-black focus:bg-blue-200"
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    className="w-full text-center rounded border-2 border-blue-500 text-black focus:bg-blue-200"
                />
                <input
                    type="password"
                    placeholder="Repetir contraseña"
                    className="w-full text-center rounded border-2 border-blue-500 text-black focus:bg-blue-200"
                />
                <input
                    type="text"
                    placeholder="Correo"
                    className="w-full text-center rounded border-2 border-blue-500 text-black focus:bg-blue-200"
                />
                <input
                    type="text"
                    placeholder="Telefono"
                    className="w-full text-center rounded border-2 border-blue-500 text-black focus:bg-blue-200"
                />
                <input
                    type="text"
                    placeholder="Pais"
                    className="w-full text-center rounded border-2 border-blue-500 text-black focus:bg-blue-200"
                />
                <input
                    type="text"
                    placeholder="Web"
                    className="w-full text-center rounded border-2 border-blue-500 text-black focus:bg-blue-200"
                />
                <input
                    type="text"
                    placeholder="Rubro"
                    className="w-full text-center rounded border-2 border-blue-500 text-black focus:bg-blue-200"
                />
            </form>
            <div className="flex flex-col gap-2 w-full mt-8">
                <button type="submit" className="blueButton w-full">
                    Registro
                </button>
                <Link href="/register" className="blackButton w-full">
                    Volver
                </Link>
            </div>
        </div>
    );
}

export default page;
