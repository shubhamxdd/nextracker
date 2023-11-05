"use client";

import Link from "next/link";
import { FaBug } from "react-icons/fa";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import classNames from "classnames";

const Navbar = () => {
  const linksArray = [
    {
      href: "/",
      text: "Dashboard",
    },
    {
      href: "/issues",
      text: "Issues",
    },
  ];
  const pathname = usePathname();
  return (
    <nav className="flex gap-6 mb-5 items-center border-b px-16 max-sm:px-3 max-md:px-4 max-lg:px-10 h-14 justify-between">
      <Logo logo={FaBug} />
      <ul className="flex gap-5">
        {linksArray.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={classNames({
                "link_styles group": true,
                "text-neutral-900": pathname === link.href,
                "text-neutral-500": pathname !== link.href,
              })}
            >
              {link.text}
              <span
                className={classNames({
                  underline_span: true,
                  "max-w-full": pathname === link.href,
                  "max-w-0 group-hover:max-w-full": pathname !== link.href,
                })}
              ></span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
