"use client";

import Image from "next/image";
import { signOut } from "next-auth/react";
import Link from "next/link";

type User = {
  image: string;
};

export default function Logged({ image }: User) {
  return (
    <li className="flex mx-8 gap-8 items-center">
      <Link href="/dashbaord">
        <Image
          className="rounded-full"
          width={64}
          height={64}
          src={image}
          alt=""
          priority
        />
      </Link>
      <button
        className="bg-gray-700 text-white text-sm rounded-xl px-6 py-2"
        onClick={() => signOut()}
      >
        Sign Out
      </button>
    </li>
  );
}
