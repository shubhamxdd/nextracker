"use client";

import { Avatar, Box, DropdownMenu, Text } from "@radix-ui/themes";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Dropdown = () => {
  const { status, data: session } = useSession();

  return (
    <div>
      {" "}
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
    </div>
  );
};

export default Dropdown;
