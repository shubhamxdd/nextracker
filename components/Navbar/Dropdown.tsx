"use client";

import { Avatar, Box, DropdownMenu, Text } from "@radix-ui/themes";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Dropdown = () => {
  const { status, data: session } = useSession();

  if (status === "loading") return <Skeleton width="3rem" />;

  if (status === "unauthenticated")
    return (
      <Link
        href={"/api/auth/signin"}
        className="text-neutral-500 hover:text-neutral-900 transition duration-300"
      >
        Signin
      </Link>
    );

  return (
    <div>
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
                <Link
                  href="/api/auth/signout"
                  className="text-neutral-500 hover:text-neutral-900 transition duration-300"
                >
                  Logout
                </Link>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        )}
      </Box>
    </div>
  );
};

export default Dropdown;
