import Link from "next/link";
import React from "react";
import { MenuAlt3Icon } from "@heroicons/react/outline";
import Menuitems from "./Menuitems";

const Navigation = () => {
  return (
    <div className="w-full h-24 md:h-16 bg-gray-900 fixed z-20 text-gray-50 flex items-center">
      <div className="px-3 md:px-0 md:container md:mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center ">
          <div>
            <Link href="/Legal">
              <a className="font-bold tracking-wider text-2xl text-center md:text-left">
                FART.XXX
              </a>
            </Link>
          </div>
          <Menuitems />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
