import Link from "next/link";
import React from "react";

function RegisterButton() {
    return (
        <Link
            href="/register"
            className="block bg-black hover:bg-gray-600 hover:text-white text-white border-2 border-black px-3 py-1 rounded text-center transition duration-150"
        >
            Registro
        </Link>
    );
}

export default RegisterButton;
