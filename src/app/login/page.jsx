import RegisterButton from "@/components/RegisterButton";

export default function Login() {
    return (
        <form className="flex flex-col w-1/4 gap-4">
            <input className="px-2" type="text" placeholder="Usuario" />
            <input className="px-2" type="password" placeholder="Contraseña" />
            <button
                className="bg-blue-900 text-white px-3 py-1 rounded"
                type="submit"
            >
                Iniciar sesión
            </button>
            <RegisterButton />
        </form>
    );
}
