import Image from "next/image";
import Link from "next/link";
import React from "react";
import { auth, signOut } from "@/../auth";

const Navbar = async () => {
  const session = await auth();
  return (
    <nav className="bg-white border-gray-200 border-b">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-2">
        <Link
          href="/"
          className="bg-clip-text from-blue-500 to-indigo-500 text-2xl font-bold text-transparent bg-gradient-to-r"
        >
          NEXT AUTH
        </Link>
        <div className="flex items-center gap-3">
          <ul className="hidden md:flex items-center gap-4 mr-5 font-semibold ">
            <li className="text-gray-500 hover:text-gray-800">
              <Link href="/">Home</Link>
            </li>
            {session && (
              <>
                <li className="text-gray-500 hover:text-gray-800">
                  <Link href="/product">Prouct</Link>
                </li>
                <li className="text-gray-500 hover:text-gray-800">
                  <Link href="/dashboard">Dashboard</Link>
                </li>
                {session?.user?.role === "admin" ? (
                  <li className="text-gray-500 hover:text-gray-800">
                    <Link href="/user">User</Link>
                  </li>
                ) : null}
              </>
            )}
          </ul>
          {session && (
            <div className="flex gap-3 items-center">
              <div className="flex flex-col  justify-center space-y-1">
                <span className="text-sm font-semibold text-gray-500 capitalize">
                  {session?.user?.name}
                </span>
                <span className="text-xs font-semibold text-gray-500 capitalize">
                  {session?.user?.role}
                </span>
              </div>
              <button className="bg-gray-100 ring-2 rounded-full" type="button">
                <Image
                  src={session?.user?.image || "/avatar.jpeg"}
                  alt="avatar"
                  width={64}
                  height={64}
                  className="w-8 h-8 rounded-full"
                />
              </button>
            </div>
          )}

          {session ? (
            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/login" });
              }}
            >
              <button
                type="submit"
                className="bg-red-500 text-white rounded-md hover:bg-red-600 px-4 py-2"
              >
                Logout
              </button>
            </form>
          ) : (
            <Link
              href="/login"
              className="bg-blue-500 text-white rounded-md hover:bg-blue-600 px-4 py-2"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
