import React from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";

const LoginButton = () => {
    return (
        <Link
            href="/login"
            className="bg-blue-900 hover:bg-blue-500 hover:text-blue-900 border-2 border-blue-900 text-white px-3 py-1 rounded transition duration-150"
        >
            Ingresar
        </Link>
    );
};

export default LoginButton;
