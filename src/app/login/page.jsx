import Link from "next/link";

export default function Login() {
    return (
        <div className="centralSection">
            <div className="grow flex flex-col justify-evenly items-center p-8 w-full">
                <form className="flex flex-col gap-4 w-full">
                    <input
                        type="text"
                        placeholder="Nombre de usuario"
                        className="w-full text-center rounded border-2 border-blue-500 text-black focus:bg-blue-200"
                    />
                    <input
                        type="text"
                        placeholder="Contraseña"
                        className="w-full text-center rounded border-2 border-blue-500 text-black focus:bg-blue-200"
                    />
                </form>
                <div className="flex flex-col gap-2 w-full">
                    <button type="submit" className="block blueButton">
                        Iniciar sesion
                    </button>
                    <Link href="/register" className="block blackButton">
                        Registro
                    </Link>
                </div>
            </div>
        </div>
    );
}
