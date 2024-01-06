"use client";

import Link from "next/link";
import { FaBug } from "react-icons/fa";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { useSession } from "next-auth/react";
import {
  Avatar,
  Box,
  Container,
  DropdownMenu,
  Flex,
  Text,
} from "@radix-ui/themes";

const Navbar = () => {
  const { status, data: session } = useSession();
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
    <nav className="gap-6 mb-5 border-b px-16 max-sm:px-3 max-md:px-4 max-lg:px-10 p-4">
      <Container>
        <Flex justify={"between"}>
          <Flex align={"center"} gap="4">
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
                        "max-w-0 group-hover:max-w-full":
                          pathname !== link.href,
                      })}
                    ></span>
                  </Link>
                </li>
              ))}
            </ul>
          </Flex>
          <Box>
            {status === "authenticated" && (
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <Avatar
                    src={session.user?.image!}
                    fallback="?"
                    size={"3"}
                    className="cursor-pointer"
                    radius="full"
                  />
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                  <DropdownMenu.Label>
                    <Text size={"2"}>{session.user?.email}</Text>
                  </DropdownMenu.Label>
                  <DropdownMenu.Item>
                    <Link href="/api/auth/signout">Logout</Link>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            )}
            {status === "unauthenticated" && (
              <>
                <Link href={"/api/auth/signin"}>Signin</Link>
              </>
            )}
          </Box>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
