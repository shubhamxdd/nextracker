import Link from "next/link";
import { FaBug } from "react-icons/fa";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="flex gap-6 mb-5 items-center border-b px-16 max-sm:px-3 max-md:px-4 max-lg:px-10 h-14 justify-between">
      <Logo logo={FaBug} />
      <ul className="flex gap-5">
        <li>
          <Link href="/" className="group transition duration-300 link_styles">
            Dashboard
            <span className="block focus:block active:block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 rounded bg-zinc-700"></span>
          </Link>
        </li>
        <li>
          <Link
            href="/issues"
            className="group transition duration-300 link_styles"
          >
            Issues
            <span className="block focus:block active:block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 rounded bg-zinc-700"></span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
