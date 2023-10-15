import React from "react";

function UserRegister() {
    return (
        <div class="grow flex flex-col justify-center items-center bg-white rounded w-11/12 md:w-9/12 p-4 min-w-fit max-w-3xl">
            <h2 className="text-blue-900 text-2xl font-bold mb-5">
                Influencer
            </h2>
            <form className="grow w-3/4 flex flex-col justify-evenly items-center p-8 min-w-min">
                <input
                    type="text"
                    placeholder="Nombre de usuario"
                    className="w-full text-center rounded border-2 border-blue-500 text-black focus:bg-blue-200"
                />
                <button
                    type="submit"
                    className="block w-full bg-blue-900 hover:bg-blue-500 hover:text-blue-900 border-2 border-blue-900 text-white px-3 py-1 rounded transition duration-150"
                >
                    Registro
                </button>
            </form>
        </div>
    );
}

export default UserRegister;
