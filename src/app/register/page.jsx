import Link from "next/link";
import React from "react";

function page() {
    return (
        <div className="flex flex-col gap-2 w-full mt-8 justify-center">
            <Link href="/register/influencer" className="blueButton w-full">
                Influencer
            </Link>
            <Link href="/register/brand" className="blueButton w-full">
                Marca
            </Link>
        </div>
    );
}

export default page;
