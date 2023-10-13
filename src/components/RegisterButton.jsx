import Link from 'next/link';
import React from 'react'

function RegisterButton() {
  return (
      <Link href="/register" className="bg-black text-white px-3 py-1 rounded text-center">
          Registro
      </Link>
  );
}

export default RegisterButton