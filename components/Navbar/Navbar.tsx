"use client";

import Link from "next/link";
import { FaBug } from "react-icons/fa";
import Logo from "./Logo";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="flex gap-6 mb-5 items-center border-b px-16 max-sm:px-3 max-md:px-4 max-lg:px-10 h-14 justify-between">
      <Logo logo={FaBug} />
      <ul className="flex gap-5">
        <li>
          <Link
            href="/"
            className={`link_styles group ${
              pathname === "/" ? "text-neutral-800" : "text-neutral-500"
            }`}
          >
            Dashboard
            <span
              className={`underline_span  ${
                pathname === "/"
                  ? "max-w-full"
                  : "max-w-0 group-hover:max-w-full"
              }`}
            ></span>
          </Link>
        </li>
        <li>
          <Link
            href="/issues"
            className={`link_styles group ${
              pathname === "/issues" ? "text-neutral-800" : "text-neutral-500"
            }`}
          >
            Issues
            <span
              className={`underline_span  ${
                pathname === "/issues"
                  ? "max-w-full"
                  : "max-w-0 group-hover:max-w-full"
              }`}
            ></span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
