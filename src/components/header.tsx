"use client";

import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Header() {
  const Links = [
    {
      title: "Dashboard",
      path: "/dashboard",
    },
    {
      title: "Account",
      path: "/account",
    },
  ];
  const pathname = usePathname();
  return (
    <header className="p-4 max-md:p-2 flex justify-between border-b border-white/30">
      <Link href="/dashboard">
        <div className="logo"></div>
      </Link>
      <div className="navigation-link">
        <ul className="flex gap-2 text-white">
          {Links.map((link, index) => {
            return (
              <Link
                className={`${
                  pathname == link.path ? "bg-teal-700" : ""
                } p-2 max-md:py-1 text-[12px] max-md:text-sm rounded-md text-white font-normal`}
                key={index}
                href={link.path}
              >
                {link.title}
              </Link>
            );
          })}
          <LogoutLink className="p-2 max-md:py-1 text-[12px] max-md:text-sm rounded-md text-white font-normal">
            Logout
          </LogoutLink>
        </ul>
      </div>
    </header>
  );
}
