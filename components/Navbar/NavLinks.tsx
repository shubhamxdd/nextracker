import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
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
    <>
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
    </>
  );
};

export default NavLinks;
