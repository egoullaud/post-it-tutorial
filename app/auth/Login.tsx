"use client";

import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <li className="list-none">
      <button
        className="text-sm bg-gray-700 text-white rounded-xl py-2 px-6 disabled:opacity-25"
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </li>
  );
}
