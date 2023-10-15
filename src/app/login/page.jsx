import RegisterButton from "@/components/RegisterButton";

export default function Login() {
    return (
        <div class="grow flex flex-col justify-center items-center bg-white rounded w-11/12 md:w-9/12 p-4 min-w-fit max-w-3xl">
            <form className="grow w-3/4 flex flex-col justify-evenly items-center p-8 min-w-min">
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
                <div className="flex flex-col gap-2 w-full">
                    <button
                        type="submit"
                        className="block bg-blue-900 hover:bg-blue-500 hover:text-blue-900 border-2 border-blue-900 text-white px-3 py-1 rounded transition duration-150"
                    >
                        Iniciar sesion
                    </button>
                    <RegisterButton />
                </div>
            </form>
        </div>
    );
}
