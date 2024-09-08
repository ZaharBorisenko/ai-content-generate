"use client";
import React from "react";
import { NavList } from "@/app/dashboard/_data/nav";
import Link from "next/link";
import { usePathname } from "next/navigation";
export const SideNav = () => {
  const path = usePathname();
  return (
    <div className="h-screen p-5 shadow-md border-r-2">
      <div className="font-extrabold text-4xl">Logo</div>

      <div className="mt-5">
        {NavList.map((nav) => (
          <Link
            key={nav.name}
            href={nav.src}
            className={`${
              path === nav.src && "bg-blue-500"
            } flex items-center gap-x-5 p-5 my-2.5 rounded-2xl hover:bg-blue-500`}
          >
            <p className="text-2xl font-bold">{nav.name}</p>
            <nav.icon className="text-xl w-8 h-8" />
          </Link>
        ))}
      </div>
    </div>
  );
};
