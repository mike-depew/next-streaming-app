import React from "react";
import Link from "next/link";

function Menuitems() {
  return (
    <div className="flex  justify-center md:justify-start mt-3 md:mt-0 space-x-8 ">
      <div className="">
        <Link href="/">
          <a className="font-medium text-sm md:text-md hover:text-gray-400">
            Home
          </a>
        </Link>
      </div>
      <div>
        <Link href="/video0001">
          <a className="font-medium text-sm md:text-md hover:text-gray-400">
            New Videos
          </a>
        </Link>
      </div>
      <div>
        <Link href="/video0002">
          <a className="font-medium text-sm md:text-md hover:text-gray-400">
            Photos
          </a>
        </Link>
      </div>
      <div>
        <Link href="/login">
          <a className="font-medium text-sm md:text-md hover:text-gray-400">
            Members login
          </a>
        </Link>
      </div>

      <div>
        <Link href="/signUp">
          <a className="font-medium text-sm md:text-md hover:text-gray-50 bg-blue-500 px-10 py-2 rounded-md hover:bg-blue-700">
            SignUp
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Menuitems;
