"use client";

import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../public/teal-logo.png";
import Image from "next/image";
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
    <header className="container mx-auto p-4 max-md:p-2 flex justify-between border-b-2 border-white/30">
      <Link href="/dashboard">
        <div className="logo">
          <Image width={30} src={logo} alt="logo" />
        </div>
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
