"use client";

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
    <header className="p-4 flex justify-between border-b border-white/30">
      <div className="logo">Logo</div>
      <div className="navigation-link">
        <ul className="flex gap-2 text-white">
          {Links.map((link, index) => {
            return (
              <Link
                className={`${
                  pathname == link.path ? "bg-green-900" : "bg-green-700"
                } p-2 rounded-md`}
                key={index}
                href={link.path}
              >
                {link.title}
              </Link>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
